# Abdeckungsabgleich – Entwurf gegen Screen-Inventar

Stand: 28. August 2026. Verglichen wurden die Inhalte und darstellbaren
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
| Global · S01 | Arbeitsstart: direkte Suche, zuletzt verwendete Kontakte, Veranstaltungen und Arbeitsstand | `arbeitsbereich.html` bietet Direktsuche, vier aktuelle Aufgaben, Tagespunkte und Änderungen in der eigenen Zuständigkeit. Persönlich zuletzt geöffnete Kontakte und Veranstaltungen sind derzeit nicht als eigene Einstiege umgesetzt. | teilweise |
| Global · F01 | Druckbare Übersicht aller offenen Fachfragen | Als Screen ersatzlos entfallen; die offenen Fachfragen bleiben in `BEFUNDE-offen.md` und Abschnitt 5 dieses Abgleichs. | entfällt |
| Global · F02–F17 | Detail und Varianten der 16 Fachfragen | Als Screens ersatzlos entfallen; die Fachfragen werden nicht Teil des Übergabebestands. | entfällt |
| Kontakte · K01 | Zuletzt verwendete Kontakte als Einstieg | Der persönliche Einstieg wurde aus `kontakte.html` wieder herausgenommen; der Screen beginnt direkt mit der vollständigen Kontaktliste. | entfällt |
| Kontakte · K01 success | Suchergebnisse einschließlich weiterem Ergebnisabschnitt | Lokale Suche, mehrere Filterachsen, 205 Treffer und echte Pagination mit 25 Einträgen pro Seite sind benutzbar. | vorhanden |
| Kontakte · K01b | Keine Treffer | Rücksetzbarer Leerzustand ist über die Prototypsteuerung und durch Filter erreichbar. | vorhanden |
| Kontakte · K01c | Ladezustand | Ladezustand erhält Listenstand und sperrt vorübergehend Listenaktionen. | vorhanden |
| Kontakte · K01d | Fehlerzustand | Fehlerzustand mit „Erneut laden“ und erhaltenen Filtern ist benutzbar. | vorhanden |
| Kontakte · K01e / V04 | Mehrfachauswahl und Sammelaktion „Zu Verteiler hinzufügen“ | Seitenübergreifende Mehrfachauswahl und die Zuordnung zu einem Verteiler sind vorhanden. Derselbe Zuordnungsvertrag trägt auch den umgekehrten Einstieg aus dem Verteilerdetail. | vorhanden |
| Kontakte · K02 | Person: Übersicht | Die 360°-Ansicht für Sabine Keller bündelt Identität, Erreichbarkeit, Verbindungen, Zuständigkeit und nächste Schritte. | vorhanden |
| Kontakte · K02b | Person: Stammdaten | Erreichbarkeit, Anschrift, Organisation und Zuständigkeit sind in der 360°-Ansicht enthalten; die andere Gruppierung ist eine Strukturabweichung, keine Inhaltslücke. | vorhanden |
| Kontakte · K02c | Person: Akte | Kontaktverlauf, Gesprächsnotiz, Teilnahmen, Verteiler, nächste Schritte und Zuschüsse sind in der 360°-Ansicht benutzbar. | vorhanden |
| Kontakte · K02d | Person: Datenschutz | Erlaubte Kontaktwege und erfolgter Datenschutzhinweis werden angezeigt; Bearbeitung gehört zu K06 und fehlt dort. | vorhanden |
| Kontakte · K03 | Institution: Übersicht | Institutionen sind nur als Listenzeilen vorhanden; es gibt kein Institutionendetail. | offen |
| Kontakte · K03 | Institution: Stammdaten | Nicht gebaut. | offen |
| Kontakte · K03 | Institution: Akte | Nicht gebaut. | offen |
| Kontakte · K03 | Institution: Datenschutz | Nicht gebaut. | offen |
| Kontakte · K04 | Kontakt bearbeiten | Kein Bearbeitungsformular vorhanden. | offen |
| Kontakte · K05.1 | Kontaktanlage: Name erfassen | Bekannte Angaben werden ohne vorgelagerte Typentscheidung erfasst; ein unvollständiger Entwurf ist speicherbar. | vorhanden |
| Kontakte · K05.2 | Kontaktanlage: Dublettenprüfung läuft | Als unterbrechender Zustand mit sichtbaren, gesperrten Eingaben benutzbar. | vorhanden |
| Kontakte · K05.3 | Kontaktanlage: Prüfungsfehler | Technischer Fehler mit erhaltenem Vorgang, erhaltenen Eingaben und Wiederholungsweg ist benutzbar. | vorhanden |
| Kontakte · K05.4 | Kontaktanlage: keine Dubletten | Ergebnis ohne Treffer und anschließende, vollständig validierte Neuanlage ist benutzbar. | vorhanden |
| Kontakte · K05.5 | Kontaktanlage: mögliche Dublette | Zwei tatsächlich in der Kontaktliste vorhandene Personen werden mit unterscheidenden Angaben und allen drei Folgehandlungen gezeigt. | vorhanden |
| Kontakte · K05.6 | Kontaktanlage: Kenntnisnahme | Eine begründete Entscheidung einschließlich offenem Freitext ist vor dem Abschluss erforderlich. | vorhanden |
| Kontakte · K06 | Kontakterlaubnis bearbeiten | Erlaubte Kanäle werden im Detail nur gelesen; eine Bearbeitung fehlt. | offen |
| Kontakte · K07 | Deaktivierte Kontakte | Kein eigener Bestand und keine Reaktivierung vorhanden. | offen |
| Verteiler · V01 | Gefüllte Verteilerübersicht | 25 Arbeits- und Managed-Verteiler mit Suche, Art- und Ämterfilter sind benutzbar. | vorhanden |
| Verteiler · V01a | Ladezustand | Über die Prototypsteuerung benutzbar. | vorhanden |
| Verteiler · V01b | Leere Übersicht | Leerer Filterbestand mit Rücksetzhandlung ist benutzbar. | vorhanden |
| Verteiler · V01c | Fehlerzustand | Behebbarer Fehlerzustand mit erhaltenen Filtern ist benutzbar. | vorhanden |
| Verteiler · V02 | Detail eines Arbeitsverteilers | Definition und Mitgliedschaften sind bearbeitbar; die Übergabe an ein Mailing ist vorhanden. Eine Anzeige der zugehörigen Mailings im Verteiler fehlt. | teilweise |
| Verteiler · V03 | Detail eines Managed-Verteilers | Geschützte, lesbare Definition mit Begründung und weiterhin bearbeitbaren Mitgliedschaften ist vorhanden. Eine Anzeige der zugehörigen Mailings im Verteiler fehlt. | teilweise |
| Verteiler · V05 | Arbeitsverteiler anlegen | Vierfeldformular mit Zusammenfassung und erfolgreichem Entwurfsabschluss ist benutzbar. | vorhanden |
| Mailing · Übersicht | Mailings über alle sichtbaren Verteiler hinweg | 25 Mailings mit Suche, Prozessstand-Chips und Ämterauswahl sind ohne Mehrfachauswahl benutzbar. Das zuständige Amt ist eine Angabe des Mailings und wird nicht aus dem Verteiler abgeleitet. Abgeschlossene Mailings führen in eine Leseansicht, offene in ihren gespeicherten Prozessschritt. | vorhanden |
| Veranstaltungen · E01 | Gefüllte Veranstaltungsübersicht | Die Übersicht enthält 60 Termine, Suche, Zeitraum- und Ämterfilter, Registrierungsstatus, Belegung und Pagination. | vorhanden |
| Veranstaltungen · E01a | Ladezustand | Über die Prototypsteuerung benutzbar. | vorhanden |
| Veranstaltungen · E01b | Leere Übersicht | Leerer Bestand beziehungsweise keine Treffer mit Rücksetzhandlung ist benutzbar. | vorhanden |
| Veranstaltungen · E01c | Fehlerzustand | Fehlerzustand mit „Erneut laden“ und erhaltenem Listenstand ist benutzbar. | vorhanden |
| Veranstaltungen · E02 / E03 | Veranstaltungsdetail mit Teilnehmenden | Detail, abgeleitete Statussummen, Statusfilter, echte Pagination, seitenübergreifende Mehrfachauswahl, Einzel- und Sammeländerung des Status, Kapazität, Veranstaltungsangaben und Warteliste sind benutzbar. Die eigene Veranstaltung ist bearbeitbar; die Veranstaltung eines fremden Amts bleibt lesbar, aber für die Statuspflege gesperrt. | vorhanden |
| Veranstaltungen · E02e | Veranstaltungsdetail ohne Teilnehmende | Der fachlich leere Bestand ist über `veranstaltung.html?fixture=leer` erreichbar und besitzt anders als ein leeres Such- oder Filterergebnis keinen vorgetäuschten Rücksetzweg. | vorhanden |
| Veranstaltungen · E04 | Veranstaltung bearbeiten | Kein Bearbeitungszustand vorhanden. | offen |
| Veranstaltungen · E05 | Fachlich blockierter Anlegeentwurf ohne Erfolgspfad | Grunddaten, nachgelagerter Artvorschlag, Entwurfsspeicherung und blockierende Veröffentlichungsprüfung sind benutzbar; eine echte Veröffentlichung findet nicht statt. | vorhanden |
| Mailing · M01 | Vorlage und Empfängerkreis | Vorlage und genau ein Verteiler werden in den Schritten 1 und 2 festgelegt. Ein aus dem Verteilerdetail übernommener Verteiler bleibt lesbar und festgesetzt; der folgende Ablauf überspringt die Auswahl sichtbar. | vorhanden |
| Mailing · M01a | Grundlagen laden | Die Mailingübersicht besitzt einen Ladezustand; ein eigener Ladezustand innerhalb der Vorlagen- und Verteilerwahl fehlt. | teilweise |
| Mailing · M01b | Keine Vorlagen | Nicht gebaut. | offen |
| Mailing · M01c | Fehler beim Laden der Grundlagen | Nicht gebaut. | offen |
| Mailing · M02 | Inhalt bearbeiten und ausgeschlossene Empfänger prüfen | Editor, Personalisierungsbausteine, abgeleitete Empfängermengen und namentliche Ausschlussgründe sind gemeinsam in Schritt 3 vorhanden. | vorhanden |
| Mailing · M03 | Testversand | Schritt 4 zeigt Testadresse und Handlung, führt aber keinen Versand aus. „Weiter ohne Testversand“ macht die Optionalität ausdrücklich und erreicht Schritt 5 unabhängig. | Entwurfsgrenze |
| Mailing · M04 | Testnachweis | Der fehlende Nachweis wird in Schritt 4 und Schritt 5 wahrheitsgemäß angezeigt; der statische Entwurf erzeugt keinen positiven Nachweis. | Entwurfsgrenze |
| Mailing · M05 | Echtversand bestätigen | Schritt 5 ist auch ohne Test erreichbar. Unwiderruflichkeit, Zusammenfassung, Bestätigungscheckbox und gesperrte Primäraktion sind benutzbar; die Versandhandlung endet per Meldung. | Entwurfsgrenze |
| Mailing · M06 | Versandbeleg abgeschlossener Mailings | Die Leseansicht zeigt für abgeschlossene Fixture-Mailings deren vorhandenen Beleg. Der laufende Prozess simuliert weder Versand noch Belegerzeugung. | teilweise |
| Darüber hinaus · Veranstaltungsübersicht | Fachlich ausgebaute Langlistenansicht | Über die knappe Inventarbezeichnung hinaus: 60 plausible Termine, echte Seitenwechsel, Zeitraum- und Mehrfach-Ämterfilter, ausgeschriebene Online-Registrierung und native Belegungswerte. | darüber hinaus |
| Darüber hinaus · Listenanatomie | Gemeinsamer Aufbau langer Übersichten | Getrennte Rollen für lokale Suche, Aktionen, Filterachsen, Ergebnismetadaten, Tabelle, Pagination sowie gefüllt/lädt/leer/Fehler sind für Kontakte, Veranstaltungen und Verteiler vorhanden. | darüber hinaus |
| Darüber hinaus · Sammelaktionen | Bereichsübergreifende Auswahlverträge | Seitenübergreifende Auswahl, Kontakt-Export, Verteilerzuordnung, Anschreiben und Statusänderung ausgewählter Teilnehmender sowie Hinzufügen und Entfernen von Verteilermitgliedern sind vorhanden. | darüber hinaus |
| Darüber hinaus · Prototyp-Konventionen | Zustände, Hilfsmittel und nicht ausgebaute Ziele ohne Routenabhängigkeit | Sichtbare Prototyp-Zustandsleiste, ebenso gekennzeichneter Prototyp-Index, Toasts, Nicht-hinterlegt-Rückmeldungen, erhaltener Bildschirm statt falscher Navigation und gemeinsames Nachziehen dynamischer Icons sind vorhanden. | darüber hinaus |
| Darüber hinaus · Gemeinsame Hülle | Offline-Navigation und intelligente Suche | Eine zentrale, vollständig offline laufende Hülle erzeugt Navigation, aktive Bereiche, globale Kontakt- und Handlungssuche, Hilfe, Profil und Rückmeldungen. | darüber hinaus |
| Darüber hinaus · Kontaktliste | Master-Detail-Vorschau | Einzelauswahl und Mehrfachauswahl bleiben getrennt; die Vorschau wechselt bei schmaler Breite in eine Detailzeile. | darüber hinaus |
| Darüber hinaus · Teilrechte | Geschützt, aber weiterhin lesbar und teilweise bearbeitbar | Beziehungsknoten und Managed-Definition zeigen Schutzgrund und zuständige Stelle, ohne lesbare Inhalte als deaktivierte Scheinfelder auszugeben. | darüber hinaus |
| Darüber hinaus · Mailing | Übersicht, Versandprüfung und Personalisierung | Bereichsübersicht, feste Verteilerzuordnung, Empfängermengen, Ausschlussgründe, ämterübergreifender Wiederholungsfall, Leerwertregeln, empfängerweise Vorschau, Prozessfortsetzung und abgeschlossene Leseansicht sind verbunden. | darüber hinaus |
| Darüber hinaus · Veranstaltungsart | Artvorschlag nach den Grundangaben | Der Entwurf erlaubt Speichern ohne Art, schlägt danach eine Art vor und blockiert erst die Veröffentlichung bis zur Bestätigung. | darüber hinaus |

