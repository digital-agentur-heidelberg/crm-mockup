# Abdeckungsabgleich – Entwurf gegen Screen-Inventar

Stand: 26. August 2026. Verglichen wurden die Inhalte und darstellbaren
Zustände, nicht die Routen oder die Informationsarchitektur. Als „Entwurf“
gelten nur die unter `screens/` tatsächlich vorhandenen, benutzbaren Inhalte;
Systembausteine und in Berichten beschriebene Absichten allein gelten nicht als
gebaut.

## 1. Abdeckungstabelle

„Teilweise“ benennt immer den fehlenden Anteil. Die Zeilen mit „darüber hinaus“
halten den fachlichen oder prototypischen Ausbau fest, den das Inventar nicht
oder nur als knappe Screenbezeichnung beschreibt.

| Bereich | Inhalt / Zustand | Entwurf | Zustand |
|---|---|---|---|
| Global · R01 | Gesamte Bildschirmübersicht für Abnahmerunden | `index.html` erschließt alle Fachscreens nach Bereich und ist sichtbar als Prototyp-Hilfsmittel gekennzeichnet; sie gehört nicht zur Fachanwendung. | Hilfsmittel · vorhanden |
| Global · S01 | Arbeitsstart: direkte Suche, zuletzt verwendete Kontakte, Veranstaltungen und Arbeitsstand | `arbeitsbereich.html` bietet Direktsuche, vier aktuelle Aufgaben, Tagespunkte und Änderungen in der eigenen Zuständigkeit. Persönlich zuletzt geöffnete Kontakte stehen als Einstieg in `kontakte.html`; zuletzt geöffnete Veranstaltungen fehlen weiterhin. | teilweise |
| Global · F01 | Druckbare Übersicht aller offenen Fachfragen | Als Screen ersatzlos entfallen; die offenen Fachfragen bleiben in `BEFUNDE-offen.md` und Abschnitt 4 dieses Abgleichs. | entfällt |
| Global · F02–F17 | Detail und Varianten der 16 Fachfragen | Als Screens ersatzlos entfallen; die Fachfragen werden nicht Teil des Übergabebestands. | entfällt |
| Kontakte · K01 | Zuletzt verwendete Kontakte als Einstieg | `kontakte.html` beginnt mit der persönlichen Liste „Zuletzt geöffnet“ und trennt deren Zeitpunkt sichtbar von „Zuletzt geändert“; Suche und Filter führen in die vollständige Kontaktliste. | vorhanden |
| Kontakte · K01 success | Suchergebnisse einschließlich weiterem Ergebnisabschnitt | Lokale Suche, mehrere Filterachsen, 31 Treffer und echte Pagination mit 25 Einträgen pro Seite sind benutzbar. | vorhanden |
| Kontakte · K01b | Keine Treffer | Rücksetzbarer Leerzustand ist über die Prototypsteuerung und durch Filter erreichbar. | vorhanden |
| Kontakte · K01c | Ladezustand | Ladezustand erhält Listenstand und sperrt vorübergehend Listenaktionen. | vorhanden |
| Kontakte · K01d | Fehlerzustand | Fehlerzustand mit „Erneut laden“ und erhaltenen Filtern ist benutzbar. | vorhanden |
| Kontakte · K01e / V04 | Mehrfachauswahl und Sammelaktion „Zu Verteiler hinzufügen“ | Seitenübergreifende Mehrfachauswahl ist vorhanden; angeboten werden nur Exporte. Die Zuordnung zu einem Verteiler fehlt. | teilweise |
| Kontakte · K02 | Person: Übersicht | Die 360°-Ansicht für Sabine Keller bündelt Identität, Erreichbarkeit, Verbindungen, Zuständigkeit und nächste Schritte. | vorhanden |
| Kontakte · K02b | Person: Stammdaten | Erreichbarkeit, Anschrift, Organisation und Zuständigkeit sind in der 360°-Ansicht enthalten; die andere Gruppierung ist eine Strukturabweichung, keine Inhaltslücke. | vorhanden |
| Kontakte · K02c | Person: Akte | Kontaktverlauf, Gesprächsnotiz, Teilnahmen, Verteiler, nächste Schritte und Zuschüsse sind in der 360°-Ansicht benutzbar. | vorhanden |
| Kontakte · K02d | Person: Datenschutz | Erlaubte Kontaktwege und erfolgter Datenschutzhinweis werden angezeigt; Bearbeitung gehört zu K06 und fehlt dort. | vorhanden |
| Kontakte · K03 | Institution: Übersicht | Institutionen sind nur als Listenzeilen vorhanden; es gibt kein Institutionendetail. | offen |
| Kontakte · K03 | Institution: Stammdaten | Nicht gebaut. | offen |
| Kontakte · K03 | Institution: Akte | Nicht gebaut. | offen |
| Kontakte · K03 | Institution: Datenschutz | Nicht gebaut. | offen |
| Kontakte · K04 | Kontakt bearbeiten | Kein Bearbeitungsformular vorhanden. | offen |
| Kontakte · K05.1 | Kontaktanlage: Name erfassen | Die Primäraktion meldet nur „im Entwurf nicht hinterlegt“. | offen |
| Kontakte · K05.2 | Kontaktanlage: Dublettenprüfung läuft | Nicht gebaut. | offen |
| Kontakte · K05.3 | Kontaktanlage: Prüfungsfehler | Nicht gebaut. | offen |
| Kontakte · K05.4 | Kontaktanlage: keine Dubletten | Nicht gebaut. | offen |
| Kontakte · K05.5 | Kontaktanlage: mögliche Dublette | Nicht gebaut. | offen |
| Kontakte · K05.6 | Kontaktanlage: Kenntnisnahme | Nicht gebaut. | offen |
| Kontakte · K06 | Kontakterlaubnis bearbeiten | Erlaubte Kanäle werden im Detail nur gelesen; eine Bearbeitung fehlt. | offen |
| Kontakte · K07 | Deaktivierte Kontakte | Kein eigener Bestand und keine Reaktivierung vorhanden. | offen |
| Verteiler · V01 | Gefüllte Verteilerübersicht | 25 Arbeits- und Managed-Verteiler mit Suche, Art- und Ämterfilter sind benutzbar. | vorhanden |
| Verteiler · V01a | Ladezustand | Über die Prototypsteuerung benutzbar. | vorhanden |
| Verteiler · V01b | Leere Übersicht | Leerer Filterbestand mit Rücksetzhandlung ist benutzbar. | vorhanden |
| Verteiler · V01c | Fehlerzustand | Behebbarer Fehlerzustand mit erhaltenen Filtern ist benutzbar. | vorhanden |
| Verteiler · V02 | Detail eines Arbeitsverteilers | Definition und Mitgliedschaften sind bearbeitbar; Übergabe an ein Mailing ist vorhanden. | vorhanden |
| Verteiler · V03 | Detail eines Managed-Verteilers | Geschützte, lesbare Definition mit Begründung und weiterhin bearbeitbaren Mitgliedschaften ist vorhanden. | vorhanden |
| Verteiler · V05 | Arbeitsverteiler anlegen | Vierfeldformular mit Zusammenfassung und erfolgreichem Entwurfsabschluss ist benutzbar. | vorhanden |
| Veranstaltungen · E01 | Gefüllte Veranstaltungsübersicht | Die Übersicht enthält 60 Termine, Suche, Zeitraum- und Ämterfilter, Registrierungsstatus, Belegung und Pagination. | vorhanden |
| Veranstaltungen · E01a | Ladezustand | Über die Prototypsteuerung benutzbar. | vorhanden |
| Veranstaltungen · E01b | Leere Übersicht | Leerer Bestand beziehungsweise keine Treffer mit Rücksetzhandlung ist benutzbar. | vorhanden |
| Veranstaltungen · E01c | Fehlerzustand | Fehlerzustand mit „Erneut laden“ und erhaltenem Listenstand ist benutzbar. | vorhanden |
| Veranstaltungen · E02 / E03 | Veranstaltungsdetail mit Teilnehmenden | Detail, Anmeldestatus, Statusfilter, Mehrfachauswahl, Kapazität, Veranstaltungsangaben und Warteliste sind benutzbar. | vorhanden |
| Veranstaltungen · E02e | Veranstaltungsdetail ohne Teilnehmende | Ein fachlich leerer Teilnehmendenzustand fehlt. | offen |
| Veranstaltungen · E04 | Veranstaltung bearbeiten | Kein Bearbeitungszustand vorhanden. | offen |
| Veranstaltungen · E05 | Fachlich blockierter Anlegeentwurf ohne Erfolgspfad | Grunddaten, nachgelagerter Artvorschlag, Entwurfsspeicherung und blockierende Veröffentlichungsprüfung sind benutzbar; eine echte Veröffentlichung findet nicht statt. | vorhanden |
| Mailing · M01 | Vorlage und Empfängerkreis | Beides ist vorhanden, im Entwurf jedoch auf die Stufen „Vorlage“ und „Empfängerkreis“ verteilt. Ein Verteiler kann aus dem Verteilerdetail übernommen werden. | vorhanden |
| Mailing · M01a | Grundlagen laden | Nur das Neuladen der personalisierten Vorschau wird gezeigt; ein Ladezustand für Vorlagen und Empfängerkreis fehlt. | teilweise |
| Mailing · M01b | Keine Vorlagen | Nicht gebaut. | offen |
| Mailing · M01c | Fehler beim Laden der Grundlagen | Nicht gebaut. | offen |
| Mailing · M02 | Inhalt bearbeiten und ausgeschlossene Empfänger prüfen | Editor, Personalisierungsbausteine und Ausschlussprüfung sind vorhanden, aber als getrennte Stufen organisiert. | vorhanden |
| Mailing · M03 | Testversand | Testadresse und ausgelöster Testversand sind benutzbar. | vorhanden |
| Mailing · M04 | Testnachweis | Der Nachweis entsteht im selben Schritt wie der Testversand und wird bis zur Versandbestätigung fortgeschrieben. | vorhanden |
| Mailing · M05 | Echtversand bestätigen | Unwiderruflichkeit, Zusammenfassung, Bestätigungscheckbox und gesperrte Primäraktion sind benutzbar. | vorhanden |
| Mailing · M06 | Abhängiger Versandbeleg, kein realer Versand | Nach dem simulierten Versand erscheint ein Beleg; ein realer Versand erfolgt im statischen Entwurf nicht. | vorhanden |
| Darüber hinaus · Veranstaltungsübersicht | Fachlich ausgebaute Langlistenansicht | Über die knappe Inventarbezeichnung hinaus: 60 plausible Termine, echte Seitenwechsel, Zeitraum- und Mehrfach-Ämterfilter, ausgeschriebene Online-Registrierung und native Belegungswerte. | darüber hinaus |
| Darüber hinaus · Listenanatomie | Gemeinsamer Aufbau langer Übersichten | Getrennte Rollen für lokale Suche, Aktionen, Filterachsen, Ergebnismetadaten, Tabelle, Pagination sowie gefüllt/lädt/leer/Fehler sind für Kontakte, Veranstaltungen und Verteiler vorhanden. | darüber hinaus |
| Darüber hinaus · Sammelaktionen | Bereichsübergreifende Auswahlverträge | Seitenübergreifende Auswahl, Kontakt-Export, Anschreiben ausgewählter Teilnehmender sowie Hinzufügen und Entfernen von Verteilermitgliedern sind vorhanden; V04 selbst bleibt teilweise. | darüber hinaus |
| Darüber hinaus · Prototyp-Konventionen | Zustände, Hilfsmittel und nicht ausgebaute Ziele ohne Routenabhängigkeit | Sichtbare Prototyp-Zustandsleiste, ebenso gekennzeichneter Prototyp-Index, Toasts, Nicht-hinterlegt-Rückmeldungen, erhaltener Bildschirm statt falscher Navigation und gemeinsames Nachziehen dynamischer Icons sind vorhanden. | darüber hinaus |
| Darüber hinaus · Gemeinsame Hülle | Offline-Navigation und intelligente Suche | Eine zentrale, vollständig offline laufende Hülle erzeugt Navigation, aktive Bereiche, globale Kontakt- und Handlungssuche, Hilfe, Profil und Rückmeldungen. | darüber hinaus |
| Darüber hinaus · Kontaktliste | Master-Detail-Vorschau | Einzelauswahl und Mehrfachauswahl bleiben getrennt; die Vorschau wechselt bei schmaler Breite in eine Detailzeile. | darüber hinaus |
| Darüber hinaus · Teilrechte | Geschützt, aber weiterhin lesbar und teilweise bearbeitbar | Beziehungsknoten und Managed-Definition zeigen Schutzgrund und zuständige Stelle, ohne lesbare Inhalte als deaktivierte Scheinfelder auszugeben. | darüber hinaus |
| Darüber hinaus · Mailing | Versandprüfung und Personalisierung | Eindeutige Empfänger, Dublettenauflösung, Ausschlussgründe, Leerwertregeln, empfängerweise Vorschau, Problemsprung, Testnachweis und Versandbeleg sind durchgängig verbunden. | darüber hinaus |
| Darüber hinaus · Veranstaltungsart | Artvorschlag nach den Grundangaben | Der Entwurf erlaubt Speichern ohne Art, schlägt danach eine Art vor und blockiert erst die Veröffentlichung bis zur Bestätigung. | darüber hinaus |

