# Befund 05 – Listenkonsolidierung

## Rollenprüfung vor dem Markup

Die drei Übersichten wiederholen dieselben Darstellungsrollen, obwohl die
Kontaktliste sie bisher fachlich benennt. `.contact-search-tools`,
`.contact-actions` und `.contact-tools` tragen Suche, Aktionsgruppe und
Filterzeile; diese Rollen werden vor der weiteren Verwendung als
`.list-controls-main`, `.list-actions` und `.list-filter-groups` allgemein
benannt. Die bisherigen Namen bleiben als Bestandsaliase erhalten. Die
Kontakt-Master-Detail-Rollen `.contact-layout`, `.contact-table`,
`.contact-preview` und `.inline-detail` bleiben fachlich, weil sie weiterhin
den nur dort vorhandenen Vorschauwechsel tragen.

`.local-search`, `.filter-bar`, `.filter-chip`, `.filter-popover`,
`.result-meta`, `.result-counts`, `.data-table` und die vier allgemeinen
Rückmeldezustände benennen bereits ihre Rolle. Pagination und die sichtbare
Trennung zwischen Prototypsteuerung und Fachinhalt besitzen noch keine
Komponente.

## Zustands- und Rechtematrix vor dem Markup

Referenzrolle ist weiterhin Julia König, Wirtschaftsförderung. Die Matrix
definiert Darstellungsverhalten, aber keine neuen fachlichen Rechte.

| Bereich | sichtbar / lesbar | bearbeitbar | Begründung bei Schutz | zuständige Stelle |
|---|---|---|---|---|
| Kontakte | nur für die Rolle lesbare Listen- und Vorschauangaben; Teilinformationen können geschützt sein | Suche, Filter, Auswahl und Export; Anlage im Entwurf nur als nicht ausgeführte Handlung | am tatsächlich geschützten Teil, nie als deaktiviertes Scheinfeld | verantwortliches Amt beziehungsweise fachlich noch zu klärende Stelle |
| Veranstaltungen | die vorhandene gemeinsame Übersicht ist für die Referenzrolle lesbar | Suche, Filter und Anlage; Rechte einzelner Veranstaltungen sind nicht weiter belegt | Zugriffszustand statt leerer Tabelle, wenn die Übersicht vollständig geschützt ist | zuständiges Amt; verbindliche Rechte offen |
| Verteiler | Arbeits- und Managed-Verteiler sind in der Übersicht lesbar | Arbeitsverteiler anlegen; Managed-Definitionen nur zentral bearbeitbar | Änderbarkeit bleibt vor dem Öffnen ausgeschrieben | zuständiges Amt beziehungsweise „Zentrale CRM-Administration“ als offene Rollenbezeichnung |
| spätere Mailings | Sichtbarkeit zwischen Ämtern ist nicht geklärt | Anlage- und Versandberechtigung sind nicht geklärt | allgemeiner Teil- oder Vollschutzbaustein muss ohne neue Komponente tragen | fachlich offen |

Für jede Übersicht gelten dieselben Zustände:

- **gefüllt:** Listensteuerung, Trefferbereich und gegebenenfalls Pagination
  sind bedienbar;
- **lädt:** gewählte Suche, Filter und Seite bleiben erhalten, fachliche
  Aktionen und Pagination sind vorübergehend deaktiviert;
- **fachlich leer:** es existiert noch kein lesbarer Datensatz; die
  Anlagehandlung wird nur angeboten, wenn sie für die Rolle zulässig ist;
- **keine Treffer:** Daten existieren, aber Suche oder Filter liefern null;
  die Rücksetzhandlung bleibt verfügbar;
- **Fehler:** Treffer sind nicht verlässlich verfügbar, Filter bleiben
  erhalten und „Erneut laden“ ist bedienbar;
- **teilweise geschützt:** lesbare Angaben bleiben normal dargestellt, nur der
  geschützte Teil erhält Grund und zuständige Stelle;
