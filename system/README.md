# Heidelberg CRM – extrahiertes Designsystem

Dieses System ist die wartbare Fassung des abgenommenen Entwurfs
`varianten/99-hybrid_v3.html`. Es ist weiterhin eine Designexploration ohne
Build-Schritt, Backend oder echte API-Aufrufe.

Die verbindliche visuelle Referenz ist [styleguide.html](styleguide.html).

## Einen neuen Screen bauen

1. **Rollenprüfung vor dem Bauen:** Bevor der Screen komponiert wird, alle
   voraussichtlich wiederverwendeten Klassen darauf prüfen, ob ihr Name eine
   Darstellungsrolle oder nur den Inhalt ihres Ursprungsscreens beschreibt.
   Kandidaten vor der Verwendung umbenennen, bevor sie im Markup eingesetzt
   werden. Klassenaliase sind nicht erlaubt.
2. **Zustands- und Rechtematrix vor dem Markup:** Vorab für den Screen festlegen:
   Inhalt vorhanden, lädt, fachlich leer, technisch fehlgeschlagen, teilweise
   geschützt, vollständig geschützt und deaktiviert. Für jeden geschützten Teil
   zusätzlich sichtbar, lesbar, bearbeitbar, Begründung und zuständige Stelle
   festhalten. `.no-access` nur auf tatsächlich nicht lesbare Information
   anwenden; weiterhin lesbare Information nicht als deaktiviertes Scheinfeld
   ausgeben.
3. Ausschließlich `../screens/_vorlage.html` kopieren und umbenennen. Neue
   Screens entstehen nicht durch Kopieren eines bestehenden Fachscreens.
4. Im `<head>` immer in dieser Reihenfolge laden:

   ```html
   <link rel="stylesheet" href="../system/tokens.css">
   <link rel="stylesheet" href="../system/base.css">
   <link rel="stylesheet" href="../system/components.css">
   <script src="../system/vendor/lucide.js" defer></script>
   <script src="../system/shell.js" defer></script>
   ```

5. Am `<body>` mit `data-screen` genau einen Navigationsbereich angeben:
   `arbeitsbereich`, `kontakte`, `veranstaltungen`, `verteiler` oder `mailings`.
   Das Prototyp-Hilfsmittel `screens/index.html` verwendet als einzige Ausnahme
   `prototyp-index`; dieser Wert aktiviert keinen regulären Navigationsbereich.
   Listenübersichten ergänzen `data-prototype-states="filled loading empty
   error"`. `shell.js` setzt daraus vor dem Seitenkopf die gemeinsame,
   ausdrücklich als Prototypsteuerung bezeichnete Zustandsleiste ein.
6. Ausschließlich den Screeninhalt als `<main class="screen" id="main">`
   liefern. `shell.js` erzeugt Skip-Link, Seitennavigation, Kopfleiste und den
   umgebenden App-Rahmen.
7. Inhalte ausschließlich aus den in `components.css` dokumentierten Klassen
   zusammensetzen. Native Elemente und ARIA-Zustände bleiben erhalten.
8. Bei Listen mindestens 25 plausible Datensätze einsetzen, damit Dichte,
   Stickiness und Scrollverhalten sichtbar werden.
9. Bei 1024, 1280 und 1920 Pixel Breite prüfen; Fokusreihenfolge und
   `prefers-reduced-motion` ebenfalls prüfen. Jeden Screen, den Styleguide und
   eine frische Vorlagenkopie ohne Netz öffnen. Dabei nicht nur die Symbole,
   sondern auch prüfen, dass Noto Sans lokal geladen wird und der Darstellung
   mit Netz entspricht.

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

Noto Sans liegt in den fünf tatsächlich verwendeten normalen Schnitten 400,
500, 600, 700 und 800 als WOFF2 unter `vendor/`; abgelegt ist Fontsource
`@fontsource/noto-sans` 5.3.0. `base.css` bindet die Dateien zentral mit
`font-display: swap` ein. Für einen Schriftwechsel genau diese fünf Dateien
unter den bestehenden Namen ersetzen, Familie beziehungsweise Versionsangabe
hier aktualisieren und anschließend alle fünf Schnitte, Umlaute, ß sowie lange
deutsche Verwaltungsangaben offline prüfen. Die Schriftliste im Token bleibt
mit Arial und `sans-serif` als Ausweichschriften erhalten. An den Screen-Köpfen
ist beim Schriftwechsel nichts zu ändern.

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

## Statische Vorprüfung