## 2. Abweichungen in Struktur und Ablauf

Die folgenden Punkte beschreiben Unterschiede wertungsfrei. Sie entscheiden
nicht, welche Fassung später umgesetzt wird.

- **Arbeitsstart:** Der Prototyp beschreibt direkte Suche, zuletzt verwendete
  Kontakte und Veranstaltungen sowie Arbeitsstand. Der Entwurf ordnet den
  Arbeitsbereich weiterhin um vier aktuelle Handlungen und Tagespunkte; der
  dritte Block heißt nun eindeutig „Änderungen in meiner Zuständigkeit“ und
  zeigt Änderungen anderer, die die eigene Arbeit betreffen. Persönlich zuletzt
  geöffnete Kontakte und Veranstaltungen sind derzeit nicht als eigene
  Einstiege umgesetzt.
- **Kontaktliste:** Der Screen beginnt direkt mit der vollständigen,
  paginierten Kontaktliste. „Letzter fachlicher Kontakt“ bezeichnet dort das
  jüngste Gespräch, Schreiben oder Treffen mit der Person.
- **Kontaktinhalte:** Der Prototyp verteilt Übersicht, Stammdaten, Akte und
  Datenschutz für Person und Institution auf vier Register; der Entwurf bündelt
  diese Inhalte für eine Person in einer 360°-Ansicht, weil laut Briefing der
  Stand eines Kontakts in einem Blick erfassbar sein soll.