## 2. Abweichungen in Struktur und Ablauf

Die folgenden Punkte beschreiben Unterschiede wertungsfrei. Sie entscheiden
nicht, welche Fassung später umgesetzt wird.

- **Arbeitsstart:** Der Prototyp beschreibt direkte Suche, zuletzt verwendete
  Kontakte und Veranstaltungen sowie Arbeitsstand. Der Entwurf ordnet den
  Arbeitsbereich weiterhin um vier aktuelle Handlungen und Tagespunkte; der
  dritte Block heißt nun eindeutig „Änderungen in meiner Zuständigkeit“ und
  zeigt Änderungen anderer, die die eigene Arbeit betreffen. Persönlich zuletzt
  geöffnete Kontakte stehen wegen des Telefonwegs in der Kontaktsuche. Zuletzt
  geöffnete Veranstaltungen fehlen weiterhin.
- **Kontaktliste:** Der Prototyp trennt zuletzt verwendete Kontakte,
  Suchergebnis und Zustände über Aufrufparameter; der Entwurf übernimmt diese
  Trennung als persönlichen Einstieg „Zuletzt geöffnet“ und anschließende
  Langliste auf derselben Arbeitsfläche. „Zuletzt geändert“ benennt dort die
  Änderung am Datensatz, „Letzter fachlicher Kontakt“ in der Langliste das
  jüngste Gespräch, Schreiben oder Treffen mit der Person.