`./system/pruefung.sh` läuft ohne Netz und ohne Projektabhängigkeiten. Es
meldet Fundstellen mit Datei und Zeile und liefert bei mindestens einem Fund
einen Rückgabewert ungleich null. Mechanisch geprüft werden lokale Styles in
Screens, externe `href`-/`src`-Adressen, `data-screen` und Shell-Einbindung,
existierende interne Dateiziele, rohe Implementierungsfarbwerte außerhalb von
`tokens.css` sowie die Definition statisch verwendeter Screenklassen in
`components.css` oder `base.css`.

Das Skript prüft ausdrücklich keine Kontrastwerte, keine ARIA-Semantik, keinen
horizontalen Überlauf, keinen Tastaturweg und keine fachlichen Regeln. Ein
grüner Lauf ist kein Barrierefreiheitsnachweis und ersetzt die manuelle
Prüfrunde nicht. Im Befund steht ausschließlich, was tatsächlich geprüft
wurde, einschließlich Methode; fehlende manuelle Prüfschritte werden als
ausstehend benannt.

Befundnummern sind chronologisch nach ihrer tatsächlichen Erstellung; die
Nummern geplanter Bauabschnitte aus `ABDECKUNG.md` können davon abweichen und
werden im Text des jeweiligen Befunds genannt.

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
   ausdrückliche Wahl „alle Einträge auf dieser Seite“, setzt `.is-checked`,
   führt den Seitenzustand der Sammelcheckbox einschließlich `indeterminate`,
   liefert ausgewählte, sichtbare und gefilterte Zeilen, aktualisiert Zähler
   über `onChange` und aktiviert abhängige Aktionen. Mit `selectMatched`,
   `restrictToPage`, `scopeRegion` und `scopeMessage` bietet derselbe Vertrag
   die zweite, bewusst ausgelöste Menge „alle Treffer dieser Filterung“ an.
   `syncCollection(view)` erhält nach jeder Listenänderung `matchedRows`,
   `pageRows` und `reason` aus `createListView`. Ändern sich Suche oder Filter
   im Zustand „alle Treffer“, hebt der Vertrag die gesamte seitenübergreifende
   Auswahl auf und schreibt sichtbar: „Die Auswahl aller Treffer wurde
   aufgehoben, weil sich Suche oder Filter geändert haben.“ Eine automatische
   Neubezifferung ist unzulässig, weil sie die fachliche Menge ohne erneute
   Zustimmung austauschen würde. Die Statusdaten trennen `selectedCount`,
   `actionableCount` und `alreadyIncludedCount`; die Ausführungsoberfläche
   nennt alle drei unmittelbar vor der Handlung. Dynamisch ergänzte Zeilen
   werden mit `refreshRows()` neu gebunden. Eine
   einzelne Vorschauwahl wie `.is-selected` gehört ausdrücklich nicht zu
   diesem Vertrag. In einer paginierten Liste bedeutet sichtbar ausschließlich
   die aktuelle Seite; die Auswahl anderer Seiten bleibt trotzdem erhalten.
 - **Sammelaktion** – `.bulk-action` verbindet eine bezifferte Auswahl mit
   einem erweiterbaren `.menu`. Ohne Auswahl ist der Auslöser nativ deaktiviert
   und über sichtbaren, mit `aria-describedby` verbundenen Text begründet.
   Kontakt-, Teilnehmenden- und Mitgliederlisten verwenden denselben Auslöser
   „Sammelaktion“; allein die angebotenen fachlichen Einträge unterscheiden
   sich.
 - **Modaler Arbeitsdialog** – `CrmShell.createDialog(options)` öffnet ein
   natives `<dialog>`, setzt den Anfangsfokus, hält den Tab-Fokus im Dialog,
   lässt Escape schließen und gibt den Fokus an den Auslöser zurück.
   `CrmShell.createDistributionAssignment(options)` verwendet diesen Vertrag
   für dieselbe Zuordnung aus zwei Richtungen: feste Kontakte mit
   Verteilerwahl oder fester Verteiler mit Kontaktsuche. Suche, Filter,
   Pagination, Auswahlmengen, bereits enthaltene Kontakte und beide
   Ergebniszahlen bleiben gemeinsame Systemlogik. Der Dialog hat nur eine
   vertikale Scrollfläche; Tabellen erzeugen darin keine zweite vertikale
   Scrollzone.
 - **Filter** – `CrmShell.createListFilter(options)` verwaltet benannte,
   exklusive Kontrollgruppen, synchronisiert deren `aria-pressed`, blendet
   Zeilen über die vom Screen gelieferte Funktion `matches(row, state)` ein
   oder aus und übergibt sichtbare Zeilen an `onChange`. Textsuche und
   mehrwertige Checkboxfilter bleiben screenbezogen und stoßen nach ihrer
   Änderung `refresh()` an; der Vertrag schreibt keine bestimmte sichtbare
   Filterkomponente vor. Dieser kleine Vertrag bleibt für Detailtabellen ohne
   Pagination erhalten.
 - **Listenansicht und Pagination** – `CrmShell.createListView(options)` hält
   Treffermenge und aktuelle Seite getrennt. Der Vertrag verbindet lokale
   Textsuche mit exklusiven, umschaltbaren und mehrwertigen Filtergruppen,
   setzt bei einer Einschränkung auf Seite eins zurück, rendert höchstens 25
   Treffer pro Seite und liefert `matchedRows` sowie `pageRows` getrennt an
   `onChange`. `reset()` setzt Suche und Filter zurück, `setPage()` wechselt
   programmatisch und `setBusy()` sperrt angegebene Listenaktionen sowie die
   Pagination während des Ladens. Die Seitennavigation setzt nach einer
   Bedienhandlung den Fokus auf den Ergebnisanfang. Der Auswahlcontroller
   bleibt ein eigener Vertrag und wird nach jeder Listenänderung mit
   `refresh()` abgeglichen.
 - **Zustandsumschaltung** – `CrmShell.createStateSwitch(options)` zeigt aus
   benannten Panels genau eines, synchronisiert optionale Auslöser über deren
   Attribut und stellt `set(name)` bereit. Zustandsnamen, zeitliche Übergänge,
   Fokusführung und fachliche Folgen bleiben beim Screen. Prozessschritte sind
   kein Anwendungsfall dieses Vertrags.
 - **Prototyp-Zustände** – `data-prototype-states` am `<body>` veranlasst die
   Hülle, `.prototype-bar` mit Schaltflächen über `data-prototype-state`
   einzusetzen. Ein Screen bindet diese Schaltflächen mit
   `createStateSwitch`; die Leiste ist kein fachlicher Filter und wird nie in
   Ergebnismetadaten oder Tabellenköpfe gesetzt. Abweichende sichtbare
   Beschriftungen werden positionsgleich über
   `data-prototype-state-labels` mit `|` getrennt angegeben.
 - **Ungespeicherte Änderungen** –
   `CrmShell.createUnsavedGuard(options)` beobachtet den angegebenen
   Formularkontext, komponiert die Nachfrage auf `createDialog`, hält die
   aktuelle Eingabe bei „Zur Eingabe zurück“ und verlässt sie erst nach
   Bestätigung. `markSaved()` und `setDirty(value)` bilden Speichern und
   fachlich ausgelöste Änderungen ab. Fokusfang, Escape und Fokusrückgabe
   werden nicht erneut implementiert.
 - **Formularanatomie** – `.form-section`, `.field-required`, `.field-help`,
   `.field-error`, `.validation-summary` und `.validation-summary-list`
   verbinden Abschnitte, Pflichtangaben, Hilfen, Feldfehler und eine
   fokussierbare Abschlussübersicht mit Sprüngen zum Feld.
 - **Vorschlag mit Bestätigung** – `.proposal-box` folgt auf bereits bekannte
   Angaben und verlangt die fachliche Typentscheidung erst für den Abschluss.
 - **Asynchrone Prüfung** – `.async-check` verwendet
   `data-async-state="running error empty results"`. `--stage` unterbricht als
   eigene Fläche, `--inline` begleitet den weiterhin bearbeitbaren Kontext;
   Eingaben und Wiederholungsweg bleiben in beiden Geometrien erhalten.
 - **Verhaltensanker** – Klassen beschreiben ausschließlich Darstellung.
   JavaScript bindet Verhalten über `data-*`-Attribute, nicht über Klassen.

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
- **Listenübersichten:** Seitenkopf, Prototyp-Leiste, Listensteuerung,
  Ergebnisbereich und Pagination bleiben getrennte Rollen. Die lokale Suche
  steht links in `.list-controls-main`; primäre und sekundäre Listenaktionen
  stehen rechts daneben. Fachlich verschiedene Filtergruppen stehen in
  `.list-filter-groups` als responsive Spalten nebeneinander und teilen nur
  die Darstellung und den Zustandsvertrag, nicht ihre Werte. Unter 900 Pixeln
  werden die Spalten zu einer Folge. Die Seitengröße ist im Entwurf fest 25.
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