- **Kontaktanlage:** Die Dublettenprüfung unterbricht Prüfung und Entscheidung,
  lässt die eigenen Angaben aber sichtbar und sperrt sie nur bis zur
  Entscheidung. Feldfolge, Kontaktartvorschlag, Trefferdaten und
  Abschlussprüfung bleiben dabei identisch.
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
- **Mailing-Ablauf:** Der Entwurf verwendet fünf sichtbare Schritte im Wortlaut
  „Vorlage“, „Verteiler“, „Inhalt und Empfänger“, „Testversand“ und
  „Echtversand“. Schritt 4 ist optional; Schritt 5 bleibt ohne Test erreichbar.
  Kein Versand und kein positiver Testnachweis werden simuliert. Vorhandene
  Versandbelege erscheinen ausschließlich in abgeschlossenen Leseansichten.
- **Mailing-Einstiege und abgeschlossene Mailings:** Der Bauabschnitt
  unterscheidet Anlage, Wiederaufnahme und Nachschlagen.
  „Mailing anlegen“ beginnt bei Schritt 1, ein begonnenes Mailing öffnet seinen
  gespeicherten Prozessschritt und ein abgeschlossenes Mailing eine reine
  Leseansicht ohne Prozessleiste oder bearbeitbare Scheinfelder.
