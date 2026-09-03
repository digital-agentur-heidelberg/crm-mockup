# Befund 19 – Low-Fi-Testfassung

> Dieser Bericht hält den Stand des ursprünglichen Bauabschnitts fest. Die
> später korrigierte Einbindung vor dem ersten sichtbaren Rendern beschreibt
> [Befund 20](BEFUND-20-fidelity-first-paint.md).

**Datum:** 3. September 2026
**Anlass:** visuell zurückgenommene Fassung für den User-Test

## Einordnung und maßgebliche Stellen

Die fachlichen Anforderungen, Rechteableitungen und gemeinsamen Fixtures
bleiben in `ABDECKUNG.md` und `shell.js` maßgeblich. Dieser Bauabschnitt fügt
keine fachliche Variante und keinen neuen Screenzustand hinzu. Die einzige
Umschaltstelle ist `FIDELITY` am Anfang von `shell.js`; `low` lädt die lokale
Datei `wireframe.css`, `full` lässt die bisherige Fassung unverändert.

Die Rollenprüfung ergab keine inhaltsbezogenen Klassennamen und keinen Bedarf
für neue Komponenten. Die Zustands- und Rechtematrix bleibt unverändert:
vorhanden, lädt, fachlich leer, technisch fehlgeschlagen, teilweise oder
vollständig geschützt sowie deaktiviert werden weiterhin durch die bestehenden
Komponenten, Texte, Icons und nativen Zustände ausgedrückt. `base.css`,
`components.css` und sämtliche Screens blieben unverändert.

## Überschriebene Tokens

`wireframe.css` enthält ausschließlich `:root` und alternative Werte bereits
in `tokens.css` definierter Tokens. Es wurden keine neuen Tokens eingeführt.

| Token | Full-Fi | Low-Fi |
|---|---:|---:|
| `--color-brand` | `#a50050` | `#3b5362` |
| `--color-brand-strong` | `#6f0036` | `#253844` |
| `--color-brand-soft` | `#fff4f8` | `#f1f3f5` |
| `--color-brand-muted` | `#f9d2e5` | `#b8c4cc` |
| `--color-accent` | `#005c76` | `#405463` |
| `--color-accent-strong` | `#004255` | `#283c49` |
| `--color-accent-soft` | `#eef7f8` | `#eef2f4` |
| `--color-accent-graphic` | `#71b2c9` | `#8b9297` |
| `--color-success` | `#05715a` | `#555555` |
| `--color-success-strong` | `#045843` | `#474747` |
| `--color-success-soft` | `#eaf6f1` | `#f2f2f2` |
| `--color-success-border` | `#9bc6b8` | `#b8b8b8` |
| `--color-warning` | `#ffce44` | `#b5b5b5` |
| `--color-warning-strong` | `#6c4d00` | `#4e4e4e` |
| `--color-warning-soft` | `#fff4cc` | `#ededed` |
| `--color-warning-border` | `#ead28a` | `#aaaaaa` |
| `--color-attention` | `#a84500` | `#575757` |
| `--color-attention-soft` | `#fff0e5` | `#f0f0f0` |
| `--color-danger` | `#920731` | `#3c3c3c` |
| `--color-danger-soft` | `#fff0f4` | `#e7e7e7` |
| `--color-danger-border` | `#e7b9c9` | `#9f9f9f` |
| `--color-info` | `var(--color-accent-strong)` | `#303030` |
| `--color-info-soft` | `var(--color-accent-soft)` | `#f7f7f7` |
| `--color-info-border` | `#bad7df` | `#c2c2c2` |
| `--radius-inline-token` | `4px` | `2px` |
| `--radius-shortcut` | `5px` | `2px` |
| `--radius-token` | `6px` | `2px` |
| `--radius-small` | `7px` | `2px` |
| `--radius-notice` | `8px` | `2px` |
| `--radius-control` | `9px` | `2px` |
| `--radius-popover` | `10px` | `2px` |
| `--radius-signature` | `11px` | `2px` |
| `--radius-card` | `14px` | `2px` |
| `--radius-avatar-identity` | `17px` | `2px` |
| `--radius-avatar-mark` | `18px` | `2px` |
| `--radius-round` | `50%` | `2px` |
| `--radius-pill` | `999px` | `2px` |
| `--shadow-card` | `0 1px 1px rgba(32, 35, 38, 0.02)` | `none` |
| `--shadow-raised` | `0 12px 32px rgba(32, 35, 38, 0.10)` | `none` |
| `--shadow-interactive` | `0 8px 22px rgba(32, 35, 38, 0.10)` | `none` |
| `--shadow-letter` | `0 8px 20px rgba(32, 35, 38, 0.09)` | `none` |

