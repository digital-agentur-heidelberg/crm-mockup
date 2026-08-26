# Heidelberg CRM – extrahiertes Designsystem

Dieses System ist die wartbare Fassung des abgenommenen Entwurfs
`varianten/99-hybrid_v3.html`. Es ist weiterhin eine Designexploration ohne
Build-Schritt, Backend oder echte API-Aufrufe.

Die verbindliche visuelle Referenz ist [styleguide.html](styleguide.html).

## Einen neuen Screen bauen

1. Eine bestehende Datei aus `../screens/` als strukturellen Ausgangspunkt
   kopieren.
2. Im `<head>` immer in dieser Reihenfolge laden:

   ```html
   <link rel="stylesheet" href="../system/tokens.css">
   <link rel="stylesheet" href="../system/base.css">
   <link rel="stylesheet" href="../system/components.css">
   <script src="https://unpkg.com/lucide@0.468.0/dist/umd/lucide.min.js" defer></script>
   <script src="../system/shell.js" defer></script>
   ```

3. Am `<body>` mit `data-screen` genau einen Navigationsbereich angeben:
   `arbeitsbereich`, `kontakte`, `veranstaltungen` oder `mailings`.
4. Ausschließlich den Screeninhalt als `<main class="screen" id="main">`
   liefern. `shell.js` erzeugt Skip-Link, Seitennavigation, Kopfleiste und den
   umgebenden App-Rahmen.
5. Inhalte ausschließlich aus den in `components.css` dokumentierten Klassen
   zusammensetzen. Native Elemente und ARIA-Zustände bleiben erhalten.
6. Bei Listen mindestens 25 plausible Datensätze einsetzen, damit Dichte,
   Stickiness und Scrollverhalten sichtbar werden.
7. Bei 1024, 1280 und 1920 Pixel Breite prüfen; Fokusreihenfolge und
   `prefers-reduced-motion` ebenfalls prüfen.

Die Hülle wird nie pro Screen nachgebaut oder teilweise überschrieben. Ein
neuer Screen bindet `shell.js` ein, setzt `data-screen` und enthält ausschließlich
seinen Inhalt. Navigationseinträge, aktiver Zustand, Suchdaten und Suchverhalten
werden nur in `shell.js` gepflegt.

Screens enthalten weder `<style>`-Blöcke noch `style`-Attribute. Kleine,
screenbezogene Interaktionen dürfen als Vanilla-JavaScript im Dokument stehen;
fachliche Daten bleiben fest verdrahtet.

## Eine fehlende Komponente ergänzen

1. Zuerst prüfen, ob die Anforderung eine Variante oder ein Zustand einer
   vorhandenen Komponente ist.
2. Wiederkehrende Werte als rollenbasiertes Token in `tokens.css` ergänzen.
3. Die Komponente in `components.css` mit einem Kommentarblock dokumentieren:
   Zweck, Nicht-Verwendung, Varianten und sinnvolle Zustände.
4. Ruhe, Hover, Fokus, aktiv, deaktiviert, ausgewählt, Fehler, lädt und leer
   ergänzen, soweit sie fachlich sinnvoll sind.
5. Alle Varianten im passenden Bereich des Styleguides zeigen.
6. Erst danach die Komponente im Screen verwenden.

Niemals lokal überschrieben werden Farben, Typografie, Fokus, Abstände,
Rundungen, Schatten, Linien, Bewegungsdauern, Sticky-Offsets, Ebenen oder
Umbruchpunkte. Ein lokaler Sonderfall ist ein fehlender Systembaustein, keine
Erlaubnis für Screen-CSS.

## Entscheidungen bei uneinheitlichen Mustern

- **Kartenkopf:** Der Icon-Titel aus dem Kontakt-Detail ist die dichte
  kanonische Fassung. Eine Trennlinie ist eine Kartenkopfvariante; die dunkle
  Toolbar bleibt ausschließlich der echten Mailing-Vorschau vorbehalten.
- **Karteninnenraum:** 22 px regulär, 16 px kompakt, 12 px dicht. Sichtbare
  asymmetrische Abstände des abgenommenen Entwurfs bleiben als semantische
  Tokens erhalten.
- **Rundungen:** 14 px für Karten, 9 px für Bedienelemente und 999 px für
  pillenförmige Statusobjekte. Identitätsavatar und Aufgaben-Kachel bleiben
  dokumentierte Signature-Varianten.
- **Knöpfe:** 40 px regulär und 34 px kompakt. Filter-Chips und Prozessschritte
  sind eigene Komponenten, keine Knopf-Sonderfälle.
- **Tabellen:** Eine gemeinsame Zell- und Auswahlstruktur; Stickiness wird als
  Seitenscroll, Containerscroll oder statisch gewählt. Kontakt- und
  Teilnehmendentabelle behalten ihre abgenommene Zeilendichte.