- **Mailing-Inhalt:** Personalisierungs- und Leerwertregeln, Empfängermenge und
  namentliche Ausschlüsse stehen gemeinsam in Schritt 3. Die Vorschau bleibt
  daneben empfängerweise prüfbar.
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

## 3. Neue Anforderungen nach den Fachantworten

- **A – Teilnehmendenstatus in der Liste bearbeitbar — umgesetzt:** Der Status
  wird je Zeile oder als Sammelaktion der vorhandenen Mehrfachauswahl geändert.
  Einzel- und Sammeländerungen verwenden denselben Systemvertrag und
  Rückgängig-Stapel. Die eigene Veranstaltung ist für die Testpersona
  bearbeitbar; die Veranstaltung eines fremden Amts bleibt lesbar, aber für
  Auswahl und Statuspflege gesperrt. Statusvokabular und erlaubte Übergänge
  bleiben Fachfragen für den Test.
- **B – Mailings am Verteiler:** Mailings hängen immer an genau einem Verteiler.
  Einzelmailings und individuelle Gruppenmailings führen aus der Kontaktliste
  in Richtung Outlook oder Mailprogramm, wie im Screen-Inventar beschrieben.
  Eine gemeinsame Übersicht zeigt sie über alle sichtbaren Verteiler hinweg;
  dies ändert ihre feste Zuordnung nicht. Der Einstieg aus dem Verteilerdetail
  setzt den Verteiler fest, der Einstieg aus dem Mailingbereich verlangt die
  Wahl genau eines Verteilers. Eine Liste oder Historie im Verteilerdetail
  bleibt außerhalb dieses Bauabschnitts.
