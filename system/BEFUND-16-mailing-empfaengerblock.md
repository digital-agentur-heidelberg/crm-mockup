# Befund 16 – Verdichteter Empfängerblock im Mailingprozess

Stand: 28. August 2026.

## Umfang und beobachtetes Verhalten

Der Bereich „Empfänger und Ausschlüsse“ bleibt in Schritt 3 „Inhalt und
Empfänger“. Eine Verschiebung in den optionalen Schritt 4 „Testversand“ hätte
die fachliche Empfängerprüfung überspringbar gemacht und Testadresse sowie
tatsächlichen Empfängerkreis vermischt.

Die bisher vierzeilige Zusammenfassung ist durch drei vorhandene kompakte
Mengendarstellungen ersetzt: „Im Verteiler“, „Nicht versendet“ und
„Tatsächliche Empfänger“. Die redundante Anzeige „Eindeutige Adressen“
entfällt. Die Ausschlusstabelle besitzt nur noch die zwei fachlich benötigten
Spalten „Person“ und „Ausschlussgrund“. Die Behandlung der Dublette steht
unmittelbar im Grund; alle Namen und Gründe bleiben ohne Aufklappen sichtbar.

Ravi Menon erscheint bei den betroffenen Verteilern nicht länger als
scheinbarer Ausschluss in der Tabelle. Der ämterübergreifende Wiederholungsfall
steht als eigener sichtbarer Hinweis oberhalb der tatsächlichen Ausschlüsse.
Die Werte bleiben unverändert: 68/4/64 für Kreativwirtschaft Heidelberg,
25/2/23 für Verteiler Umweltwirtschaft und 41/2/39 für Branchentreffen Kultur.

„Zurück“ und „Weiter zum Testversand“ bleiben nach der Ausschlussprüfung. Die
fachliche Prüfreihenfolge wird daher nicht verkürzt oder umgangen.

## Messung und System

Bei exakt 1024×600 maß der Empfängerblock vor der Änderung 542,7 Pixel und
danach 353,4 Pixel. Das entspricht einer Verringerung um 34,9 Prozent und
übertrifft den freigegebenen Zielwert von 30 Prozent. Die Aktionszeile rückte
um 189,3 Pixel nach oben.

Verwendet wurden ausschließlich die vorhandenen `.assignment-metrics`,
`.assignment-metric`, `.notice`, `.table-wrap` und `.data-table`. Es entstand
keine neue Komponente, kein Token und kein CSS. Eine einklappbare Pflichtprüfung,
eine interne Scrollfläche oder ein vor die Ausschlüsse gesetzter Weiter-Weg
wurden nicht eingeführt.

## Prüfung

`./system/pruefung.sh`, `git diff --check` und die JavaScript-Syntaxprüfung
liefen ohne Befund. Die statischen Prüfungen auf lokale Styles, Style-Attribute
und Farbwerte blieben jeweils null.

Im lokalen Firefox 154.0.1 über `file://` wurde die vollständige Mailingrunde
mit 45 Beobachtungen bei den exakten Inhaltsgrößen 1024×720, 1024×600,
1280×720 und 1920×1080 wiederholt. Die Mengen 25/2/23, die zweispaltige
Tabellenstruktur, der getrennte Ravi-Menon-Hinweis und das Fehlen der
redundanten Adresszeile wurden zusätzlich geprüft. Es entstand kein
horizontaler Seitenüberlauf; Noto Sans und Lucide wurden lokal geladen und es
gab keine Netzressourcen.

Die Prüfung ist auf Firefox beschränkt. Tastaturwege und die vollständige
ARIA-Semantik bleiben wie in Befund 15 ausstehend. Neue Farb- oder
Zustandskombinationen wurden nicht eingeführt.