- **Kontaktinhalte:** Der Prototyp verteilt Übersicht, Stammdaten, Akte und
  Datenschutz für Person und Institution auf vier Register; der Entwurf bündelt
  diese Inhalte für eine Person in einer 360°-Ansicht, weil laut Briefing der
  Stand eines Kontakts in einem Blick erfassbar sein soll.
- **Teilweiser Schutz:** Der Prototyp simuliert Rollen und Versandberechtigung
  über Bedienelemente; der Entwurf zeigt Schutz direkt am Beziehungsknoten oder
  an einer lesbaren Managed-Definition und lässt die übrige Objektarbeit aktiv,
  weil ämterübergreifende Sichtbarkeit ausdrücklich nicht vollständig sein
  soll.
- **Verteilerdetail:** Der Prototyp zeigt Arbeits- und Managed-Verteiler als
  unterschiedliche Datensätze desselben Detailtyps; der Entwurf macht beide
  Ausprägungen auf einer Detailseite umschaltbar und trennt geschützte
  Definition von bearbeitbaren Mitgliedschaften, um die Rechtewirkung am
  gleichen Objektaufbau sichtbar zu machen.
- **Mailing-Ablauf:** Der Prototyp führt sechs Zustände von Vorlage und
  Empfängerkreis über Inhalt, Test, Nachweis und Bestätigung zum Beleg; der
  Entwurf verwendet fünf sichtbare Schritte, trennt Vorlage, Empfängerkreis und
  Ausschlüsse, verbindet Testversand mit Nachweis und zeigt den Beleg nach der
  Versandbestätigung im letzten Schritt, damit Prüfung und Unwiderruflichkeit
  als durchgängiger Arbeitsablauf lesbar bleiben.
