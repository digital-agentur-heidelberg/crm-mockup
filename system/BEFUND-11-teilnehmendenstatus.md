# Befund 11 – Teilnehmendenstatus und eingebettete Liste

Stand: 27. August 2026.

## Umfang und beobachtetes Verhalten

Der Branchendialog Kreativwirtschaft enthält 53 Teilnahmen: 38 bestätigt, 3
offen, 10 auf Warteliste und 2 storniert. Diese Statusstrecke wird aus dem
vollständigen fachlichen Datenbestand berechnet. Sie bleibt bei Suche und
Statusfilter absolut; die Darstellung benennt das ausdrücklich als
„Gesamtbestand“.

Die eingebettete Liste weist drei Mengen getrennt aus, zum Beispiel „1
gefilterte Teilnehmende · 30 geladen · 53 gesamt“. Nachladen verändert nur die
geladene Menge. Die beiden Leerfälle sind getrennt: Eine erfolglose Suche oder
Filterung zeigt „Keine passenden Teilnehmenden“ mit Rücksetzweg; die
Test-Fixture `?fixture=leer` zeigt den fachlich leeren Bestand „Noch keine
Teilnehmenden“ ohne vorgetäuschte Rücksetzhandlung.

Die Statusmarke und die Sammelaktion verwenden ausschließlich
`CrmShell.createRowStatusChange(options)`. Einzeländerungen sind Mengen mit
einem Element; Einzel- und Sammelwechsel liegen in einem gemeinsamen
Rückgängig-Stapel. Der Toast bleibt bei Sammelwechsel zehn Sekunden sichtbar,
und die dauerhafte Aktion „Letzte Statusänderung rückgängig“ nimmt ebenfalls
den jüngsten Vorgang zurück. Nach einem Wechsel von Warteliste auf bestätigt
wird die Liste aus dem Datenbestand neu aufgebaut; die nachfolgenden Ränge
rücken sichtbar nach.

Belegung und Warteliste werden aus demselben Datenbestand abgeleitet. Der
Wechsel von 40 auf 41 bestätigte Teilnahmen zeigt dauerhaft an der Belegung
„Kapazität um 1 Platz überschritten.“; nach Rücknahme des letzten Wechsels
verschwindet dieser Hinweis wieder. Eine Sperre wird nicht erfunden.

## Rechte, Kontrast und Überläufe

Die Wirtschaftsförderung pflegt die eigene Veranstaltung. „Werkstatt
Kult:Karte 2027“ ist über die Veranstaltungsübersicht erreichbar und bleibt
für die Testpersona lesbar, aber für Statuspflege, Auswahl und Sammelaktion
gesperrt; zuständig ist das Kulturamt.

Die Statuspaare sind im Styleguide dokumentiert: Erfolg 7,64:1, Info 10,10:1,
Warnung 7,06:1 und Gefahr 8,28:1. Die neue Statusaktion verändert bei Hover
und Fokus keine Text-/Flächenkombination; gesperrter Text nutzt 6,16:1 auf
Weiß. Die Überlaufursachen der Veranstaltungsübersicht und des Kontakt-Details
sind mit den gemeinsamen `min-width: 0`-Grenzen behoben.

## Prüfung

Geprüft wurde lokal in Firefox über `file://` bei 1024, 1280 und 1920 Pixeln.
Dabei ergaben die drei betroffenen Screens keinen horizontalen Überlauf.
Geprüft wurden außerdem Einzel- und Sammelwechsel, beide Rücknahmewege und
ihre Kombination, Zähler nach jedem Wechsel, Wartelistenränge,
Überbuchungswarnung, Nachladen, beide Leerfälle und die Fremdamts-Sperre.

Die Prüfung ist auf Firefox beschränkt. Tastaturweg und ARIA-Semantik wurden
nicht geprüft und bleiben ausdrücklich ausstehend.