- **vollständig geschützt:** Tabelle, Trefferzahl und Pagination werden durch
  `.no-access` ersetzt;
- **deaktiviert:** nur eine tatsächlich nicht zulässige oder vorübergehend
  blockierte Handlung wird deaktiviert und erhält eine verständliche
  Begründung.

## 1. Was aus dem Bestand kam

Unverändert verwendet wurden:

- App-Rahmen, aktive Navigation, lokale Noto Sans und Prototyp-Rückmeldungen;
- Seitenkopf, Primär-, Sekundär-, Ruhe- und Kompaktknöpfe;
- Eingabefeld und Suchsymbol für die lokale Suche;
- Filter-Chips für exklusive und umschaltbare Werte;
- Popover-Menü und Checkboxen für mehrwertige Ämterfilter;
- Datentabelle, `.primary-cell`, Auswahlspalte, Zeilen- und
  Vorschauauswahl;
- `.result-meta` und `.result-counts` für Treffer, Auswahl und Sortierhinweis;
- Statusmarken mit neutraler oder semantischer Gewichtung;
- gefüllter, Lade-, Leer-, Fehler-, Teil- und Vollzugriffszustand;
- `createListSelection` und `createStateSwitch` als getrennte bestehende
  Interaktionsverträge.

Es wurden keine Farben, Tokens, Schriften, Radien, Schattenstufen,
Umbruchpunkte oder Tabellenzellen ergänzt. Die fachlichen Filterwerte bleiben
je Bereich verschieden. Gemeinsam sind nur Ort, Gruppierung, Rücksetzen,
Trefferberechnung und Seitenverhalten.

## 2. Was ergänzt werden musste

### Allgemeine Listensteuerung

`.list-controls-main`, `.list-actions` und `.list-filter-groups` benennen die
bislang kontaktfachlich bezeichneten Rollen Suche/Aktionen/Filterachsen.
`.contact-search-tools`, `.contact-actions` und `.contact-tools` bleiben als
Bestandsaliase erhalten. `.list-search`, `.list-filter-row` und
`.list-filter-reset` vervollständigen die Komposition. Die Primäraktion steht
in allen drei Übersichten rechts neben der Suche; sekundäre Aktionen stehen in
derselben Gruppe davor. Die fachlichen Filterachsen stehen in einem responsiven
Mehrspaltenraster nebeneinander; erst unter 900 Pixeln werden sie einspaltig.
Lange Chip-Gruppen brechen innerhalb ihrer Achse um, statt benachbarte Achsen
oder die Listenkarte horizontal zu verschieben.

Die Kontaktfilter wurden fachlich getrennt: Kontaktart ist exklusiv mit Alle,
Personen und Organisationen. Der Umfang besitzt die kombinierbaren Umschalter
„Meine Zuständigkeit“ und „Rückmeldung offen“. Veranstaltungen trennen Zeitraum
und Zuständigkeit, Verteiler Art und Zuständigkeit. Alle Ämterfilter verwenden
dasselbe unmittelbar wirkende Checkbox-Popover.

### Listenansicht `createListView`

Der neue Controller hält `matchedRows` und `pageRows` getrennt. Er verbindet
lokale Textsuche mit exklusiven, umschaltbaren und Checkboxgruppen, setzt nach
einer Einschränkung auf Seite eins zurück, steuert den Rücksetzknopf und liefert
Treffermenge, aktuelle Seite und Filterzustand an den Screen. Der vorhandene
`createListFilter` bleibt für nicht paginierte Detailtabellen bestehen.

Der Listenansichts- und der Auswahlcontroller bleiben ausdrücklich getrennt.
`createListSelection` musste nicht geändert werden: Nach Anwendung der
Listenansicht bedeutet seine bestehende Prüfung `!row.hidden` genau „auf der
aktuellen Seite“. `getSelectedRows()` umfasst weiterhin alle ausgewählten
Zeilen und erhält die Auswahl über Seiten- und Filterwechsel.

### Pagination