- **Mailing-Inhalt:** Der Prototyp benennt Inhalt und ausgeschlossene Empfänger
  gemeinsam; der Entwurf stellt Personalisierungs- und Leerwertregeln zuerst
  beim Inhalt dar und prüft Ausschlüsse danach als eigenen Schritt, weil beide
  Fehlerarten unterschiedliche Folgen für den Versand haben.
- **Veranstaltungsart:** Der Prototyp beschreibt einen fachlich blockierten
  Anlegeentwurf; der Entwurf erfasst zunächst bekannte Grunddaten, schlägt erst
  danach eine Veranstaltungsart vor, erlaubt den Entwurf ohne Art und verlangt
  die Bestätigung vor der Veröffentlichung, um die Typentscheidung nicht vor
  die gesicherten Angaben zu setzen.
- **Veranstaltungsübersicht:** Der im Prototyp verlinkte zweite
  Ergebnisabschnitt ändert die Fixtures nicht; der Entwurf führt 60 Termine und
  eine echte Pagination mit 25 Einträgen pro Seite, um Dichte, Auswahlstand und
  Seitennavigation belastbar zeigen zu können.
- **Zustandsaufruf:** Der Prototyp wählt Listen- und Prozesszustände über
  Query-Parameter; der Entwurf setzt für die vier allgemeinen Listenzustände
  eine sichtbare, ausdrücklich als Prototypsteuerung gekennzeichnete Leiste
  ein, weil alle Dateien ohne Server per Doppelklick prüfbar bleiben müssen.
