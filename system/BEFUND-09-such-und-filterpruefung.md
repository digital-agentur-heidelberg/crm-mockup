# Befund 09 – Such- und Filterprüfung aller Listen

Stand: 27. August 2026. Bezug: „Vor dem Testing“, Punkt 1 in
`ABDECKUNG.md`.

## Umfang und Methode

Geprüft wurde der vorhandene statische Bestand in `screens/` und die im
Zuordnungsdialog durch `shell.js` erzeugten Listen. Die Größenordnungen sind
Arbeitsannahmen für den Betrieb, keine fachlichen Obergrenzen und keine
Umsetzungsentscheidung. Nicht als Fachlisten bewertet sind Formulare,
Beschreibungslisten, Prozessschritte, Navigationslisten und der
Prototyp-Index.

| Ort | Erwartete Größenordnung | Suche | Filter | Sortierung | Pagination | Leerzustände | Befund |
|---|---|---|---|---|---|---|---|
| Arbeitsbereich · häufige Aufgaben | 5–12 persönliche Standardaufgaben | nein | nein | Priorität | nein | nicht erforderlich | 4 Aufgaben sind vollständig lesbar; keine Listenlücke. |
| Arbeitsbereich · Heute im Blick | 0–10 Zeitpunkte pro Tag | nein | nein | Uhrzeit aufsteigend | nein | „Heute keine Zeitpunkte“ fehlt | Bei dieser Größe ist vollständiges Lesen ausreichend; der fachliche Leerzustand fehlt. |
| Arbeitsbereich · Änderungen in meiner Zuständigkeit | 0–50 in sieben Tagen | nein bei festem Sieben-Tage-Fenster | Zeitfenster und Änderungsart erst bei größerem Verlauf prüfen | neueste zuerst, im Bestand nicht sichtbar belegt | nein bei festem Fenster | 3 von laut Aktion 12 Änderungen sind sichtbar; es gibt keinen vollständigen Zielbestand. |
| Kontakte · Übersicht | mehrere Tausend Kontakte | vorhanden: Name, Organisation, E-Mail sowie fest verdrahtete Kontaktinhalte | Kontaktart, Umfang, Amt; alle drei Achsen sind fachlich plausibel | letzter fachlicher Kontakt | vorhanden, 25 je Seite | Suchtrefferzustand, Laden und Fehler vorhanden; fachlich leerer Gesamtbestand fehlt | Der Listenvertrag trägt die Größenordnung. Die drei Amtswerte liegen in einem Checkbox-Popover; die Darstellung gegen die Kleinmengen-Schwelle ist im Test zu prüfen. |
| Veranstaltungen · Übersicht | Hunderte bis Tausende über mehrere Jahre | vorhanden: Titel, Ort, Amt | Zeitraum und Amt; der Zeitbezug ist die tragende Achse | chronologisch | vorhanden, 25 je Seite | Suchtrefferzustand, Laden und Fehler vorhanden; fachlich leerer Gesamtbestand fehlt | Der Zeitraum ist passend und differenziert. Die drei Amtswerte liegen auch hier im Checkbox-Popover. |
| Verteiler · Übersicht | Dutzende bis wenige Hundert | vorhanden: Name, Beschreibung, Amt | Art und Amt | Name | vorhanden, 25 je Seite | Suchtrefferzustand, Laden und Fehler vorhanden; fachlich leerer Gesamtbestand fehlt | Der Listenvertrag trägt die Größenordnung. Die Art hat drei Werte und ist als Chipgruppe umgesetzt; die Amtsauswahl ist ein Popover mit drei Werten. |
| Kontaktdetail · Verbindungen | wenige bis mehrere Dutzend je Kontakt | bei vielen Verbindungen wahrscheinlich ja, nach Rolle oder Institution | Rolle und Sichtbarkeit erst nach Erhebung des Verbindungsmodells | fachlich offen | bei üblicher Größe nein | „Keine Verbindungen“ fehlt | 4 Einträge sind vollständig sichtbar. Die künftige Listenform hängt ausdrücklich von Frage 11 zu Kontaktarten und Verbindungen ab. |
| Kontaktdetail · demnächst eingeplant | 0–10 je Kontakt | nein | nein | nächster Termin zuerst | nein | „Derzeit nichts eingeplant“ fehlt | Bei kleiner, zeitnaher Menge ist keine Suche begründet. |
| Kontaktdetail · bisherige Teilnahmen | Dutzende bis Hunderte über Jahre | ja; man kommt mit Veranstaltung oder Jahr in die Historie | Zeitraum und Veranstaltungsart | neueste zuerst | bei langer Historie erforderlich | „Noch keine Teilnahmen“ fehlt | Ein Eintrag und „2 weitere Teilnahmen“ sind sichtbar. Es gibt keinen Weg zu einem vollständigen, wachsenden Verlauf. |
| Kontaktdetail · Gesprächsspur und Notizen | Dutzende bis Hunderte nach fünf Jahren | ja, nach Begriff oder Vorgang | Zeitraum und Art des Eintrags | neueste zuerst | bei langer Historie erforderlich | „Noch keine Notizen“ fehlt | Alle derzeit 6 Einträge sind erreichbar, aber die Komponente hat weder Suche, Filter, Trefferzahl noch einen Skalierungsweg. |
| Kontaktdetail · nächste Schritte | 0–10 offene Schritte | nein | nein | Fälligkeit | nein | „Keine nächsten Schritte“ fehlt | Vollständiges Lesen ist ausreichend; die sichtbare Reihenfolge nennt jedoch keine Fälligkeit als Sortierregel. |
| Kontaktdetail · Zuschüsse | 0–20 je Kontakt | nein | Jahr reicht voraussichtlich als Filter erst bei größerem Bestand | Jahr absteigend | nein bei üblicher Größe | „Keine Zuschüsse“ fehlt | 2 aktuelle und 2 ältere Jahre sind erreichbar. Ein vollständiger Weg für weitere Jahre ist nicht belegt. |
| Veranstaltungsdetail · Teilnehmende | 0–mehrere Hundert je Veranstaltung | ja, nach Person oder Organisation | Status ist passend; Eingangszeit und gegebenenfalls Amt sind Testkandidaten | Status- und Wartelistenreihenfolge fachlich offen; sonst Eingang | ab mittlerer Größe erforderlich | weder „noch keine Teilnehmenden“ noch „keine Treffer“ vorhanden | Es gibt nur 30 Tabellenzeilen bei 53 ausgewiesenen Anmeldungen. Suche, Pagination, vollständiger Bestand, getrennte Leerzustände und ein sichtbarer Reset fehlen. |
| Veranstaltungsdetail · Warteliste | 0–mehrere Dutzend | nein bei kleiner, sichtbarer Warteschlange; bei größeren Veranstaltungen nach Person | Status ist durch die Warteliste bereits festgelegt | Rang beziehungsweise Eingang | erst bei langer Warteliste | „Keine Warteliste“ fehlt | Die Zusammenfassung nennt 8 Personen, geöffnet werden 3. Ein vollständiger Weg fehlt unabhängig von Suche und Filter. |
| Verteilerdetail · Mitglieder | 0–mehrere Tausend je Verteiler | ja, nach Kontakt, Organisation oder E-Mail | Kontakterlaubnis und Mitgliedschaftsdatum sind Testkandidaten | Hinzugefügt, mit fachlicher Bestätigung | bei mittlerer Größe erforderlich | „Noch keine Mitglieder“ und „keine Treffer“ fehlen | 25 Mitglieder sind sichtbar; Auswahl und Entfernen existieren, aber Suche, Filter, Sortierung, Pagination und Skalierungszustände fehlen. |
| Zuordnungsdialog · Zielverteiler wählen | Dutzende bis wenige Hundert | bei mehr als wenigen Verteilern ja, nach Name und Beschreibung | Art und Amt | Name | ab mittlerer Größe erforderlich | „Kein passender Verteiler“ fehlt | Im kontaktseitigen Weg gibt es 3 feste Ziele ohne Such- oder Filterweg. Die vorhandene Auswahlform trägt keinen wachsenden Zielbestand. |
| Zuordnungsdialog · Kontakte für festen Verteiler | mehrere Tausend Kontakte | vorhanden: Name, Organisation, E-Mail | Kontaktart, Umfang, Amt | keine sichtbare Sortierregel | vorhanden, 25 je Seite | Bei 0 Treffern bleibt die Tabelle ohne eigenen Suchtrefferzustand | Der Dialog verwendet den großen Listenvertrag mit Trefferzahl, Reset und Pagination. Der fehlende Leerzustand und die nicht benannte Sortierung bleiben Befunde. |
| Kontaktanlage · Dublettenkandidaten | 0–wenige Kandidaten je Prüfung | nein | nein | Ähnlichkeit beziehungsweise Relevanz, im Bestand nicht sichtbar belegt | nein | „Keine mögliche Dublette“ vorhanden | Die geringe Menge rechtfertigt keine Suche. Für mehrere Kandidaten fehlt eine sichtbare Relevanzreihenfolge; die fachliche Frage zu erlaubten Handlungen bleibt davon getrennt offen. |
| Mailing · Empfängerkreis (Verteilerwahl) | nach neuer Anforderung genau ein Verteiler | nein | nein | nicht erforderlich | nein | „Kein Verteiler gewählt“ fehlt | Der heutige Screen lässt mehrere Verteiler wählen. Die neue Anforderung „Mailings am Verteiler“ ersetzt diese Form erst im späteren Bauabschnitt. |
| Mailing · Ausschlüsse nach Grund | 3–6 feste Prüfgründe | nein | nein | fachlich feste Reihenfolge | nein | nicht erforderlich | Zusammenfassung, keine wachsende Eintragsliste; keine Listenfunktion erforderlich. |
| Mailing · Empfängervorschau | Stichprobe aus 0–mehreren Tausend Empfängern | bei gezielter Prüfung nach Kontakt künftig prüfen | Problemfälle sind als Sprung vorhanden | keine fachliche Gesamtsortierung nötig | nein, wenn es ausdrücklich eine Stichprobe bleibt | „Keine Vorschauempfänger“ fehlt | Die Kopfzahl nennt 96, die Navigation rendert 5 Fixture-Personen. Ob dies Stichprobe oder vollständiger Prüfbestand sein soll, ist nicht ausgewiesen. |