`.list-pagination`, `.list-range`, `.pagination-nav`, `.pagination-pages` und
`.pagination-button` bilden den neuen Systembaustein. Die Bereichsangabe bleibt
bei einer Seite sichtbar; die Navigation erscheint erst ab Seite zwei. Erste,
mittlere, letzte, aktuelle, Hover-, Fokus- und deaktivierte Zustände stehen im
Styleguide. Die Seitengröße ist fest 25. Ein bedienter Seitenwechsel fokussiert
die sichtbare Ergebnis-Karte und aktualisiert die Live-Angaben.

Kontakte zeigen den knappen Fall 25 plus sechs. Verteiler zeigen den
Einseitenfall 25. Die Veranstaltungsübersicht wurde von 25 auf 60 plausible
Termine erweitert: 40 anstehende von 2026 bis 2029 und 20 vergangene von 2024
bis 2026, verteilt auf alle drei Ämter.

### Prototyp-Leiste

`shell.js` erzeugt aus `data-prototype-states` eine `.prototype-bar` an
derselben Stelle vor dem Seitenkopf. `.prototype-state` ist visuell und
semantisch von Filter-Chips getrennt. Die drei Übersichten binden Gefüllt,
Lädt, Leer und Fehler über `createStateSwitch`; der Styleguide zeigt zusätzlich
alle Interaktionszustände. Die Ergebniszeilen enthalten keine
Demonstrationssteuerung mehr.

### Allein wegen der späteren Mailingübersicht

Die vorhandene Statusmarke wurde im Styleguide ausdrücklich als Träger
beliebiger ausgeschriebener Fachwerte dokumentiert; Varianten bestimmen nur
die semantische Gewichtung, nicht das Vokabular. `createListView` unterstützt
neben exklusiven auch umschaltbare und mehrwertige Gruppen, damit ein späterer
Statusfilter ohne Controlleränderung fachlich gewählt werden kann. Die Hülle
kennt außerdem die Beschriftung „Kein Zugriff“ für eine später benötigte
Prototypausprägung. Neue Mailing-Statuswerte oder Rechte wurden nicht erfunden.

### Warum diese Bausteine bislang nicht vorgesehen waren

Die bisherigen Übersichten bestanden aus fest verdrahteten Mengen von höchstens
25 Zeilen. Für diesen Stand konnte `hidden` zugleich „kein Filtertreffer“ und
„nicht dargestellt“ bedeuten, ohne dass der Unterschied sichtbar wurde. Erst
die freigegebene Seitengröße mit 31 beziehungsweise 60 Datensätzen macht eine
eigene Treffermenge und Seitengrenze notwendig. Eine allgemeine
Listensteuerung, Pagination und eine von der Ergebniszeile getrennte
Prototypsteuerung waren deshalb in den früheren Einzel-Screens nicht als
Systemrollen erkennbar. Die noch nicht gebaute Mailingübersicht hat zusätzlich
offengelegt, dass Statuswerte und Filtergruppen fachlich offen, ihre
Darstellungsverträge aber schon jetzt allgemein sein müssen.

## 3. Wo eine lokale Lösung bequemer gewesen wäre

- Pagination nachträglich auf bereits durch Filter gesetztes `hidden` zu
  stapeln, wäre pro Screen kürzer gewesen. Filtertreffer und Seite wären dann
  nicht mehr unterscheidbar gewesen; Auswahl und Zähler hätten je nach
  Aufrufreihenfolge andere Mengen gemeint.
- `createListSelection` um Filter und Seiten zu erweitern, hätte einen einzigen
  Controller ergeben. Damit wären fachliche Einzelauswahl, Mehrfachauswahl und
  reine Listenansicht erneut vermischt worden.
- Die Kontaktklassen in Veranstaltung und Verteiler zu verwenden, hätte CSS
  gespart, aber eine Kontaktkomposition als allgemeine Rolle behauptet. Die
  Aliasumbenennung macht die tatsächliche Wiederholung sichtbar.