- **Nicht ausgebaute Ziele:** Der Prototyp kann unbekannte synthetische IDs mit
  Fixture-Fallbacks darstellen; der Entwurf bleibt bei nicht hinterlegten
  Datensätzen und Handlungen auf dem aktuellen Screen und benennt die Lücke per
  Toast, damit kein vorhandener Fremddatensatz als scheinbares Ziel erscheint.
- **Navigation:** Der Entwurf besitzt unabhängig von den Prototyp-Routen fünf
  dauerhafte Arbeitsbereiche einschließlich eines eigenen Bereichs
  „Verteiler“; dies folgt der extrahierten gemeinsamen Hülle und ist eine
  Informationsarchitekturentscheidung, keine Aussage über spätere URLs.

## 3. Vorschlag für die Bauabschnitte

Die Nummerierung setzt die vorhandenen Befunde 01 bis 05 fort. Jeder Abschnitt
ist auf eine konzentrierte Session begrenzt. „Klärung vor Start“ bedeutet, dass
ohne die in Abschnitt 4 genannte Entscheidung fachliche Regeln erfunden werden
müssten.

### Bauabschnitt 06 – Kontaktanlage und Dublettenprüfung

- **Abdeckung:** K05.1 bis K05.6: Namen erfassen, laufende Prüfung,
  Prüfungsfehler, kein Treffer, mögliche Dublette und Kenntnisnahme.
- **Voraussichtliche Systemlücke:** verzweigter Assistent mit asynchronem
  Prüfzustand, Validierungszusammenfassung, abhängige Felder, unterbrochener
  Vorgang und allgemeine Formular-/Rechtematrix. Formulare und Assistenten sind
  die in Befund 01 erwarteten Schwachstellen.
- **Warum zuerst:** Kontaktanlage ist eine Top-Aufgabe und schafft den
  allgemeinen Formular- und Rechtevertrag, den Institutionen und spätere
  Kontaktbearbeitung wiederverwenden müssen.
- **Klärung vor Start:** konkrete Handlungen an einer möglichen Dublette,
  Bedeutung der Kenntnisnahme und Anlageberechtigungen je Kontaktart.

### Bauabschnitt 07 – Verteilerzuordnung als Querschnitt

- **Abdeckung:** fehlender Anteil von K01e/V04, also ausgewählte Kontakte einem
  Verteiler hinzufügen; Abgleich mit dem bereits vorhandenen Hinzufügen und
  Entfernen im Verteilerdetail.
- **Voraussichtliche Systemlücke:** wiederverwendbare Zuordnung mit gewählten
  Kontakten, Zielverteiler, Rechteprüfung, Kontakterlaubnis, Teilerfolg und
  nachvollziehbarer Rückmeldung. Die Listen-Mehrfachauswahl existiert, der
  fachliche Zuordnungsvertrag noch nicht.
- **Warum hier:** Die Zuordnung muss feststehen, bevor Institutionen oder
  Veranstaltungsabläufe mögliche weitere Einstiege erhalten; andernfalls
  entstünden später getrennte Varianten derselben Handlung.
- **Klärung vor Start:** ob Institution und Veranstaltung tatsächlich
  Ausgangspunkte der Zuordnung sind, wer Mitglieder ämterübergreifend zuordnen
  darf und wie fehlende Kontakterlaubnis beim Beitritt wirkt.

### Bauabschnitt 08 – Institutionen

- **Abdeckung:** K03 Übersicht, Stammdaten, Akte und Datenschutz für eine
  Institution; Beziehungen zu Ansprechpersonen, Branche, Konzernstruktur und
  Schlagworten gemäß Briefing.