## Befunde vor einer Umsetzung

1. Die vorhandene Listenanatomie ist für die drei Übersichten und für die
   Kontaktliste im Zuordnungsdialog belastbar. Sie ist nicht ohne Weiteres für
   eingebettete Detaillisten nachgewiesen: Teilnehmende, Mitglieder,
   Gesprächsspur, Teilnahmen und Zuschüsse benötigen andere Dichte, einen
   vollständigen Verlauf und teils eigene Such- oder Filterwege.
2. Drei Listen sind im Bestand nach ihrer eigenen Mengenangabe gekürzt, ohne
   vollständigen Weg: 53 Teilnehmende gegenüber 30 Tabellenzeilen, 8
   Wartelistenplätze gegenüber 3 sichtbaren Personen und 12 Änderungen
   gegenüber 3 sichtbaren Einträgen. Das sind eigenständige Befunde,
   unabhängig von der Frage nach Suche und Filter.
3. Bei den Übersichtslisten gibt es Trefferzahl, Reset und getrennte Lade- und
   Fehlerzustände. Ein fachlich leerer Gesamtbestand wird dort nicht getrennt
   vom leeren Suchergebnis dargestellt. Bei allen eingebetteten Listen fehlen
   die beiden getrennten Leerzustände; beim Statusfilter der
   Teilnehmendenliste fehlt außerdem der gemeinsame Reset-Ort.