## Kontraste

Die Werte wurden nach WCAG 2.1 aus den sRGB-Relativluminanzen berechnet. Sie
liegen jeweils mindestens auf dem im Styleguide dokumentierten bisherigen Wert.

| Verwendung | Low-Fi-Kombination | Neu | Bisher dokumentiert |
|---|---|---:|---:|
| Marken-/Linktext auf Weiß | `#253844` / `#FFFFFF` | 12,15:1 | 12,14:1 |
| Weiß auf Primäraktion | `#FFFFFF` / `#3B5362` | 8,08:1 | 7,73:1 |
| Info | `#303030` / `#F7F7F7` | 12,32:1 | 10,10:1 |
| Erfolg | `#474747` / `#F2F2F2` | 8,30:1 | 7,64:1 |
| Warnung | `#4E4E4E` / `#EDEDED` | 7,11:1 | 7,06:1 |
| Gefahr | `#3C3C3C` / `#E7E7E7` | 8,92:1 | 8,28:1 |
| Pflichtkennzeichnung auf Vorschlag | `#3C3C3C` / `#EEF2F4` | 9,79:1 | 8,40:1 |
| Aufmerksamkeit / Rang | `#575757` / `#F0F0F0` | 6,34:1 | 5,36:1 |
| Belegung verfügbar auf Weiß | `#405463` / `#FFFFFF` | 7,88:1 | 7,52:1 |
| Belegung knapp auf Weiß | `#4E4E4E` / `#FFFFFF` | 8,32:1 | 7,78:1 |
| Belegung voll auf Weiß | `#3C3C3C` / `#FFFFFF` | 11,03:1 | 9,14:1 |
| Belegung verfügbar auf Skalenrest | `#405463` / `#F4F5F4` | 7,21:1 | 6,88:1 |
| Belegung knapp auf Skalenrest | `#4E4E4E` / `#F4F5F4` | 7,61:1 | 7,12:1 |
| Belegung voll auf Skalenrest | `#3C3C3C` / `#F4F5F4` | 10,09:1 | 8,37:1 |

Die unveränderten Kombinationen für Standard-, Sekundär-, zurückhaltenden,
deaktivierten und lesbaren Sperrtext behalten die im Styleguide dokumentierten
Werte. Der funktionale Fokusring ist kein dekorativer Schatten und wurde daher
nicht entfernt; er verwendet über `--color-brand-muted` nun das neutrale
Grau-Blau `#B8C4CC`.

## Browserrunde unter `file://`

Firefox 155 öffnete 19 Screen- und Rechteausprägungen bei 1024, 1280 und 1920
Pixel Breite, insgesamt 57 Kombinationen. Jede Kombination lud
`wireframe.css`, zeigte `--color-brand: #3b5362`, `--radius-card: 2px` und
`--shadow-card: none`. Noto Sans war über `document.fonts` verfügbar; die
Ressourcenliste enthielt keine HTTP-/HTTPS-Adresse. Es entstand kein
horizontaler Dokumentüberlauf. Der aktive Navigationseintrag besaß jeweils
`aria-current="page"` und eine gegenüber inaktiven Einträgen abweichende
Fläche. Die fünf zentralen Navigationseinträge wurden angeklickt und führten
jeweils zum erwarteten Screen mit passendem aktiven Eintrag.

