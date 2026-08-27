# Abdeckungsabgleich – Entwurf gegen Screen-Inventar

Stand: 27. August 2026. Verglichen wurden die Inhalte und darstellbaren
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
| Global · F01 | Druckbare Übersicht aller offenen Fachfragen | Als Screen ersatzlos entfallen; die offenen Fachfragen bleiben in `BEFUNDE-offen.md` und Abschnitt 4 dieses Abgleichs. | entfällt |
| Global · F02–F17 | Detail und Varianten der 16 Fachfragen | Als Screens ersatzlos entfallen; die Fachfragen werden nicht Teil des Übergabebestands. | entfällt |
| Kontakte · K01 | Zuletzt verwendete Kontakte als Einstieg | Der persönliche Einstieg wurde aus `kontakte.html` wieder herausgenommen; der Screen beginnt direkt mit der vollständigen Kontaktliste. | entfällt |
| Kontakte · K01 success | Suchergebnisse einschließlich weiterem Ergebnisabschnitt | Lokale Suche, mehrere Filterachsen, 205 Treffer und echte Pagination mit 25 Einträgen pro Seite sind benutzbar. | vorhanden |
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
| Veranstaltungen · E01 | Gefüllte Veranstaltungsübersicht | Die Übersicht enthält 60 Termine, Suche, Zeitraum- und Ämterfilter, Registrierungsstatus, Belegung und Pagination. | vorhanden |
| Veranstaltungen · E01a | Ladezustand | Über die Prototypsteuerung benutzbar. | vorhanden |
| Veranstaltungen · E01b | Leere Übersicht | Leerer Bestand beziehungsweise keine Treffer mit Rücksetzhandlung ist benutzbar. | vorhanden |
| Veranstaltungen · E01c | Fehlerzustand | Fehlerzustand mit „Erneut laden“ und erhaltenem Listenstand ist benutzbar. | vorhanden |
| Veranstaltungen · E02 / E03 | Veranstaltungsdetail mit Teilnehmenden | Detail, Anmeldestatus, Statusfilter, Mehrfachauswahl, Kapazität, Veranstaltungsangaben und Warteliste sind benutzbar. | vorhanden |
| Veranstaltungen · E02e | Veranstaltungsdetail ohne Teilnehmende | Ein fachlich leerer Teilnehmendenzustand fehlt. | offen |
| Veranstaltungen · E04 | Veranstaltung bearbeiten | Kein Bearbeitungszustand vorhanden. | offen |
| Veranstaltungen · E05 | Fachlich blockierter Anlegeentwurf ohne Erfolgspfad | Grunddaten, nachgelagerter Artvorschlag, Entwurfsspeicherung und blockierende Veröffentlichungsprüfung sind benutzbar; eine echte Veröffentlichung findet nicht statt. | vorhanden |
| Mailing · M01 | Vorlage und Empfängerkreis | Beides ist vorhanden, im Entwurf jedoch auf die Stufen „Vorlage“ und „Empfängerkreis“ verteilt. Ein Verteiler kann aus dem Verteilerdetail übernommen werden; die feste Zuordnung eines Mailings zu genau einem Verteiler ist noch nicht durchgängig modelliert. | teilweise |
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

## 3. Neue Anforderungen nach den Fachantworten

- **A – Teilnehmendenstatus in der Liste bearbeitbar:** Der Status wird je
  Zeile in der Teilnehmendenliste geändert, in der Regel durch das Fachamt, das
  die Veranstaltung erstellt hat. Statuswechsel je Zeile, voraussichtlich auch
  als Sammelaktion der vorhandenen Mehrfachauswahl, Rückmeldung und
  Rechteprüfung bilden einen eigenen Systemvertrag und Bauabschnitt.
- **B – Mailings am Verteiler:** Mailings hängen immer an einem Verteiler.
  Einzelmailings und individuelle Gruppenmailings führen aus der Kontaktliste
  in Richtung Outlook oder Mailprogramm, wie im Screen-Inventar beschrieben.
  Die zugehörigen Mailings werden am jeweiligen Verteiler dargestellt; ihre
  Form bleibt offen. Der aktuelle Entwurf besitzt nur die Übergabe in den
  Mailing-Prozess; eine Liste oder Historie am Verteilerdetail ist nicht
  gebaut. Der geplante Mailing-Bauabschnitt beginnt damit im Verteilerdetail
  statt in einer eigenständigen Übersicht.
- **C – Zähler sind Ableitungen:** Eine Zahl neben einer Liste wird aus dieser
  Liste berechnet und nie unabhängig gepflegt. Dies gilt für Statussummen der
  Teilnehmenden, Mitgliederzahl eines Verteilers, Empfängerzahl eines Mailings
  und Belegung einer Veranstaltung.

## 4. Reihenfolge der Bauabschnitte

### Vor dem Testing

Erledigt sind die Such- und Filterprüfung (Befunde 09 und 10), der
Teilnehmendenstatus samt abgeleiteten Zählern (Befund 11) sowie die horizontalen
Überläufe in `veranstaltungen.html` bei 1024 Pixeln und
`kontakt-detail.html` bei 1280 Pixeln.

Ausstehend ist die in Befund 07 genannte vollständige manuelle Browserrunde:
Tastaturweg, ARIA, Kontrast und die Viewports über den gesamten Bestand.

### Nach dem Testing

Institutionen, Kontakt bearbeiten, Veranstaltung bearbeiten, Mailing am
Verteiler. Institutionen hängen am Verbindungsmodell aus Frage 11; dessen
Bezeichnungen werden im Test erhoben. Vorher zu bauen hieße, das Modell zu
raten.

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
   eines anderen Amts sichtbar und gesperrt oder gar nicht sichtbar?
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
    versendenden Person?

### Umsetzungsfrage

- **5b · Mailing am Verteiler / technische Seite:** Vor der Umsetzung braucht
    der Prototyp eine gemeinsame Fixture für Verteiler, Mitglieder,
    Empfängerwerte und zugehörige Mailings. Derzeit liegen Mengen mehrfach vor
    und weichen zwischen Übersicht, Detail und Mailing ab. Die technische
    Seite hängt außerdem an einer noch nicht getroffenen
    Architekturentscheidung.
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

- Im aktuellen Ordner liegen zehn Fachscreens, das Prototyp-Hilfsmittel
  `index.html` und `_vorlage.html`. R01 zählt ausdrücklich nicht als
  Produktscreen; F01–F17 werden nicht als Dateien ergänzt.
- Die Statusstrecke zeigt zehn Wartelistenplätze, passend zur Tabelle. Sie ist
  aus der Liste abgeleitet; siehe Abschnitt 3 und Frage 17.
- Die bereits dokumentierten horizontalen Bestandsüberläufe der
  Veranstaltungsübersicht bei 1024 Pixeln und des Kontakt-Details bei 1280
  Pixeln bleiben offen.
- CD Steingrau auf Weiß erreicht 4,44:1. Die Kombination bleibt auf
  deaktivierte Inhalte und nichttextliche Symbole beschränkt; die fachliche
  beziehungsweise barrierefachliche Entscheidung dazu steht weiterhin aus.