- **D – Zuständigkeit und Sichtbarkeit von Mailings:** Jedes Mailing besitzt
  ein eigenes zuständiges Amt. Anzeige, Filterung und Bearbeitbarkeit des
  Mailings verwenden diese Angabe und leiten sie nicht aus dem zugeordneten
  Verteiler ab. Welche Verteiler sichtbar und auswählbar sind, bleibt davon
  eine getrennte Rechtefrage. Für den ersten Test werden Mailings eines fremden
  Amts sichtbar, lesbar und gesperrt gezeigt; dies ist ausdrücklich keine
  abschließende fachliche Rechteentscheidung.
- **E – Teilnehmende anschreiben — bewusster Beobachtungspunkt:** Die Handlung
  im Veranstaltungsdetail führt nicht in den Verteiler-Mailingprozess, weil die
  Teilnehmenden kein fest zugeordnetes Verteiler-Mailing bilden. Sie bleibt am
  aktuellen Screen und meldet die Entwurfsgrenze. Das ist kein vergessener
  Link, sondern macht im Test beobachtbar, wo Nutzende die aus dem Briefing
  bekannte Handlung „Mail an alle Angemeldeten“ suchen.
- **C – Zähler sind Ableitungen — innerhalb der Screens umgesetzt:** Eine Zahl
  neben einer Liste wird aus dieser Liste berechnet und nie unabhängig
  gepflegt. Dies gilt für Statussummen der Teilnehmenden, Mitgliederzahl eines
  Verteilers, Empfängerzahl eines Mailings und Belegung einer Veranstaltung.
  Davon getrennt bleibt die offene gemeinsame Fixture: Die fachlich
  zusammengehörigen Ausgangsmengen weichen zwischen Verteilerübersicht,
  Verteilerdetail und Mailing noch voneinander ab.

