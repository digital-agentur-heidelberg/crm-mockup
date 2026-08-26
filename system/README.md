# Heidelberg CRM – extrahiertes Designsystem

Dieses System ist die wartbare Fassung des abgenommenen Entwurfs
`varianten/99-hybrid_v3.html`. Es ist weiterhin eine Designexploration ohne
Build-Schritt, Backend oder echte API-Aufrufe.

Die verbindliche visuelle Referenz ist [styleguide.html](styleguide.html).

## Einen neuen Screen bauen

1. Ausschließlich `../screens/_vorlage.html` kopieren und umbenennen. Neue
   Screens entstehen nicht durch Kopieren eines bestehenden Fachscreens.
2. Im `<head>` immer in dieser Reihenfolge laden:

   ```html
   <link rel="stylesheet" href="../system/tokens.css">
   <link rel="stylesheet" href="../system/base.css">
   <link rel="stylesheet" href="../system/components.css">
   <script src="../system/vendor/lucide.js" defer></script>
   <script src="../system/shell.js" defer></script>
   ```

3. Am `<body>` mit `data-screen` genau einen Navigationsbereich angeben:
   `arbeitsbereich`, `kontakte`, `veranstaltungen`, `verteiler` oder `mailings`.
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

Die globale Suche wird von außen ausschließlich über die benannte Schnittstelle
`CrmShell.openSearch(text)` geöffnet. `text` ist optional und belegt die Suche
vor. Reine HTML-Auslöser erhalten `data-open-search`; mit dem ebenfalls
optionalen Attribut `data-search-query` können sie einen Suchtext mitgeben. Die
Hülle ruft auch in diesem Fall `CrmShell.openSearch` auf. Screen-Skripte greifen
nie direkt auf `#global-search`, dessen Fokus, Wert oder Popover zu. So bleiben
Fokusführung, Ergebnisansage und Öffnungszustand ein gemeinsamer Vertrag.

Screens enthalten weder `<style>`-Blöcke noch `style`-Attribute. Kleine,
screenbezogene Interaktionen dürfen als Vanilla-JavaScript im Dokument stehen;
fachliche Daten bleiben fest verdrahtet.

Erzeugt ein Screen nachträglich Markup mit `data-lucide`, meldet er den
betroffenen Container nach dem Rendern mit `CrmShell.rendered(container)`. Die
Hülle reagiert auf das Ereignis `crm:rendered` und zieht nur in diesem Bereich
die Icons nach. Flüchtige Rückmeldungen laufen über
`CrmShell.showToast(text, variante)` mit `success`, `info`, `prototype` oder
`error`; Schaltflächen mit `data-toast` und optional `data-toast-variant` werden
direkt von der Hülle bedient.

Kein Bedienelement bleibt ohne Reaktion. Was der Entwurf nicht leistet, sagt
er über `CrmShell.showPrototypeNotice(type, subject, name)`: `action` benennt
eine nicht ausgeführte Handlung konkret, `record` einen nicht hinterlegten
Datensatz mit Art und Name. Statische Auslöser können stattdessen
`data-prototype-action` beziehungsweise `data-prototype-record` zusammen mit
`data-prototype-name` tragen. Nicht hinterlegte Datensätze werden niemals
ersatzweise auf eine Übersicht oder eine fremde Detailseite geführt; Auswahl
und Bildschirm bleiben stehen.

Lucide liegt als UMD-Bibliothek in `vendor/lucide.js`; abgelegt ist Version
1.34.0. Die Screens und die Vorlage laden nur diesen relativen Pfad und benötigen
für Symbole kein Netz. Für einen Versionswechsel die neue UMD-Datei unter
demselben Namen ersetzen, die Versionsangabe hier aktualisieren und anschließend
alle verwendeten `data-lucide`-Namen sowie dynamisch nachgezogene Icons prüfen.
An den Screen-Köpfen ist beim Versionswechsel nichts zu ändern.

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

## Gemeinsame Interaktionsverträge

Wiederkehrende Interaktionsmuster werden nicht je Screen neu verdrahtet.
Wer ein solches Muster in einem neuen Screen braucht, verwendet den
vorhandenen Vertrag; wer feststellt, dass es noch keinen gibt, legt ihn
an und dokumentiert ihn hier.

Vorhanden:
- **Suche** – `CrmShell.openSearch(text)`, Auslöser über
   `data-open-search` und `data-search-query`
- **Toast** – `CrmShell.showToast(text, variante)`, Auslöser über
   `data-toast` und `data-toast-variant`
 - **Nicht hinterlegt** – `CrmShell.showPrototypeNotice(type, subject,
    name)`, Auslöser über `data-prototype-action` beziehungsweise
    `data-prototype-record` mit `data-prototype-name`
 - **Icons nachziehen** – `CrmShell.rendered(container)`, Ereignis
   `crm:rendered`
 - **Mehrfachauswahl in Listen** –
   `CrmShell.createListSelection(options)` bindet Zeilencheckboxen und die
   Wahl „alle sichtbaren“, setzt `.is-checked`, führt den sichtbaren
   Auswahlzustand der Sammelcheckbox einschließlich `indeterminate`, liefert
   ausgewählte und sichtbare Zeilen, aktualisiert Zähler über `onChange` und
   aktiviert abhängige Aktionen. Filter rufen danach `refresh()` auf;
   dynamisch ergänzte Zeilen werden mit `refreshRows()` neu gebunden. Eine
   einzelne Vorschauwahl wie `.is-selected` gehört ausdrücklich nicht zu
   diesem Vertrag.
 - **Filter** – `CrmShell.createListFilter(options)` verwaltet benannte,
   exklusive Kontrollgruppen, synchronisiert deren `aria-pressed`, blendet
   Zeilen über die vom Screen gelieferte Funktion `matches(row, state)` ein
   oder aus und übergibt sichtbare Zeilen an `onChange`. Textsuche und
   mehrwertige Checkboxfilter bleiben screenbezogen und stoßen nach ihrer
   Änderung `refresh()` an; der Vertrag schreibt keine bestimmte sichtbare
   Filterkomponente vor.
 - **Zustandsumschaltung** – `CrmShell.createStateSwitch(options)` zeigt aus
   benannten Panels genau eines, synchronisiert optionale Auslöser über deren
   Attribut und stellt `set(name)` bereit. Zustandsnamen, zeitliche Übergänge,
   Fokusführung und fachliche Folgen bleiben beim Screen. Prozessschritte sind
   kein Anwendungsfall dieses Vertrags.

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
  Das Objekt-Arbeitslayout des Verteilerdetails bestätigt 1099 px als
  allgemeinen Stapelpunkt; bei 1129 px ändert allein die Kontaktliste zugleich
  ihr Interaktionsmodell. Die Werte werden deshalb nicht zusammengelegt.
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
- geschützter, aber lesbarer Teilbereich innerhalb eines weiter bearbeitbaren
  Objekts

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
- CD Steingrau #75787B erreicht auf Weiß 4,44:1 und liegt damit knapp unter 
  der Anforderung. Es ist derzeit deaktivierten Inhalten und nichttextlichen 
  Symbolen vorbehalten; informativer Text verwendet die dunklere Rolle --color-text-muted.
  Ob deaktivierter Text damit ausreichend ist, wird unterschiedlich beurteilt.
  Die Klärung ist bewusst zurückgestellt und als eigener Eintrag in BEFUNDE-offen.md vermerkt; 
  die Änderung ist ein Tokenwert und bleibt unabhängig von der Zahl der Screens billig.

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