Die folgende Tabelle nennt die in der jeweiligen Ausgangsausprägung sichtbaren
Schaltflächen. Alle nativ bedienbaren wurden über Firefox tatsächlich
angeklickt; nativ deaktivierte Schaltflächen wurden als deaktiviert geprüft und
nicht künstlich ausgelöst. Zusätzlich wurden die unter „Gezielte Zustände“
genannten, erst nach einer Handlung sichtbaren Wege betätigt.

| Screen / Ausprägung | Durchklicken und Ergebnis |
|---|---|
| `index.html` | 2 von 2 bedienbaren Schaltflächen reagierten. |
| `arbeitsbereich.html` | 3 von 3 reagierten. |
| `kontakte.html` | 37 von 37 bedienbaren Schaltflächen reagierten; Sammelaktion und eine Seitennavigation blieben im Ausgangszustand nativ deaktiviert. Gefüllt, lädt, leer und Fehler wurden zusätzlich einzeln aufgerufen. |
| `kontakt-detail.html` | 4 von 4 reagierten. |
| `kontakt-anlegen.html` | 9 von 9 reagierten. |
| `veranstaltungen.html` | 12 von 12 reagierten; eine Seitennavigation war nativ deaktiviert. Gefüllt, lädt, leer und Fehler wurden zusätzlich einzeln aufgerufen. |
| `veranstaltung.html` | 11 von 11 reagierten; Sammelaktion und eine Seitennavigation waren ohne Auswahl nativ deaktiviert. |
| `veranstaltung.html?fixture=leer` | 7 von 7 reagierten; die Sammelaktion blieb mangels Teilnehmenden nativ deaktiviert. Der fachliche Leerzustand blieb von Suche-/Filter-Leere unterscheidbar. |
| `veranstaltung.html?fixture=fremdamt` | 10 von 10 reagierten; Sammelaktion und Seitennavigation waren nativ deaktiviert. Alle 53 Auswahlfelder waren gesperrt, jede Statusmarke trug das Schlosssymbol, und der Text nannte das Kulturamt als zuständige Stelle. |
| `veranstaltung-anlegen.html` | 3 von 3 reagierten. |
| `verteiler.html` | 8 von 8 reagierten. Gefüllt, lädt, leer und Fehler wurden zusätzlich einzeln aufgerufen. |
| `verteiler-detail.html` | 9 von 9 reagierten; Sammelaktion und eine Seitennavigation waren ohne Auswahl nativ deaktiviert. |
| `verteiler-detail.html#managed` | 7 von 7 bedienbaren Elementen reagierten nach vollständigem Aufbau der dynamischen Liste; Sammelaktion und eine Seitennavigation waren ohne Auswahl nativ deaktiviert. Definition und Schutzgrund blieben lesbar, die Mitgliedschaftsarbeit blieb aktiv. |
| `verteiler-anlegen.html` | 2 von 2 reagierten. |
| `mailings.html` | 8 von 8 reagierten. |
| `mailing.html?neu=1` | 10 von 10 bedienbaren Schaltflächen reagierten; die Schritte 3 bis 5 blieben vor der erforderlichen Vorlagen-/Verteilerfolge nativ deaktiviert. |
| `mailing.html?id=branchendialog` | 14 von 14 reagierten; der gespeicherte Prozessschritt blieb erhalten. |
| `mailing.html?id=kreativwirtschaft-werkstatt` | 5 von 5 reagierten. Status und Schutzabschnitt bezeichneten das fremde Mailing ausgeschrieben als „lesbar, gesperrt“ und nannten das Kulturamt. |
| `mailing.html?id=kulturkonferenz` | 6 von 6 reagierten; die abgeschlossene fremde Leseansicht und ihr Beleg blieben erkennbar. |

## Gezielte Zustände

