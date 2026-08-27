# Befund 12 – Teilnehmendenpagination im Veranstaltungsdetail

Stand: 27. August 2026.

## Umfang und beobachtetes Verhalten

Die Teilnehmenden des Branchendialogs Kreativwirtschaft verwenden nun den
gemeinsamen Listenvertrag mit 25 Einträgen pro Seite. Bereichsangabe,
Seitennavigation und Fokusführung entsprechen den Kontaktlisten. Bei 53
Anmeldungen entstehen drei Seiten mit 25, 25 und 3 Einträgen.

Die Teilnehmendenauswahl bleibt über Seitenwechsel erhalten. Suche und
Statusfilter setzen auf die erste Seite zurück; eine Auswahl aller
Filtertreffer wird nicht angeboten, weil die Detailansicht diesen
Arbeitsumfang bisher nicht verlangt. Statusstrecke, Warteliste und Belegung
werden weiterhin aus dem vollständigen Bestand berechnet, nicht aus der
aktuellen Seite oder der Trefferliste.

Der frühere Nachladeweg und dessen paralleler, älterer Filter-Handler wurden
entfernt. Damit gibt es für Statusfilter, Suche und Sichtbarkeit nur noch
einen Controller. Dessen Status-Selektor beschränkt sich auf die
`.status-stat`-Schaltflächen; zuvor erfasste `[data-status]` auch die
Tabellenzeilen. Ein Klick auf eine Auswahlcheckbox konnte dadurch den
Statusfilter auslösen.

Die zweite Kapazitätskennzahl leitet sich unterhalb der Grenze aus den freien
Plätzen ab und zeigt erst bei einer Überschreitung deren Größe. Zuvor wurde
der Überbuchungswert auch im Normalfall ausgegeben und bei 38 von 40 Plätzen
damit fälschlich „0 frei“ angezeigt.

## Systemauswirkung

Die Komponente `.embedded-list` bleibt die Darstellung eines Listenabschnitts
im Objekt. Sie darf für eine mehrseitige Arbeitsliste die vorhandene
`.list-pagination` verwenden. Das ist keine neue visuelle Komponente; ihre
Zustände sind bereits im Styleguide dokumentiert. `createEmbeddedList` bleibt
für kurze, schrittweise nachgeladene Objektlisten vorgesehen.

## Prüfung

`./system/pruefung.sh` und `git diff --check` liefen ohne Befund. Im lokalen
Firefox über `file://` wurden bei 1024, 1280 und 1920 Pixeln kein horizontaler
Überlauf, die drei Seiten (25, 25 und 3 Einträge), Fokus auf dem
Listenabschnitt nach Seitenwechsel, Auswahl über eine Seitengrenze sowie beide
Leerfälle geprüft. Ein Klick auf eine Auswahlcheckbox ließ den Statusfilter
auf „Alle“. Der Tastaturweg bleibt ausstehend.
