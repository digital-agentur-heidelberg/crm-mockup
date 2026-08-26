# Befund 03 – Verteiler

## Ausgangshypothese und tatsächliches Ergebnis

Vor der Umsetzung wurden ein allgemeines Sperr-Muster, ein neutrales
Objekt-Arbeitslayout und drei gemeinsame Interaktionsverträge als wahrscheinliche
Systemergänzungen benannt. Genau diese Ergänzungen waren nötig. Eine zunächst
denkbare eigene Änderbarkeitskomponente entfiel: Die vorhandenen Statusmarken
tragen „Definition bearbeitbar“ und „Definition zentral“ bereits verständlich,
mit Text und Icon statt Farbe allein. Neue Farben, Tokens, Tabellenzellen,
Formularfelder oder Umbruchpunkte waren nicht erforderlich.

## 1. Was aus dem Bestand kam

Unverändert verwendet wurden:

- App-Rahmen, aktive Navigation, globale Suche und Prototyp-Rückmeldungen;
- Seitenkopf, Aktionsgruppen, Primär-, Sekundär-, Ruhe- und Kompaktknöpfe;
- Karten, Kartenköpfe, Icon-Titel und die drei vorhandenen Innenraumdichten;
- Datentabelle, Auswahlspalte, Haupt-/Nebentextzelle und scrollbare Tabellenhülle;
- Statusmarken für Art, Änderbarkeit und Erreichbarkeit;
- Filter-Chips sowie Checkboxen im vorhandenen Popover-Menü;
- Eingabe, Auswahlfeld, Textbereich, Feldraster und Formularraster;
- Beschreibungs- und Zusammenfassungslisten;
- Lade-, Leer- und Fehlerzustand einschließlich Wiederholen-Aktion;
- Toast, Nicht-hinterlegt-Vertrag und Übergang in das bestehende Mailing.

Die vorhandenen Atome tragen alle drei Screens ohne neue visuelle Sprache. Die
Übersicht braucht keine Verteilerkarte: Die Tabelle bleibt bei 25 langlebigen
Objekten besser vergleichbar und zeigt die neue Eigenschaft „Änderbarkeit“ mit
bereits vorhandenen Statusatomen. Das Anlageformular benötigt keinen neuen
Prozess; das vorhandene Formularraster hält den fokussierten Vorgang und seine
Zusammenfassung zusammen. Die Mitgliederliste verwendet dieselbe
Tabellenstruktur wie Kontakte und Teilnehmende.

Auch der vorhandene 1099-px-Stapelpunkt trägt das Verteilerdetail. Das neue
Layout ändert bei kleinerer Breite nur seine Geometrie. Es verhält sich damit
wie Veranstaltung, Formular und Mailing und nicht wie die Kontaktliste, die bei
1129 px zusätzlich von Seitenvorschau auf Detailzeile wechselt.

## 2. Was ergänzt werden musste

### Geschützter, aber lesbarer Teilbereich `.protected-section`

**Was:** Eine allgemeine Abschnittshülle mit sichtbarem Schloss, Benennung des
geschützten Inhalts, Begründung, ändernder Stelle und weiterhin lesbarem Inhalt.
Sie enthält absichtlich keine Bearbeitungsaktion. Das Verteilerdetail verwendet
sie für die Managed-Definition; die danebenliegende Mitgliederarbeit bleibt
vollständig aktiv.

**Warum reichte der Bestand nicht:** `.no-access` sagt, dass Inhalt selbst nicht
eingesehen werden darf. Ein deaktiviertes Formular hätte zwar Editieren
verhindert, aber weder die Teilgrenze noch Grund und ändernde Stelle zuverlässig
erklärt. Außerdem hätte es die vorhandene, knapp unter 4,5:1 liegende
Deaktiviertfarbe für informative Definitionstexte verwendet.

**Warum Phase 2 das nicht vorhergesehen hat:** Der damalige Bestand zeigte einen
geschützten Beziehungsknoten, aber keinen sichtbaren und fachlich nutzbaren
Abschnitt innerhalb eines weiter bearbeitbaren Objekts. `BEFUND-01` hatte diese
Lücke bereits für gemischte Feld- und Abschnittsrechte prognostiziert; erst der
Managed-Verteiler lieferte den belastbaren Anwendungsfall.

### Objekt-Arbeitslayout `.object-work-grid`