- Listen-Lade-, Leer- und Fehlerzustände blieben in Kontakte,
  Veranstaltungen und Verteiler durch unterschiedliche Texte, Icons,
  Handlungen und sichtbare Strukturen unterscheidbar; keine Bedeutung hing nur
  an der entsättigten Farbe.
- Im Mailing-Schritt „Verteiler“ blieb „Branchentreffen Kultur“ nativ
  deaktiviert, voll deckend lesbar und mit Schlosssymbol sowie dem Text
  „Gesperrt“ gekennzeichnet.
- Das fremde Mailing blieb mit Status „In Bearbeitung · lesbar, gesperrt“,
  Schlosssymbol, Schutzgrund und zuständiger Stelle eindeutig.
- Eine Überbuchung wurde über Auswahl und Sammelstatus erzeugt. Die Warnung
  „Kapazität um 9 Plätze überschritten“ blieb auf `#EDEDED` mit Text
  `#4E4E4E` lesbar.
- Die Warteliste wurde im unveränderten Ausgangsbestand geöffnet. Zehn Ränge
  waren vorhanden; die Folge 1 bis 6 wurde im sichtbaren Ausschnitt geprüft.
  Rangtext `#575757` auf `#F0F0F0` erreichte 6,34:1.
- Der Styleguide zeigte gleichzeitig Full-Fi (`#A50050`, Kartenradius 14 px)
  und Low-Fi (`#3B5362`, Kartenradius 2 px). Tokens, Fokus/aktiv/gesperrt und
  die vier fachlichen Status waren jeweils nebeneinander sichtbar.

Der weitergehende Tastaturtest wurde auf ausdrücklichen Wunsch des
Auftraggebers übersprungen. Deshalb enthält dieser Befund keinen vollständigen
Nachweis eines Tastaturwegs durch den neuen Bereich.

## Bewusst nicht umgestellt

- Layout, Größen, Raster, Abstände, Typografie, Linienbreiten, Ebenen,
  Klebepunkte, Umbruchpunkte und Bewegung bleiben identisch, weil die Fassung
  kein Wireframe und keine neue Informationsarchitektur ist.
- Oberflächen-, Text-, Rand- und Overlayfarben bleiben identisch, soweit sie
  keine Akzent-/CD- oder Statusrolle sind. Damit bleiben Hierarchie,
  Lesbarkeit, Sperrflächen und Leerzustände stabil.
- Icons, Texte, Datenbestand, Fixtures, Zuständigkeiten, Rechteableitung,
  Navigation, Suche und alle fachlichen Interaktionen bleiben identisch, damit
  im Test ausschließlich die visuelle Ausarbeitung zurücktritt.
- Der Fokusring bleibt erhalten, weil seine Entfernung der verlangten
  Tastaturorientierung widerspräche.
- `base.css` und `components.css` wurden nicht geändert. Im Styleguide werden
  ausschließlich bestehende Komponenten verwendet; die Full-Fi-Vergleichskarte
  friert die ursprünglichen Tokenwerte vor dem zentralen Low-Fi-Laden lokal ein.

## Statische Abschlussprüfung

`pruefung.sh` behandelt `tokens.css` und die ausdrücklich zugelassene zweite
Tokenwertdatei `wireframe.css` als Tokenquellen; rohe Farbwerte bleiben in
allen anderen Stylesheets verboten. Der Lauf nach Fertigstellung dieses
Befunds endete mit Rückgabewert 0 und meldete: „OK: Alle mechanisch prüfbaren
Regeln sind erfüllt.“ Das Skript wies wie vorgesehen darauf hin, dass es
Kontrastwerte, ARIA-Semantik, horizontalen Überlauf, Tastaturwege und fachliche
Regeln nicht prüft.

Zusätzlich liefen `node --check system/shell.js` und `git diff --check` ohne
Befund. Die drei Screenprüfungen auf `<style>`, `style=` und rohe Farbwerte
ergaben jeweils null Treffer. Ein Abgleich aller Deklarationsnamen in
`wireframe.css` gegen `tokens.css` ergab keinen unbekannten Token.