## 4. Reihenfolge der Bauabschnitte

### Vor dem Testing

Erledigt sind die Such- und Filterprüfung (Befunde 09 und 10), der
Teilnehmendenstatus samt abgeleiteten Zählern und fachlichem Leerzustand
(Befund 11), die echte Teilnehmendenpagination (Befund 12), die
Mitgliederpagination und Prototyp-Ausprägungen des Verteilerdetails (Befund 14)
sowie die horizontalen Überläufe in `veranstaltungen.html` bei 1024 Pixeln und
`kontakt-detail.html` bei 1280 Pixeln.

Vor dem Konsolidierungsdurchgang ist der Bauabschnitt Mailingübersicht und
vollständiger Prozess abgeschlossen (Befund 15). Ausstehend ist außerdem die in
Befund 07 genannte vollständige manuelle Browserrunde:
Tastaturweg, ARIA, Kontrast und die Viewports über den gesamten Bestand.

### Im ersten Usertest

Getestet werden die tatsächlich gebauten Wege: Arbeitsstart und Suche,
Kontaktliste und Personendetail, Kontaktanlage mit Dublettenprüfung,
Verteilerzuordnung aus beiden Richtungen, Arbeits- und Managed-Verteiler,
Veranstaltungsübersicht, Teilnehmendenarbeit, Veranstaltung anlegen,
Mailingübersicht sowie der Mailingprozess ab Schritt 1. Die Fachfragen aus
Abschnitt 5 werden über diese
Aufgaben erhoben; sie werden vor dem Test nicht durch erfundene Rechte oder
Prozessregeln geschlossen.

Nicht als umgesetzte Lösung getestet werden persönliche Öffnungshistorie,
Institutionendetail, Kontakt- und Veranstaltungbearbeitung, vollständig
geschützte Objekte, Mailinghistorie im Verteilerdetail sowie reale Exporte,
Nachrichten oder Versandhandlungen. F01–F17 bleiben Dokumentation und werden
nicht als Fachscreens ergänzt.

### Nach dem Testing

Nach den fachlichen und organisatorischen Entscheidungen folgen
Institutionendetail, Kontakt bearbeiten einschließlich Kontakterlaubnis und
Deaktivierung, Veranstaltung bearbeiten einschließlich Absage und Löschung
sowie die noch fehlenden Mailing-Lade-, Leer- und Fehlerzustände über den
gemeinsamen Übersichtsvertrag hinaus. Die persönliche
Öffnungshistorie bleibt eine davon getrennte Umsetzungsfrage. Institutionen
hängen am Verbindungsmodell aus Frage 11; dessen Bezeichnungen werden im Test
erhoben. Vorher zu bauen hieße, das Modell zu raten.

## 5. Fachfragen nach dem Testing

Die Fachfragen werden hier federführend geführt. `BEFUNDE-offen.md` verweist
für fachliche Fragen auf diesen Abschnitt.

### Im Test zu erheben

- **1 · Veranstaltung / Absagen und Löschen:** Was geschieht beim Löschen oder
   Absagen mit Teilnahmen, Anmeldelink und bereits versendeten Bestätigungen?
- **2 · Veranstaltung / Warteliste und Platzangebot:** Gibt es ein Platzangebot
   mit Rückmeldefrist, oder setzt das Amt den Status und informiert
   anschließend?
- **3 · Managed-Verteiler / ändernde Stelle:** Wird das Konzept benötigt, oder
   erfolgt die Pflege im Backend? Der gebaute geschützte Zustand bleibt bis zur
   Entscheidung unverändert, damit beobachtbar ist, ob jemand eine fremde
   Definition ändern möchte.
- **8b · Verteilerzuordnung / Sichtbarkeit fremder Verteiler:** Ist ein Verteiler
   eines anderen Amts sichtbar und gesperrt oder gar nicht sichtbar? Für den
   ersten Test gilt sichtbar und gesperrt als Annahme. Die Sichtbarkeit und
   Bearbeitbarkeit eines zugehörigen Mailings folgt dagegen dessen eigenem
   zuständigen Amt.
- **10 · Kontaktanlage / Pflichtangaben:** Welche Angaben sind je Kontaktart für
   den Abschluss erforderlich?
