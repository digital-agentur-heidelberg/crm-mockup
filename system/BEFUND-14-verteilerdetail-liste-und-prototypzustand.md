# Befund 14 – Mitgliederliste und Prototyp-Ausprägungen im Verteilerdetail

Stand: 27. August 2026.

## Umfang und beobachtetes Verhalten

Die Mitgliederliste im Verteilerdetail verwendet jetzt denselben
Listenvertrag wie die zuletzt angepasste Teilnehmendenliste. Sie besitzt eine
lokale Suche, 25 Einträge pro Seite und bei 53 Mitgliedern drei Seiten.
Auswahl, Bereichsangabe und Seitennavigation bleiben getrennt: Die Auswahl
bleibt beim Seitenwechsel erhalten, während die Bereichsangabe nur die
aktuelle Seite beschreibt. Die ergänzten Fix­turen stammen aus bereits im
Prototyp verwendeten Kontakten.

Der Übergang „Als Empfängerkreis an Mailing übergeben“ steht im Kartenkopf
neben den übrigen Mitgliederaktionen. Er bleibt beim Wechsel der
Verteiler-Ausprägung funktional und übergibt den dazu passenden Verteiler.

Arbeits- und Managed-Verteiler werden nicht mehr als Filter im Seitenkopf
dargestellt. Beide sind als ausdrücklich benannte Prototyp-Zustände in der
gemeinsamen Leiste oberhalb des Screens verortet. Der Managed-Zustand zeigt
weiterhin die lesbare, begründete Schutzgrenze der Definition; die
Mitgliederarbeit bleibt zugänglich.

Das Entfernen oder Hinzufügen von Mitgliedern aktualisiert den Zeilenbestand
der Pagination, den Gesamtzähler und die Auswahl. Dafür ergänzt
`createListView()` die dokumentierte Methode `refreshRows()`.

## Prüfung

`./system/pruefung.sh` und `git diff --check` liefen ohne Befund.

Im lokalen Firefox über `file://` wurde geprüft: 53 Zeilen und die erste
Seite 1–25, der Wechsel auf Seite 2 (26–50), der Managed-Zustand samt
Mailing-Ziel, ein leeres Suchergebnis mit Rücksetzen sowie das Entfernen eines
Mitglieds mit aktualisiertem Zähler (52) und Bereichsangabe. Die Sichtprüfung
bei 1024, 1280 und 1920 Pixeln sowie ein durchgehender Tastaturweg stehen
noch aus.