**Was:** Ein neutrales Haupt-/Seitenraster für wiederholte Arbeitsdaten und
ergänzende Objektangaben. Es übernimmt Maße und Stapelverhalten des bestehenden
Veranstaltungsrasters, ohne dessen fachlichen Klassennamen zu missbrauchen.

**Warum reichte der Bestand nicht:** `.event-grid` hätte geometrisch gepasst,
behauptet aber Veranstaltung und Teilnehmende. `.form-grid` ordnet dagegen ein
Formular einer Zusammenfassung zu und beschreibt den Schwerpunkt des Details
nicht. Das neue Raster verallgemeinert nur die gemeinsame Layoutrolle; es führt
keine neue Geometrie ein.

**Warum Phase 2 das nicht vorhergesehen hat:** Kontakt, Veranstaltung, Formular
und Mailing durften als abgenommene Fachkompositionen spezifisch bleiben. Erst
das dritte Zweispaltenlayout außerhalb dieser Bereiche zeigt, dass daneben eine
neutrale Objekt-Arbeitsrolle gebraucht wird.

### Drei Controller in `shell.js`

**Was:** `createListSelection`, `createListFilter` und `createStateSwitch` sind
als benannte Verträge in der Hülle verfügbar und im README dokumentiert. Sie
verwalten gemeinsame Zustände; fachliche Trefferprüfung, Texte, Übergänge und
Folgeaktionen bleiben beim Screen.

**Warum reichte der Bestand nicht:** Kontaktliste, Teilnehmendenliste,
Veranstaltungsübersicht und Mailing hatten gleichartige Verdrahtung jeweils
lokal. Mit dem Verteiler wären drei weitere Kopien entstanden. Die bisherige
README-Auflage verlangte deshalb ausdrücklich die Extraktion beim dritten
Vorkommen.

**Warum Phase 2 das nicht vorhergesehen hat:** Zwei Beispiele zeigten noch nicht
zuverlässig, welche Unterschiede fachlich und welche nur lokal waren. Die
Extraktion war bewusst bis zum dritten Beispiel zurückgestellt.

### Navigationsbereich „Verteiler“

**Was:** `verteiler` ist ein eigener `data-screen`-Wert und Navigationseintrag.
Der hinterlegte globale Suchtreffer „Verteiler Umweltwirtschaft“ öffnet nun das
Verteilerdetail.

**Warum reichte der Bestand nicht:** Verteiler waren bisher nur Suchtreffer und
Empfängerkreise innerhalb des Mailings, aber kein ausgebauter Arbeitsbereich.

## 3. Wo eine lokale Lösung bequemer gewesen wäre

- Die Managed-Definition als `disabled`-Textfelder zu zeigen, wäre kürzer
  gewesen. Grund und Zuständigkeit wären dann erst durch Zusatztext oder gar
  nicht erkennbar; informativer Text hätte zudem die problematische
  Deaktiviertfarbe geerbt.
- Ein wirkungsloser „Bearbeiten“-Knopf mit nachträglichem Sperrhinweis hätte den
  Schutz erst nach einem Fehlversuch erklärt. Das widerspricht sowohl dem
  Auftrag als auch dem Vertrag, dass kein Bedienelement ohne Reaktion bleibt.
- `.event-grid` lokal für das Detail zu verwenden oder einen dritten
  Umbruchwert zu ergänzen, hätte die sichtbare Geometrie schnell gelöst, aber
  Fachnamen und Responsive-System weiter auseinandergezogen.
- Auswahl, Filter und Zustandsfelder ein drittes Mal in die Screen-Skripte zu
  kopieren, wäre pro Screen kürzer gewesen. Die Abweichungen bei Kontaktvorschau,
  Statuskacheln, Textsuche und zeitgesteuertem Mailing-Laden wären dann weiter
  unbenannt geblieben.
- Die Mitgliederzahl per festem Text weiterzuführen, wäre bequem gewesen. Der
  gemeinsame Auswahlcontroller und die konkreten Hinzufügen-/Entfernen-Aktionen
  halten Zeilenzahl, Zähler, Auswahlfläche und Aktionsfreigabe gemeinsam aktuell.
- Die zentrale Rolle oder Aktualisierungsfrequenz fachlich auszudefinieren,
  hätte die Managed-Karte scheinbar vollständiger gemacht. Stattdessen bleibt
  die ändernde Stelle als neutraler Rollenname sichtbar und ihre verbindliche
  Bezeichnung als offene Fachfrage dokumentiert; eine nicht belegte Frequenz
  wird nicht behauptet.