- **11 · Kontaktanlage / Kontaktarten und Verbindungen:** Personen können
   Mitglieder einer oder mehrerer Institutionen sein; Institutionen umfassen
   Firmen, Vereine, Parteien und weitere Formen. Rollen und Verbindungen
   werden nicht am Schreibtisch modelliert. Die Ämter erheben im Test ihre
   heutigen Bezeichnungen; der Bauabschnitt Institutionen hängt davon ab. Der
   Entwurf erfindet keine dritte Kontaktart.
- **13 · Kontaktanlage / Ergänzen eines Bestandskontakts:** Die Lösungsrichtung ist
   eine Gegenüberstellung Alt gegen Neu, aus der ausgewählt wird; sie ist keine
   beschlossene Regel. Die Bearbeitung von Bestandskontakten bleibt insgesamt
   offen.
- **14 · Kontaktanlage / Begründung der Neuanlage:** Auswahlhäufigkeit und
   Freitext bei „Anderer Grund“ sind Messpunkte des Tests.
- **Neu · Teilnehmendenstatus / Kapazität:** Was geschieht, wenn ein Statuswechsel
   die Kapazität einer Veranstaltung überschreitet? Der Entwurf warnt dauerhaft
   an der Belegung und sperrt nicht.
- **Fortgeführt · Kontaktanlage / mögliche Dublette:** Welche Handlungen bei einer
    möglichen Dublette erlaubt sind, bleibt offen. Der frühere Weg über den
    Variantenvergleich ist geschlossen; die Frage wird stattdessen über die
    Aufgabenstellung im Test adressiert.
- **Fortgeführt · Teilnehmendenstatus:** Welches Statusvokabular gilt und welche
   Übergänge sind erlaubt? Insbesondere offen bleibt die Einreihung einer neu
   auf Warteliste gesetzten Anmeldung; der Entwurf zeigt nur die vorhandene
   Eingangsreihenfolge.
- **Fortgeführt · Veranstaltungsart:** Welche Arten gelten, wie entsteht ein
    Vorschlag, wann darf die Art geändert werden und welche Folgen müssen davor
    gezeigt werden?
- **Fortgeführt · Geschützte Beziehungen:** Darf bereits die Existenz eines
    geschützten Bezugs samt Amt und Datum sichtbar sein, wenn Titel,
    Beteiligte und Inhalt geschützt sind?

### Organisatorisch zu klären

- **5a · Mailing am Verteiler / Status und Sichtbarkeit:** Welche Statuswerte
    gelten, welche Mailings zwischen Ämtern sichtbar sind und wer Mailings
    anlegen darf.
- **7 · Verteilerzuordnung / Kontakterlaubnis:** Der Entwurf bleibt wie gebaut:
    Erlaubnis ist sichtbar, Zuordnung erlaubt, Ausschluss erst beim Versand.
- **8a · Verteilerzuordnung / fremde Verteiler:** Nach aktuellem Stand ändert nur
    das zuständige Fachamt seine Verteiler. Das amtsübergreifende Verwalten
    bleibt organisatorisch und technisch offen.
- **15 · Kontaktanlage / Rechte:** Was dürfen andere Fachämter, die Zugriff auf
    einen Kontakt haben, aber nicht verantwortlich sind, an Notizen,
    Verbindungen und Stammdaten ändern oder ergänzen? Wie erfolgt die Freigabe
    für andere Ämter? Mögliche Lösungsrichtung, nicht entschieden:
    Versionierung und Änderungsantrag für Stammdaten.
- **Fortgeführt · Kontaktinhalte in Suche und Vorschau:** Welche Inhalte dürfen
    Notizen, Schlagworte und geschützte Beziehungen anderer Ämter indizieren?
- **Fortgeführt · Deaktivierte Kontakte:** Was bedeutet „deaktiviert“, wer darf
    deaktivieren oder reaktivieren und welche Folgen hat der Zustand für Suche,
    Verteiler, Veranstaltungen und Mailings?
- **Fortgeführt · Zuschüsse:** Welche Zuschussjahre werden regulär gezeigt,
    welche gelten als älter und welche Aufbewahrungs- oder
    Sichtbarkeitsgrenzen gelten zwischen Ämtern?
