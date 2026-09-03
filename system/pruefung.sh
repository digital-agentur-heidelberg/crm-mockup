#!/usr/bin/env bash
# Statische, vollständig lokale Prüfung für den klickbaren Entwurf.
#
# Diese Prüfung prüft ausdrücklich NICHT:
# - Kontrastwerte
# - ARIA-Semantik
# - horizontalen Überlauf
# - Tastaturwege
# - fachliche Regeln
#
# Ein erfolgreicher Lauf ist deshalb kein Barrierefreiheitsnachweis. Er ersetzt
# weder die Rollen- und Zustandsprüfung noch die manuelle Prüfrunde.

set -u

script_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
repo_dir=$(cd -- "$script_dir/.." && pwd)
screens_dir="$repo_dir/screens"
system_dir="$repo_dir/system"
status=0

report_matches() {
  local heading=$1
  local pattern=$2
  shift 2
  local output
  output=$(grep -nEH "$pattern" "$@" 2>/dev/null || true)
  if [[ -n $output ]]; then
    printf '%s\n%s\n' "$heading" "$output"
    status=1
  fi
}

mapfile -t screen_files < <(find "$screens_dir" -maxdepth 1 -type f -name '*.html' -print | sort)
mapfile -t system_text_files < <(find "$system_dir" -type f \( -name '*.html' -o -name '*.js' -o -name '*.css' \) -print | sort)
all_text_files=("${screen_files[@]}" "${system_text_files[@]}")

report_matches 'FEHLER: <style>-Block unter screens/:' '<style([[:space:]>])' "${screen_files[@]}"
report_matches 'FEHLER: style=-Attribut unter screens/:' 'style[[:space:]]*=' "${screen_files[@]}"
report_matches 'FEHLER: externe Adresse in href oder src:' "(href|src)[[:space:]]*=[[:space:]]*[\"'](https?:|//)" "${all_text_files[@]}"

for screen in "${screen_files[@]}"; do
  if ! grep -Eq '<body[^>]*data-screen="[^"]+"' "$screen"; then
    printf 'FEHLER: %s: body ohne data-screen\n' "$screen"
    status=1
  fi
  if ! grep -Eq '<script[^>]*src="\.\./system/shell\.js"' "$screen"; then
    printf 'FEHLER: %s: system/shell.js nicht eingebunden\n' "$screen"
    status=1
  fi
  compact_head=$(sed -n '/<head>/,/<\/head>/p' "$screen" | tr -d '[:space:]')
  expected_head='<scriptsrc="../system/fidelity.js"></script><linkrel="stylesheet"href="../system/tokens.css"><linkrel="stylesheet"href="../system/base.css"><linkrel="stylesheet"href="../system/components.css"><linkrel="stylesheet"href="../system/wireframe.css"><scriptsrc="../system/vendor/lucide.js"defer></script><scriptsrc="../system/shell.js"defer></script>'
  if [[ $compact_head != *"$expected_head"* ]]; then
    printf 'FEHLER: %s: Fidelity-, CSS- und Shell-Dateien nicht in der verbindlichen Reihenfolge eingebunden\n' "$screen"
    status=1
  fi
done

styleguide_head=$(sed -n '/<head>/,/<\/head>/p' "$system_dir/styleguide.html" | tr -d '[:space:]')
expected_styleguide_head='<scriptsrc="fidelity.js"></script><linkrel="stylesheet"href="tokens.css"><linkrel="stylesheet"href="base.css"><linkrel="stylesheet"href="components.css"><linkrel="stylesheet"href="wireframe.css"><scriptsrc="vendor/lucide.js"defer></script><scriptsrc="shell.js"defer></script>'
if [[ $styleguide_head != *"$expected_styleguide_head"* ]]; then
  printf 'FEHLER: %s: Fidelity-, CSS- und Shell-Dateien nicht in der verbindlichen Reihenfolge eingebunden\n' "$system_dir/styleguide.html"
  status=1
fi

mapfile -t html_files < <(find "$screens_dir" "$system_dir" -type f -name '*.html' -print | sort)
for html in "${html_files[@]}"; do
  while IFS= read -r hit; do
    line=${hit%%:*}
    attribute=${hit#*:}
    href=${attribute#href=\"}
    href=${href%\"}
    case "$href" in
      ''|'#'*|mailto:*|tel:*|javascript:*|http:*|https:*|'//'*) continue ;;
    esac
    target=${href%%#*}
    target=${target%%\?*}
    if [[ $target == /* ]]; then
      resolved="$repo_dir$target"
    else
      resolved="$(dirname -- "$html")/$target"
    fi
    if [[ ! -e $resolved ]]; then
      printf 'FEHLER: %s:%s: internes href-Ziel fehlt: %s\n' "$html" "$line" "$href"
      status=1
    fi
  done < <(grep -nEo 'href="[^"]*"' "$html" || true)
done

# shell.js erzeugt Navigation und Suchziele für Screens. Diese relativen hrefs
# werden deshalb gegen screens/ und nicht gegen den Ablageort system/ geprüft.
while IFS= read -r hit; do
  line=${hit%%:*}
  attribute=${hit#*:}
  if [[ $attribute == href:\ * ]]; then
    href=${attribute#href: \"}
    href=${href%\"}
  else
    href=${attribute#href=\"}
    href=${href%\"}
  fi
  case "$href" in
    ''|'#'*|mailto:*|tel:*|javascript:*|http:*|https:*|'//'*) continue ;;
  esac
  target=${href%%#*}
  target=${target%%\?*}
  if [[ ! -e "$screens_dir/$target" ]]; then
    printf 'FEHLER: %s:%s: internes Shell-href-Ziel fehlt: %s\n' "$system_dir/shell.js" "$line" "$href"
    status=1
  fi
done < <(grep -nEo 'href:[[:space:]]*"[^"]*"|href="[^"]*"' "$system_dir/shell.js" || true)

mapfile -t css_files < <(find "$system_dir" -type f -name '*.css' ! -path "$system_dir/tokens.css" ! -path "$system_dir/wireframe.css" ! -path "$system_dir/vendor/*" -print | sort)
report_matches 'FEHLER: roher Farbwert außerhalb der Token-Dateien:' '#[0-9A-Fa-f]{3,8}([^0-9A-Fa-f]|$)|(^|[^[:alnum:]_-])(rgba?|hsla?)\(' "${css_files[@]}"

definitions=("$system_dir/components.css" "$system_dir/base.css")
for screen in "${screen_files[@]}"; do
  while IFS= read -r hit; do
    line=${hit%%:*}
    attribute=${hit#*:}
    classes=${attribute#class=\"}
    classes=${classes%\"}
    for class_name in $classes; do
      if ! grep -Eq "\\.${class_name}([^A-Za-z0-9_-]|$)" "${definitions[@]}"; then
        printf 'FEHLER: %s:%s: Klasse nicht im System definiert: %s\n' "$screen" "$line" "$class_name"
        status=1
      fi
    done
  done < <(awk '
    /<script[[:space:]>]/ { script = 1 }
    !script {
      line = $0
      while (match(line, /class="[^"]+"/)) {
        print NR ":" substr(line, RSTART, RLENGTH)
        line = substr(line, RSTART + RLENGTH)
      }
    }
    /<\/script>/ { script = 0 }
  ' "$screen")
done

if [[ $status -eq 0 ]]; then
  printf 'OK: Alle mechanisch prüfbaren Regeln sind erfüllt.\n'
  printf 'Nicht geprüft: Kontrastwerte, ARIA-Semantik, horizontaler Überlauf, Tastaturwege und fachliche Regeln.\n'
fi

exit "$status"