## 4. Einschätzung zur Tragfähigkeit

Das System trägt den ersten Mehrscreen-Bauabschnitt. Die visuellen Ergänzungen
sind klein: ein allgemeines Berechtigungsmuster und ein Layoutalias auf
vorhandener Geometrie. Der größere Zuwachs liegt in Verhalten und Semantik. Das
ist eine andere Art von Ergänzung als in `BEFUND-01`, wo Haupt-/Nebentextzelle,
Belegungsanzeige und Fehlerzustand einzelne Daten- und Rückmeldebausteine
schlossen.

### Vergleich mit Befund 01

Es wiederholt sich keine Lücke derselben Art. Die Verteiler brauchten weder eine
weitere fachlich umbenannte Tabellenzelle noch eine neue kompakte Kennzahl. Die
Tabellenextraktion aus Phase 2 und ihre Korrektur in Befund 01 tragen Name,
Beschreibung, Amt, Art, Mitgliederzahl und Änderbarkeit unverändert. Neu sind
stattdessen eine Berechtigungsgrenze innerhalb eines Objekts und gemeinsame
Interaktionsinfrastruktur. Das spricht gegen eine zu eng gefasste Kategorie bei
Tabellen und Rückmeldungen; schwächer war das System erwartungsgemäß bei
Teilrechten und noch nicht dreifach belegtem Verhalten.

Das Objekt-Arbeitslayout ist eine kleine Namenskorrektur derselben Art wie die
frühere `.primary-cell`: vorhandene Geometrie war fachlich zu eng benannt. Es
ist aber keine wiederholte Tabellenlücke, sondern die erste neutrale
Verallgemeinerung eines Seitenrasters. Weitere fachlich benannte Raster sollten
deshalb bei der nächsten neuen Objektart erneut auf ihre tatsächliche Rolle
geprüft werden.

## 5. Die drei Verträge

### Mehrfachauswahl in Listen

Aus nur Kontakt- und Teilnehmendenliste hätte ein Vertrag leicht
Zeilenauswahl und aktive Vorschau zusammengezogen. Das dritte Beispiel besitzt
keine Vorschau, braucht aber konkrete Hinzufügen-/Entfernen-Aktionen und
dynamisch ergänzte Zeilen. Deshalb verwaltet der Vertrag ausschließlich
Checkboxauswahl, `.is-checked`, sichtbare Sammelauswahl, `indeterminate`, Zähler
und abhängige Aktionen. `.is-selected` bleibt eine eigenständige
Einzelauswahl. `refreshRows()` kam durch das dritte Beispiel hinzu; aus zwei
statischen Listen wäre diese Fähigkeit nicht entstanden.

### Filter

Aus Kontakt-Chips und Veranstaltungs-Statuskacheln hätte man den Vertrag an
eine sichtbare Komponente oder ein einziges `data-*`-Attribut binden können.
Die Verteilerübersicht kombiniert zwei exklusive Gruppen, während die
Kontaktliste zusätzlich Textsuche und mehrwertige Amtscheckboxen besitzt. Der
Vertrag verwaltet deshalb benannte Gruppen und `aria-pressed`, erhält die
Trefferlogik aber als `matches(row, state)` vom Screen. Das dritte Beispiel hat
die Trennung von Darstellungsform und Filtermechanik verbindlich gemacht.

### Zustandsumschaltung

Veranstaltungsübersicht und Mailing-Vorschau hätten zu einem Vertrag geführt,
der entweder vier feste Zustandsnamen oder zwingend eine Zeitsteuerung enthält.
Die Verteilerübersicht wiederholt gefüllt/lädt/leer/Fehler, während das
Verteilerdetail denselben exklusiven Panelmechanismus für zwei Ausprägungen
nutzt. Der Vertrag kennt daher nur benannte Panels, optionale Auslöser und
`set(name)`. Zustandsnamen, Timer, Fokus und fachliche Folgen bleiben lokal.
Prozessschritte werden ausdrücklich nicht darunter eingeebnet.

## 6. Was beim nächsten Screen anders angegangen wird

Teilrechte sollten künftig vor dem Markup als Matrix erfasst werden: sichtbar,
lesbar, bearbeitbar, begründet und zuständige Stelle. Das verhindert sowohl
deaktivierte Scheinfelder als auch eine versehentliche Anwendung von
`.no-access` auf weiterhin lesbare Information.