- **Fortgeführt · Veranstaltungsrechte:** Wer darf Veranstaltungen sehen,
    anlegen, bearbeiten, absagen oder löschen, und wie werden teilweise oder
    vollständig geschützte Veranstaltungen dargestellt?
- **Fortgeführt · Mailingprozess:** Muss Test- oder Echtversand durch eine zweite
    Person freigegeben werden, oder genügt der dokumentierte Nachweis der
    versendenden Person? Eine sichtbare Stelle läge zwischen Testnachweis und
    Echtversand; sie wird in diesem Bauabschnitt ausdrücklich nicht gebaut.

### Umsetzungsfrage

- **5b · Mailing am Verteiler / technische Seite:** Der Mailingbereich besitzt
    eine gemeinsame Fixture für Übersicht, Prozess, Leseansicht und Suche.
    Verteilerübersicht und Verteilerdetail verwenden sie noch nicht; deshalb
    weichen ihre Mengen weiter ab. Die Konsolidierung muss diese Datenquellen
    zusammenführen und hängt an einer noch nicht getroffenen
    Architekturentscheidung.
  Der Bauabschnitt legt dafür den mailingbezogenen Testvertrag fest:
  Kreativwirtschaft Heidelberg erwartet 68 Mitglieder und 64 tatsächliche
  Empfänger, Verteiler Umweltwirtschaft 25 und 23, Branchentreffen Kultur 41
  und 39. Er gleicht die davon abweichenden 53 Detailmitglieder und die
  bisherigen Mehrverteilerwerte 102 eindeutig, 6 ausgeschlossen und 96
  tatsächlich nicht an. Ravi Menon wird als vorhandene Person in Verteilern
  der Wirtschaftsförderung und des Kulturamts geführt; eine automatische
  ämterübergreifende Unterdrückung wird nicht behauptet.
- **12 · Kontaktanlage / Dublettenlogik:** Für den Design-Prototypen nicht
    relevant.
- **Fortgeführt · Persönliche Öffnungshistorie:** Speicherort,
    Aufbewahrungsdauer und Löschung von „Zuletzt geöffnet“ liegen außerhalb
    des CRM-Fachdatenmodells.

### Erledigt

- **4 · Teilnehmendenliste / Statussummen — erledigt am 27.08.2026:** Die Liste
    ist maßgeblich; Statussummen werden daraus abgeleitet und ändern sich mit
    dem Teilnehmendenstatus. Die Statusstrecke zeigt zehn, passend zur Tabelle.
- **6 · Mailingübersicht / Mehrfachauswahl — erledigt am 27.08.2026:** Die Frage
    entfällt, weil Mailings immer an einem Verteiler hängen; sie wird durch die
    Anforderung „Mailings am Verteiler“ in Abschnitt 3 ersetzt.
- **9 · Verteilerzuordnung / Mengengrenze — erledigt am 27.08.2026:** Es gibt
    keine Obergrenze. Der Entwurf beziffert die Menge vor der Ausführung und
    bleibt sonst unverändert.

### Notizen aus dem Abgleich

- Mit dem Mailing-Bauabschnitt liegen zwölf Fachscreens, das
  Prototyp-Hilfsmittel `index.html` und `_vorlage.html`. R01 zählt ausdrücklich nicht als
  Produktscreen; F01–F17 werden nicht als Dateien ergänzt.
- Die Statusstrecke zeigt zehn Wartelistenplätze, passend zur Tabelle. Sie ist
  aus der Liste abgeleitet; siehe Abschnitt 3 und Befund 11.
- Die früher dokumentierten horizontalen Bestandsüberläufe der
  Veranstaltungsübersicht bei 1024 Pixeln und des Kontakt-Details bei 1280
  Pixeln sind behoben; die vollständige manuelle Browserrunde über den gesamten
  Bestand bleibt davon unberührt ausstehend.
- CD Steingrau auf Weiß erreicht 4,44:1. Die Kombination bleibt auf
  deaktivierte Inhalte und nichttextliche Symbole beschränkt; die fachliche
  beziehungsweise barrierefachliche Entscheidung dazu steht weiterhin aus.