- **Voraussichtliche Systemlücke:** allgemeiner Objektkopf, mehrstufige
  Beziehungen, wiederholbare Formulargruppen, Änderungsnachweis und gemischte
  Feld-/Abschnittsrechte. Objektköpfe und Berechtigungen sind die in Befund 01
  und 03 erwarteten Schwachstellen.
- **Warum hier:** Der Abschnitt nutzt unmittelbar den Formular-/Rechtevertrag
  aus 06 und den Zuordnungsvertrag aus 07, ohne die Kontaktanlage und den
  deutlich dichteren Institutionenbestand in eine unbeherrschbare Session zu
  pressen.
- **Klärung vor Start:** sichtbare und bearbeitbare Institutionsteile je Amt,
  Sichtbarkeit geschützter Beziehungen sowie bestätigte Einstiege in die
  Verteilerzuordnung.

**Antwort zur Bündelungsfrage:** Kontakt anlegen und Institutionen sind zwei
Bauabschnitte. Sie teilen dieselben Formular- und Rechtefragen, aber die sechs
Anlage-/Prüfzustände sind bereits ein vollständiger Assistent, während die vier
Institutioneninhalte zusätzlich Objektkopf, Beziehungsmodell und dichte
Mehrfachdaten erproben. Abschnitt 06 muss die gemeinsamen Verträge allgemein
anlegen; Abschnitt 08 verwendet sie, statt sie neu zu bauen.

### Bauabschnitt 09 – Kontaktpflege, Kontakterlaubnis und Deaktivierte

- **Abdeckung:** K04, K06 und K07; Ergänzung der vorhandenen Personinhalte um
  Bearbeitung, Kanalrechte, Deaktivierung und Reaktivierung.
- **Voraussichtliche Systemlücke:** längeres Abschnittsformular, ungespeicherte
  Änderungen, begründetes Deaktivieren, Änderungsnachweis und Rechte auf
  Feldebene. Die bestehende 360°-Ansicht liefert den Objektkontext, aber keinen
  Bearbeitungsvertrag.
- **Warum hier:** Erst die Institution prüft, welche Teile des neuen
  Objektkopfs und der Rechtekomponenten wirklich kontaktartenübergreifend sind;
  danach kann die Personenpflege ohne vorschnelle Sonderkomponente folgen.
- **Klärung vor Start:** Rechte je Kanal und Amt, fachliche Bedeutung von
  „deaktiviert“, Reaktivierung sowie Zuschussjahre und Nachvollziehbarkeit.

### Bauabschnitt 10 – Veranstaltungslebenszyklus

- **Abdeckung:** E02e und E04; Bearbeitung, Veranstaltung ohne Teilnehmende,
  Wartelisten-/Platzangebot sowie die noch nicht gebauten Folgen von Absage und
  Löschen. E05 wird dabei nur auf bestätigte Regeln zur Veranstaltungsart
  abgeglichen.
- **Voraussichtliche Systemlücke:** allgemeiner Objektkopf im
  Bearbeitungszustand, abhängige Formularfelder, Folge-/Gefahrenbestätigung,
  Berechtigungen und ein mehrstufiger Platzangebotsvorgang.
- **Warum hier:** Die bestehende Übersicht und das Detail liefern die
  Grundlagen; nach Abschnitt 07 ist außerdem geklärt, ob Teilnehmende als
  Quelle einer Verteilerzuordnung vorkommen.
- **Klärung vor Start:** Absage-/Löschfolgen, Wartelistenreihenfolge, Frist und
  Nachricht, verbindliche Statuswerte und -zahlen sowie Regeln der
  Veranstaltungsart.

### Bauabschnitt 11 – Mailingübersicht und fehlende Grundlagenzustände

- **Abdeckung:** M01a vollständig, M01b und M01c sowie die im Inventar nicht
  beschriebene Mailingübersicht mit gefüllt/lädt/leer/Fehler/kein Zugriff. Der
  vorhandene Mailingprozess bleibt fachliche Detailansicht.
- **Voraussichtliche Systemlücke:** voraussichtlich keine neue Listenanatomie;
  Prüfstein sind Teil-/Vollschutz, Statusfilter und Berechtigungen. Erst bei
  bestätigter Mehrfachhandlung käme die vorhandene Auswahlstruktur hinzu.