Bei weiteren Listen ist zuerst zu entscheiden, ob eine Hervorhebung
Einzelauswahl, Mehrfachauswahl oder beides bedeutet. Die gemeinsame
Checkboxauswahl darf eine fachliche Vorschauauswahl nicht übernehmen. Filter
werden als Trefferfunktion formuliert, bevor ihre sichtbaren Auslöser gewählt
werden. Neue Panelwechsel verwenden den Zustandscontroller nur dann, wenn genau
ein Panel aktiv ist; lineare Prozesse bleiben getrennt.

## Prüfnachweis

- Baseline vor der Umsetzung: Commit `81655d9`; Arbeitsbaum war leer.
- Verteilerübersicht enthält 25 Verteiler beider Arten aus
  Wirtschaftsförderung, Kulturamt und OB-Referat; die Mitgliederliste startet
  mit 25 Einträgen.
- Null Treffer für `<style>`, `style=` und Farbwerte in allen drei neuen
  Screens; ebenfalls null externe Adressen in diesen Dateien.
- Alle drei Screens per `file://`, ohne Server und ohne Netz, bei 1024, 1280
  und 1920 Pixel Breite visuell geprüft. Das Detail stapelt bei 1024 und bleibt
  bei 1280/1920 zweispaltig.
- Managed-Ausprägung interaktiv geprüft: Arbeitsdefinition verborgen,
  geschützte Definition sichtbar, Sperrgrund und Zentrale
  CRM-Administration ohne Hover lesbar, null Bedienelemente im geschützten
  Abschnitt, Mitgliederaktionen weiterhin verfügbar.
- Mitgliederinteraktion geprüft: Auswahl setzt Zeilenfläche, Zähler und
  Entfernen-Aktion; Hinzufügen erhöht 25 auf 26, Entfernen führt konsistent auf
  25 zurück; Speichern reagiert mit Erfolgstoast.
- Alle 14 Schaltflächen der Übersicht, alle sechs Schaltflächen des Details
  sowie beide Schaltflächen des Anlagevorgangs wurden in einer frischen lokalen
  Browser-Sitzung ausgelöst. Popover-Summary, Sammelcheckbox und Abbruchlink
  wurden zusätzlich geprüft; Hilfe, Rücksetzen, Wiederholen und fachliche
  Aktionen reagieren jeweils sichtbar.
- Tastaturweg geprüft: von der ersten Mitgliedercheckbox mit Tab durch die
  verbleibenden 24 Zeilen bis zum Link „Als Empfängerkreis an Mailing
  übergeben“.
- Übergabe geprüft: Das Mailing übernimmt „Verteiler Umweltwirtschaft“ allein
  mit 25 eindeutigen Kontakten, weist die zwei in der Mitgliederliste
  erkennbaren E-Mail-Ausschlüsse aus und berechnet 23 tatsächliche Empfänger.
  Der normale Mailing-Aufruf bleibt bei 102 eindeutigen und 96 tatsächlichen
  Empfängern unverändert.
- Kontaktliste nach Umstellung geprüft: Filter „Rückmeldung offen“ zeigt zehn
  Treffer, eine zuvor gewählte Checkbox bleibt gewählt und der Export bleibt
  aktiv; Vorschauauswahl und Checkboxauswahl bleiben getrennte Zustände.
- Teilnehmendenliste nach Umstellung geprüft: Wartelistenfilter zeigt die zehn
  tatsächlich vorhandenen Tabellenzeilen, eine zuvor gewählte, nun verborgene
  Person bleibt ausgewählt und „Auswahl anschreiben“ aktiv. Die abweichende
  Statussumme acht ist als offene Fachfrage dokumentiert.
- Veranstaltungsübersicht nach Umstellung geprüft: „Vergangene“ bleibt beim
  Wechsel gefüllt → lädt → gefüllt aktiv und zeigt weiterhin sieben Einträge.
  Mailing-Vorschau kehrt nach dem gemeinsamen Ladezustand in die personalisierte
  Vorschau zurück.
- Verteilerfilter geprüft: Kulturamt plus Arbeitsverteiler ergibt fünf
  sichtbare Zeilen; der Fehlerzustand erhält beide Filter.
- Aktive Navigation zeigt auf allen drei neuen Screens „Verteiler“.
- `system/shell.js` syntaktisch geprüft; `git diff --check` ohne Beanstandung.
