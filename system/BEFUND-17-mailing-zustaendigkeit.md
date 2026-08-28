# Befund 17 – Eigene Zuständigkeit des Mailings

Stand: 28. August 2026.

## Umfang und beobachtetes Verhalten

Jeder der 25 Mailing-Datensätze führt jetzt ein eigenes `office`. Die
Mailingübersicht liest daraus die Spalte und den Filter „Zuständiges Amt“ sowie
den Zugriffszustand. Der Ämterfilter verwendet wie Verteiler-, Veranstaltungs-
und Kontaktübersicht den vorhandenen Auswahlknopf „Ämter: alle“ mit
Mehrfachauswahl; bei eingeschränkter Auswahl nennt er deren Anzahl. In Prozess
und Leseansicht bestimmt dieselbe Angabe den
sichtbaren Zuständigkeitskontext, den Schutzgrund und die Absenderzeile der
Vorschau. Der Verteiler liefert weiterhin Name, Art, Mitglieder,
Ausschlussgründe und tatsächliche Empfängermenge, aber keine
Mailing-Zuständigkeit mehr.

Das pflegende Amt des Verteilers bleibt als getrennte Verteilerangabe
`managingOffice` erhalten. Es wird in Schritt 2 ausdrücklich als „Gepflegt
durch“ gezeigt und trägt weiterhin die Testannahme zur Auswahl fremder
Verteiler. Damit sind die beiden Rechteachsen sichtbar getrennt:

- ein Mailing der Wirtschaftsförderung ist für die Testpersona les- und
  bearbeitbar;
- ein Mailing des Kulturamts bleibt lesbar und für die Bearbeitung gesperrt;
- ein von einem fremden Amt gepflegter Verteiler bleibt unabhängig davon ein
  gesperrtes Auswahlziel;
- abgeschlossene Mailings bleiben reine Leseansichten.

Neue Mailings erhalten im Entwurf die Wirtschaftsförderung als zuständiges Amt
der Testpersona. Der Wert bleibt oberhalb des Prozesses und in der
Versandzusammenfassung sichtbar, auch wenn der Verteiler aus dem
Verteilerdetail festgelegt wurde. Die Vorschau verwendet „Ihre
Wirtschaftsförderung“ beziehungsweise „Ihr Kulturamt“ als sprachlich passende
Absenderzeile.

## System und Tragfähigkeit

Verwendet wurden ausschließlich die vorhandenen `.assignment-context`,
`.summary-list`, `.protected-section`, `.assignment-target` und
`.preview-card`. Es entstand keine neue Komponente, kein Token und kein CSS.
Die maßgebliche fachliche Trennung steht in `ABDECKUNG.md`; `README.md`
dokumentiert den Fixture-Vertrag. Die chronologischen Befunde 15 und 16 bleiben
als Beobachtungen ihrer jeweiligen Bauabschnitte unverändert.

## Prüfung

`./system/pruefung.sh`, `git diff --check` sowie die JavaScript-Syntaxprüfung
von Hülle, Übersicht und Prozess liefen ohne Befund. Die statischen Prüfungen
auf `<style>`, `style=` und Farbwerte ergaben jeweils null. In den beiden
Mailing-Screens gibt es keine Ableitung `distribution.office` mehr; alle 25
Mailing-Fixtures besitzen ein eigenes Amt und alle vier mailingbezogenen
Verteiler ein getrenntes `managingOffice`.

Firefox 154.0.1 lud Übersicht, eigenen Prozess, fremde Leseansicht und den
Einstieg aus dem Verteilerdetail über `file://` bei 1024, 1280 und 1920 Pixel
Breite. Es entstand kein horizontaler Seitenüberlauf. Noto Sans wurde lokal
geladen; die Ressourcenliste enthielt keine Netzadresse. Die Übersicht zeigte
sechs Datenzellen zu sechs Kopfzellen und filterte 16 Mailings der
Wirtschaftsförderung sowie 9 des Kulturamts. Der neue Auswahlknopf zeigte bei
beiden gesetzten Ämtern „Ämter: alle“, bei einer Auswahl „Ämter · 1 gewählt“
und bei keiner Auswahl den vorhandenen Leerzustand; „Filter zurücksetzen“
stellte beide Ämter und alle 25 Mailings wieder her.

Gefüllt-, Lade-, Leer- und Fehlerzustand, Prozessfilter, Ämterfilter,
Rücksetz- und Wiederholungsweg, alle fünf Prozessschritte, festgelegter
Verteiler, Vorschauhandlungen, Test-Überspringen und Versandgrenze reagierten.
Der Tastaturweg erreichte Hülle und Mailingprozess mit sichtbarem 3-Pixel-Fokus.
Eine bildbasierte Sichtprüfung und die vollständige manuelle ARIA-Prüfung des
Gesamtbestands bleiben wie in `BEFUNDE-offen.md` dokumentiert ausstehend.