- **Warum hier:** Befund 05 weist die technische Tragfähigkeit bereits nach;
  nach den Kontakt- und Verteilerabschnitten sind Empfänger- und
  Kontakterlaubnisregeln geklärt, bevor sie in der Übersicht verkürzt werden.
- **Klärung vor Start:** Statusvokabular, Sichtbarkeit zwischen Ämtern,
  Anlage- und Versandberechtigung, Bedarf einer Mehrfachhandlung sowie eine
  mögliche Vier-Augen-Freigabe des Testversands.

### Bauabschnitt 12 – Verbleibender Arbeitsstart

- **Abdeckung:** nur noch der fehlende Anteil von S01: zuletzt geöffnete
  Veranstaltungen. R01 ist als Prototyp-Hilfsmittel erledigt; F01–F17 entfallen
  ersatzlos als Screens.
- **Voraussichtliche Systemlücke:** keine neue Listenanatomie. Das persönliche
  Einstiegsmuster „Zuletzt geöffnet“ ist mit der Kontaktsuche vorhanden und
  kann nach fachlicher Bestätigung für Veranstaltungen geprüft werden.
- **Warum zuletzt:** Der unmittelbare Telefonweg und der Kontakt-Einstieg sind
  abgedeckt; der verbleibende Veranstaltungsanteil ist gegenüber den zuvor
  aufgeführten fachlichen Lücken nachrangig.
- **Klärung vor Start:** welche vorhandenen Veranstaltungsangaben in einem
  persönlichen Öffnungsverlauf für die schnelle Wiederaufnahme erforderlich
  sind.

**Antwort zur Sammelaktion:** Ja, das Thema berührt mehrere offene Bereiche.
Die zielseitige Zuordnung existiert bereits im Verteilerdetail, die
kontaktseitige Sammelaktion ist in V04 gefordert. Institution und Veranstaltung
sind als weitere Quellen in den gelesenen Unterlagen nicht belegt; genau das
muss vor Abschnitt 07 entschieden werden. Die Komponente soll deshalb die
fachliche Handlung „gewählte Kontakte einem Zielverteiler zuordnen“ allgemein
tragen und sowohl einen bereits gewählten Zielverteiler als auch eine noch zu
wählende Zielmenge zulassen. Konkrete Einstiege aus Institution oder
Veranstaltung werden nur gebaut, wenn die Fachämter sie bestätigen.

## 4. Zusammengeführte offene Fachfragen

Die Kennzeichnung **Startblocker** bedeutet: Der genannte Bauabschnitt kann
ohne Antwort nicht fachlich belastbar komponiert werden. „Vor Abschluss“ lässt
eine strukturelle Arbeit zu, verlangt die Entscheidung aber vor der Abnahme.