4. Die vorhandenen Amtsfilter enthalten jeweils drei Werte im Checkbox-Popover.
   Die Prüfung gegen die vorgegebene Kleinmengen-Schwelle ist offen; die
   Mehrfachauswahl darf dabei nicht in eine exklusive Chipgruppe verkürzt
   werden.
5. Der kontaktseitige Zuordnungsdialog skaliert die Auswahl vieler Kontakte,
   nicht aber die Auswahl eines Zielverteilers. Der Dialog enthält dafür drei
   fest verdrahtete Ziele ohne Suche, Filter, Sortierung oder Leerzustand.
6. Die Empfängervorschau im Mailing hat eine nicht aufgelöste Bezugsmenge:
   angezeigte Versandzahl und tatsächlich navigierbare Fixture-Personen sind
   verschieden. Für eine ausdrücklich als Stichprobe definierte Vorschau ist
   das zulässig; ohne diese Einordnung fehlt der vollständige Prüfweg.

## Prüfung

Die Prüfung erfolgte ausschließlich mit Firefox. Die drei
Übersichts-Filterleisten wurden offline bei 1024, 1280 und 1920 Pixeln
aufgerufen; in den Aufnahmen erzeugt keine Filtergruppe einen zusätzlichen
Überlauf. `./system/pruefung.sh` wurde nach der Dokumentation ausgeführt. Die
bekannten horizontalen Bestandsüberläufe und die ausstehende manuelle
Browserrunde waren ausdrücklich nicht Teil dieses Durchgangs. Es wurden keine
Screens, Komponenten, CSS- oder JavaScript-Dateien geändert.