- **Responsive Vorschau:** Kontakt-Master-Detail wechselt bei 1129 px in die
  Detailzeile. Die übrigen Zweispaltenlayouts stapeln bei 1099 px. Beide Werte
  sind benannte Umbruchtokens, weil das Verhalten sichtbar verschieden ist.
- **Status:** Die Text-Statusmarke ist das Atom. Statuskacheln, Balken und
  Kapazitätswerte sind zusammengesetzte Datenansichten mit Text beziehungsweise
  zugänglicher Beschriftung und daher keine bloßen Chip-Varianten.
- **Kopfkompositionen:** Kontaktidentität und Veranstaltungskopf bleiben
  eigenständige Kompositionen auf derselben Kartenbasis. Eine Verschmelzung
  hätte den abgenommenen Informationsrhythmus verändert.

Im Zweifel gewann die Kontakt-Detail-Fassung, weil sie die höchste Dichte und
die meisten langen Verwaltungsangaben bewältigt.

## Erst einmal vorkommende, noch nicht belastbar erprobte Komponenten

- globale intelligente Suche mit Vorschlagsgruppen und Kontextvorschau
- Aufgaben-Kachel mit getrenntem Handlungs- und Kontextbereich
- Kontakt-Exportmenü mit erhaltener Auswahl
- responsive Kontakt-Master-Detail-Komposition
- zweizoniger Identitätskopf, Beziehungskette und geschützter Knoten
- Gesprächsnotiz-Komponist und Gesprächsspur
- priorisierte Nächste-Schritte-Karte
- Veranstaltungs-Statusstrecke, Kapazitätsübersicht und Warteliste
- Vorschlagskasten für eine zunächst unbestimmte Veranstaltungsart
- vollständiger Mailing-Prozess mit Bausteinregeln, Problemsprung,
  Testnachweis und Versandbeleg

Diese Komponenten dürfen für neue Screens verwendet werden, müssen bei der
ersten weiteren Verwendung aber im Styleguide gegen den neuen Kontext geprüft
werden.

## Beobachtet, bewusst nicht geändert

- Kartenabstände und vertikale Rhythmen sind trotz Tokenisierung nicht überall
  optisch nivelliert; die sichtbaren Werte des Entwurfs bleiben erhalten.
- Kontaktvorschau und allgemeine Zweispaltenlayouts verwenden zwei nahe
  Umbruchpunkte (1129 und 1099 px).
- Die globale Suche ist gleichzeitig Kontakt- und Handlungssuche. Das bleibt
  erklärungsbedürftig, wurde aber nicht vereinfacht.
- Die Beziehungskette zeigt die Existenz eines geschützten Bezugs. Ob bereits
  diese Metainformation sichtbar sein darf, bleibt fachlich zu klären.
- Der Testversand ist dokumentiert, aber nicht zwingend durch eine zweite
  Person freizugeben.
- Veranstaltungsart, Wartelistenregeln, Zuschussjahre, Suchindizierung und die
  genaue Berechtigungsvorschau bleiben die offenen Fachfragen aus Hybrid v3.
- CD Steingrau `#75787B` erreicht auf Weiß 4,44:1. Es bleibt ausschließlich für
  deaktivierte Inhalte und nichttextliche Symbole reserviert; informativer Text
  verwendet die dunklere Rolle `--color-text-muted`.

## Visuelle Migrationsprüfung

Verglichen wurde jeweils `varianten/99-hybrid_v3.html` mit dem entsprechenden
Dokument in `../screens/`, bei 1024 × 720, 1280 × 720 und 1920 × 720 Pixeln.

- **Arbeitsbereich:** keine sichtbare Geometrieabweichung.
- **Kontaktliste:** Karten, 65/35-Aufteilung, Tabellenkopf und responsive
  Detailzeile stimmen. Tiefer liegende Mockdatensätze unterscheiden sich
  inhaltlich; dadurch ändern sich einzelne Textumbrüche außerhalb des ersten
  Referenzkontakts.
- **Kontakt-Detail:** Identitätskopf, drei Detailspalten, Gesprächsspur,
  Nächste Schritte und die 1240-px-Umschichtung stimmen.
- **Veranstaltung:** Kopf, Statusstrecke, lokaler Tabellenkopf und Seitenkarte
  stimmen. Die ersten sichtbaren Teilnehmenden wurden auf die Referenzdaten
  angeglichen; spätere Mockdaten bleiben inhaltlich verschieden.
- **Veranstaltung anlegen:** keine sichtbare Geometrieabweichung.
- **Mailing:** Prozessleiste, Kartenstapelung bei 1099 px, Vorschau-Stickiness
  und Briefgeometrie stimmen.

Die gemeinsame Hülle markiert den über `data-screen` benannten Bereich
semantisch und sichtbar mit `aria-current="page"`. Kein Screen setzt diesen
Zustand selbst.