| Bauabschnitt | Fachfrage | Bedarf |
|---|---|---|
| 06 · Kontaktanlage | Welche Handlungen sind bei einer möglichen Dublette erlaubt: vorhandenen Kontakt öffnen, ergänzen, trotzdem neu anlegen oder nur Kenntnis nehmen; und was bestätigt K05.6 genau? | **Startblocker** |
| 06, 08, 09 · Kontakte und Institutionen | Wer darf Personen und Institutionen anlegen, lesen, ändern, deaktivieren oder reaktivieren; welche Rechte gelten je Feld beziehungsweise Abschnitt, wie werden Grund und zuständige Stelle benannt? | **Startblocker** |
| 07 · Verteilerzuordnung | Darf ein Kontakt ohne passende Kontakterlaubnis Mitglied eines Verteilers werden, wird nur der spätere Versand ausgeschlossen oder muss die Erlaubnis beim Beitritt geklärt werden? | **Startblocker** |
| 07, 08, 10 · Verteilerzuordnung | Ist „Zu Verteiler hinzufügen“ außer aus der Kontaktliste und dem Verteilerdetail auch aus einer Institution oder einer Veranstaltung vorgesehen; falls ja, welche Personen bilden dort die Auswahlmenge? | **Startblocker** |
| 07 · Verteilerzuordnung | Wer darf Mitglieder eines Arbeits- oder Managed-Verteilers ämterübergreifend hinzufügen und entfernen, und braucht es Bestätigung oder Änderungsnachweis? | **Startblocker** |
| 07 · Managed-Verteiler | Wie lautet die verbindliche organisatorische Bezeichnung statt „Zentrale CRM-Administration“, und welcher Kontakt- oder Anfrageweg wird angezeigt? | Vor Abschluss |
| 08 · Institutionen | Darf bereits die Existenz eines geschützten Bezugs samt Amt und Datum sichtbar sein, wenn Titel, Beteiligte und Inhalt geschützt sind? | **Startblocker** |
| 08, 09 · Kontakte | Welche Kontaktinhalte dürfen Suche und Vorschau indizieren, insbesondere Notizen, Schlagworte und geschützte Beziehungen anderer Ämter? | **Startblocker** für Suche/Vorschau, sonst vor Abschluss |
| 09 · Kontaktpflege | Was bedeutet „deaktiviert“ fachlich, wer darf deaktivieren oder reaktivieren und welche Folgen hat der Zustand für Suche, Verteiler, Veranstaltungen und Mailings? | **Startblocker** |
| 09 · Zuschüsse | Welche Zuschussjahre werden regulär gezeigt, welche gelten als „älter“ und gibt es Aufbewahrungs- oder Sichtbarkeitsgrenzen zwischen Ämtern? | Vor Abschluss |
| 10 · Veranstaltungen | Was geschieht beim Absagen oder Löschen mit Teilnahmen, Anmeldelink, Warteliste und bereits versendeten Einladungen beziehungsweise Bestätigungen? | **Startblocker** |
| 10 · Warteliste | Nach welcher Regel wird gereiht oder nachgerückt, wer bietet einen Platz an, welche Frist gilt und welche Nachricht wird versendet? | **Startblocker** |
| 10 · Teilnehmendenstatus | Welches Statusvokabular gilt verbindlich – insbesondere offen, bestätigt, Warteliste, abgelehnt und storniert – und welche Übergänge sind erlaubt? | **Startblocker** |
| 10 · Teilnehmendenstatus | Welche Wartelistenzahl gilt: acht in der Statusstrecke oder zehn in der fest verdrahteten Tabelle? | **Startblocker** |
| 10 · Veranstaltungsart | Welche Arten gelten verbindlich, wie entsteht ein Vorschlag, wann darf die Art geändert werden und welche Einladungs-/Anmeldefolgen müssen davor gezeigt werden? | **Startblocker** |
| 10 · Veranstaltungen | Wer darf Veranstaltungen sehen, anlegen, bearbeiten, absagen oder löschen, und wie werden teilweise beziehungsweise vollständig geschützte Veranstaltungen dargestellt? | **Startblocker** |
| 11 · Mailingübersicht | Welche Mailingstatus gelten verbindlich und welche Statusübergänge müssen in Übersicht und Detail erkennbar sein? | **Startblocker** |
| 11 · Mailingrechte | Welche Mailings sind zwischen Ämtern sichtbar, wer darf anlegen, bearbeiten, testen und unwiderruflich versenden? | **Startblocker** |
| 11 · Mailingprozess | Muss ein Testversand oder der Echtversand durch eine zweite Person freigegeben werden, oder genügt der dokumentierte Nachweis der versendenden Person? | **Startblocker** |
| 11 · Mailingübersicht | Gibt es eine fachliche Mehrfachhandlung für mehrere Mailings; falls ja, welche? | **Startblocker** für die Listenstruktur |
| 12 · Arbeitsstart | Welche vorhandenen Veranstaltungsangaben braucht der persönliche Einstieg „Zuletzt geöffnet“, damit eine Veranstaltung ohne zusätzliche Suche wiederaufgenommen werden kann? | Vor Abschluss |

### Notizen aus dem Abgleich

- Im aktuellen Ordner liegen zehn Fachscreens, das Prototyp-Hilfsmittel
  `index.html` und `_vorlage.html`. R01 zählt ausdrücklich nicht als
  Produktscreen; F01–F17 werden nicht als Dateien ergänzt.
- Die vorhandene Statusstrecke nennt acht Wartelistenplätze, die Tabelle
  enthält zehn Wartelistenzeilen. Dieser Bestandswiderspruch bleibt eine
  Fachfrage und wurde nicht korrigiert.
- Die bereits dokumentierten horizontalen Bestandsüberläufe der
  Veranstaltungsübersicht bei 1024 Pixeln und des Kontakt-Details bei 1280
  Pixeln bleiben offen.
- CD Steingrau auf Weiß erreicht 4,44:1. Die Kombination bleibt auf
  deaktivierte Inhalte und nichttextliche Symbole beschränkt; die fachliche
  beziehungsweise barrierefachliche Entscheidung dazu steht weiterhin aus.