- Ämter in Verteilern weiter als exklusive Chips zu führen, hätte die bisherige
  Verdrahtung erhalten, aber denselben Zuständigkeitsbegriff anders bedienbar
  gelassen als in Kontakte und Veranstaltungen.
- Die Zustandsknöpfe in jeder Ergebniszeile zu belassen, hätte keine
  Hüllenänderung gebraucht. Sie wären weiterhin mit fachlichen Filtern und
  Sortierangaben vermischt gewesen.
- Mailingstatus wie „geplant“, „fehlgeschlagen“ oder „abgebrochen“ zu erfinden,
  hätte die Prüfmatrix vollständiger aussehen lassen, aber eine ungeklärte
  Fachentscheidung vorweggenommen.

## 4. Einschätzung zur Tragfähigkeit

Das System trägt nun drei unterschiedliche Mengensituationen und drei
unterschiedliche Filtermodelle mit demselben Vertrag. Entscheidend ist nicht
die sichtbare Pagination, sondern die getrennte Datenebene aus gesamtem
Zeilenbestand, Treffermenge und aktueller Seite. Eine spätere Serveranbindung
müsste die Datenquelle austauschen, nicht die Bedeutung von Auswahl oder
Seitennavigation.

Die Kontakt-Master-Detail-Komposition blieb stabil. Ein Seitenwechsel wählt für
die Vorschau den ersten Kontakt der neuen Seite, ohne Checkboxauswahlen anderer
Seiten zu verlieren. Veranstaltungen benötigen keine Mehrfachauswahl und
werden dadurch nicht künstlich an den Auswahlcontroller gekoppelt. Verteiler
bestätigen, dass Bereichsangabe und Filtervertrag auch ohne sichtbare
Seitennavigation sinnvoll bleiben.

Die bekannte geringe horizontale Überschreitung der Veranstaltungsübersicht
bei 1024 Pixeln bleibt bestehen und ist weiterhin in `BEFUNDE-offen.md`
dokumentiert. Kontakte und Verteiler besitzen bei 1024 keinen Seitenüberlauf.

## 5. Mailingübersicht als Prüfstein

Es wurde kein Mailing-Screen gebaut. Die folgende Zuordnung weist nach, dass
die allgemeine Anatomie ihn ohne weitere Systemkomponente trägt.

| Mailinginhalt | vorhandene Rolle |
|---|---|
| Mailing beziehungsweise Betreff | `.primary-cell` mit Haupt- und Nebentext; der Link öffnet das einzelne Mailing |
| zuständiges Amt | normale, zugeordnete Tabellenzelle |
| Status mit noch unbekanntem Vokabular | `.status`; Text ist beliebig, semantische Variante optional |
| Empfängerzahl | normale numerische Tabellenzelle; bei Haupt-/Nebenwerten ebenfalls `.primary-cell` |
| letzte Änderung oder Versandzeitpunkt | semantisches `<time>` in normaler oder zweizeiliger `.primary-cell` |

| Mailingbedienung | vorhandener Vertrag |
|---|---|
| lokale Suche | `.list-search` plus `query` von `createListView` |
| Ämterfilter | Checkboxgruppe im gemeinsamen Filter-Popover |
| Statusfilter | exklusive, umschaltbare oder mehrwertige Gruppe; die Fachfrage bestimmt die Form |
| Primäraktion | `.btn--primary` in `.list-actions` |
| Zeilenaktion | normaler Link aus der Hauptzelle in ein einzelnes Mailing |
| Pagination | `.list-pagination`, fest 25 pro Seite |
| Auswahlspalte, falls fachlich nötig | vorhandene Tabellen-Auswahlstruktur plus separater `createListSelection` |

Gefüllt, lädt, fachlich leer, keine Treffer, Fehler und kein Zugriff werden von
den vorhandenen Listen- und Rückmeldekomponenten getragen. Offen bleiben
Statusvokabular, ämterübergreifende Sichtbarkeit, Anlageberechtigung und der
fachliche Bedarf einer Mehrfachauswahl. Diese Punkte stehen in
`BEFUNDE-offen.md`; sie verlangen keine neue Darstellungsrolle.

