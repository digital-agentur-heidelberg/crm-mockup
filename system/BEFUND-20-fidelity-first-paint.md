# Befund 20 – Fidelity-Auswahl vor dem ersten Paint

**Datum:** 3. September 2026
**Anlass:** kurzer Wechsel von Full-Fi zu Low-Fi beim Seitenwechsel

## Beobachtung und Ursache

Die in Befund 19 eingeführte Low-Fi-Datei wurde am Anfang des mit `defer`
geladenen `shell.js` als neues Stylesheet an den Dokumentkopf angehängt. Zu
diesem Zeitpunkt waren `tokens.css`, `base.css` und `components.css` bereits
regulär geladen. Der Browser konnte den neuen Screen deshalb zunächst mit den
Full-Fi-Tokenwerten darstellen und die gleichen Variablen erst danach durch
`wireframe.css` überschreiben. Zusätzlich erzeugt `shell.js` anschließend die
gemeinsame Hülle; Rechte, Fixtures oder screenbezogene Zustände waren an dem
Farbwechsel nicht beteiligt.

## Korrektur und maßgebliche Stelle

Die Darstellungsfassung wird nun ausschließlich in `fidelity.js` festgelegt.
Das kleine klassische Skript läuft synchron vor den Stylesheets und setzt
`data-fidelity` am Dokumentwurzelelement. Alle Screens, die Vorlage und der
Styleguide laden danach `tokens.css`, `base.css`, `components.css` und
`wireframe.css` als reguläre Stylesheets. Die alternativen Tokenwerte in
`wireframe.css` gelten nur für `:root[data-fidelity="low"]`.

Damit sind Auswahl und endgültige CSS-Kaskade vor dem ersten sichtbaren
Rendern bekannt. `shell.js` lädt kein Stylesheet mehr dynamisch und ist wieder
ausschließlich für Hülle, gemeinsame Daten und Interaktionen zuständig. Bei
fehlender JavaScript-Ausführung bleibt das Fidelity-Attribut aus; die
abgenommene Full-Fi-Fassung ist damit der Rückfall.

Die verbindliche Kopf-Reihenfolge und der zentrale Umschaltpunkt stehen in
`README.md`; `ABDECKUNG.md` beschreibt den aktuellen Umsetzungsstand. Befund 19
bleibt als chronologischer Bericht der zuerst gebauten Lösung erhalten und
verweist auf diese Korrektur.

## Rollen, Zustände und Tragfähigkeit

Die Rollenprüfung ergab keinen Bedarf für neue oder umbenannte
Komponentenklassen. Inhalt vorhanden, lädt, fachlich leer, technisch
fehlgeschlagen, teilweise oder vollständig geschützt und deaktiviert sowie
die zugehörigen Sicht-, Lese- und Bearbeitungsrechte bleiben unverändert. Die
Änderung betrifft ausschließlich den Ladezeitpunkt vorhandener Tokenwerte.

Eine Ergänzung nur in einzelnen Screens wäre lokal verlockend gewesen, hätte
aber Vorlage, Styleguide und spätere Screens auseinanderlaufen lassen. Die
gemeinsame Konfigurationsdatei und die statisch geprüfte Kopf-Reihenfolge sind
für den dateibasierten Prototyp tragfähig: Die Umschaltung bleibt zentral,
während die browserseitige Kaskade nicht mehr von einem nachträglich geladenen
Stylesheet abhängt.

## Prüfung

`pruefung.sh` prüft nun für alle 14 HTML-Dateien unter `screens/` einschließlich
Vorlage sowie separat für den Styleguide die vollständige Reihenfolge aus
Fidelity-Konfiguration, vier Stylesheets, lokaler Symbolbibliothek und
`shell.js`. Der Abschlusslauf meldete keine Abweichung. `node --check` für
`fidelity.js` und `shell.js` sowie `git diff --check` blieben ebenfalls ohne
Befund. Die drei Screenprüfungen auf `<style>`, `style=` und rohe Farbwerte
ergaben jeweils null Treffer.

Firefox 155 lud die 13 nutzbaren Screens direkt unter `file://` bei 1024, 1280
und 1920 Pixel Breite, insgesamt 39 Kombinationen. Jede Kombination besaß
bereits `data-fidelity="low"`, führte `wireframe.css` als viertes reguläres
Stylesheet und verwendete `--color-brand: #3b5362` sowie
`--radius-card: 2px`. Die gemeinsame Hülle, der aktive Navigationseintrag und
die lokale Noto Sans waren vorhanden; horizontaler Dokumentüberlauf trat
nicht auf. Die fünf zentralen Navigationswege wurden tatsächlich angeklickt
und führten jeweils zum erwarteten aktiven Bereich.

Für die Gegenprobe wurde die zentrale Konstante vorübergehend auf `full`
gestellt. Firefox verwendete daraufhin trotz weiterhin geladener
`wireframe.css` die Full-Fi-Werte `--color-brand: #a50050` und
`--radius-card: 14px`. Anschließend wurde die Konstante wieder auf `low`
gestellt.

Die vollständige Schaltflächenrunde aus Befund 19 wurde nicht wiederholt, weil
keine Interaktionslogik geändert wurde; Hüllenaufbau und Navigation wurden in
der Browsermatrix erneut geprüft. Der Tastaturweg wurde mit ausdrücklicher
Freigabe des Auftraggebers für diesen Korrekturdurchgang übersprungen. Damit
enthält dieser Befund keinen erneuten vollständigen Nachweis aller
Bedienelemente oder der Tastaturbedienung.