## Prüfnachweis

- Die drei Screenprüfungen auf `<style>`, `style=` und Farbwerte ergeben über
  alle elf Screens jeweils null Treffer. Externe Laufzeitadressen sind in
  Screens, Styleguide und Systemdateien ebenfalls nicht vorhanden.
- Kontakte enthalten 31, Veranstaltungen 60 und Verteiler 25 Datensätze.
- Alle zehn Fachscreens, die Vorlage und der Styleguide wurden per `file://` ohne
  Server bei 1024, 1280 und 1920 Pixeln geöffnet. Alle laden lokal
  `"Noto Sans", Arial, sans-serif`; Navigation und aktive Bereiche stimmen.
- Kontakte: Seite eins zeigt 25, Seite zwei sechs Treffer. Eine Auswahl von
  Seite eins bleibt erhalten; die Sammelcheckbox wählt auf Seite zwei nur die
  sechs aktuellen Zeilen. Personen plus beide Umfangsfilter ergeben drei
  Treffer. Das Abwählen des Kulturamts ergibt 20 Treffer.
- Veranstaltungen: Standard sind 40 anstehende Termine auf zwei Seiten mit 25
  und 15 Zeilen. Vergangene ergeben 20 Treffer ohne Seitennavigation, 90 Tage
  elf Treffer, die Suche „Kultur“ darin drei. Ohne OB-Referat bleiben 28
  anstehende Termine.
- Verteiler: 25 von 25 werden ohne Seitennavigation gezeigt. Kulturamt plus
  Arbeitsverteiler ergibt weiterhin fünf Treffer; die Suche
  „Umweltwirtschaft“ einen. Null gewählte Ämter führt in den Leerzustand, das
  Rücksetzen wieder auf 25.
- Gefüllt, lädt, leer und Fehler wurden auf allen drei Übersichten über die
  gemeinsame Prototyp-Leiste ausgelöst. Suche und Filter führen aus einem
  Demonstrationszustand zurück zur tatsächlichen gefüllten beziehungsweise
  leeren Treffermenge; Wiederholen erhält den Listenstand. Im Ladezustand sind
  Pagination und Primäraktion auf allen drei Screens blockiert; verlinkte
  Aktionen erhalten dazu `aria-disabled="true"` und führen nicht zum Ziel.
- Ein echter Tab-Weg führt in Kontakte von der lokalen Suche über Export,
  „Kontakt anlegen“, Alle, Personen, Organisationen, beide Umfangsfilter bis
  zum Ämter-Popover. Enter und Leertaste wählen weiterhin eine Kontaktzeile;
  Pagination fokussiert danach sichtbar die Ergebnis-Karte.
- In frischen lokalen Sitzungen wurden die 130 vorhandenen Schaltflächen aller
  Screens sowie acht Menü-Summaries ausgelöst oder in ihrem vorgesehenen
  deaktivierten Zustand geprüft. Freischaltbare Aktionen wurden zuvor über
  ihre Auswahl beziehungsweise Bestätigung aktiviert; kein Klick warf einen
  Skriptfehler.
- Bei 1024 Pixeln haben Kontakte und Verteiler keinen Seitenüberlauf. Die
  Veranstaltungstabelle behält ihren dokumentierten kleinen Bestandsüberlauf;
  bei 1280 und 1920 Pixeln besitzen alle drei Übersichten keinen
  Seitenüberlauf.
- Die Filterachsen wurden nach der ergänzenden Freigabe bei allen drei Breiten
  ausgemessen. Veranstaltungen und Verteiler stehen jeweils zweispaltig;
  Kontakte stehen bei 1280 und 1920 dreispaltig sowie bei 1024 in zwei Spalten
  mit der dritten Achse in der Folgezeile. Keine Filtergruppe besitzt einen
  horizontalen Überlauf.
- `git diff --check` meldet für die Arbeitskopie keine Leerraumfehler.
