# Befund 18 – Konsolidierung für den explorativen Usertest

Stand: 30. August 2026.

## Umfang und maßgebliche Fakten

Der Durchgang verbindet vier zuvor getrennt gepflegte Bereiche: die
explorative Testsitzung, eine gemeinsame Personen- und Verteilerfixture, die
zentrale Ableitung von Mailingrechten sowie die geklärten Kontaktarten und den
Textkontrast deaktivierter Inhalte. Maßgeblich für fachliche Mengen,
Rechtekombinationen und offene Fragen bleibt `ABDECKUNG.md`.

`CrmShell.getPrototypeFixture()` ersetzt die zuvor nur mailingbezogene
Fixture. Der Verteiler `Kreativwirtschaft Heidelberg` und die Veranstaltung
`Branchendialog Kreativwirtschaft` verwenden dieselben 53 Personen. Die
Teilnehmendenstatus sind die Antworten dieser eingeladenen Personen. Daraus
werden die vier im Test verwendeten Verteilermengen abgeleitet:

| Verteiler | Mitglieder | ausgeschlossen | tatsächliche Empfänger |
|---|---:|---:|---:|
| Kreativwirtschaft Heidelberg | 53 | 4 | 49 |
| Verteiler Umweltwirtschaft | 25 | 2 | 23 |
| Heidelberger Unternehmen · aktiv | 28 | 2 | 26 |
| Branchentreffen Kultur | 41 | 2 | 39 |

Jeder Verteiler führt sein pflegendes Amt, jedes Mailing sein eigenes
zuständiges Amt. Sichtbarkeit des Mailings verlangt Zugriff auf beide Objekte;
Mailingbearbeitung und Verteilerwechsel werden getrennt aus beiden Ämtern
abgeleitet. Übersicht, Prozess und Leseansicht lesen nur die zentral
abgeleiteten Eigenschaften `visible`, `editable` und
`distributionEditable`. Screens treffen keine zusätzliche Rechteentscheidung.

Die Kontaktarten sind auf Person und Institution festgelegt. Eine Person kann
Mitglied mehrerer Institutionen sein; Firma und Verein sind Formen einer
Institution und keine weiteren Kontaktarten. Die konkrete Benennung von Rollen
und Verbindungen bleibt eine Fachfrage für den Test. Suche, Kontaktbeispiel und
der aktuelle Abdeckungsstand verwenden denselben Stand; `input/` bleibt die
unveränderte fachliche Ausgangsquelle.

## Explorative Testsitzung

`#test` am Arbeitsbereich aktiviert sitzungsbezogen einen Modus ohne
Prototyp-Zustandsleisten und ohne Rückweg zum Prototyp-Index. `#review` am
Index beendet ihn. Nicht hinterlegte Datensätze und Handlungen bleiben
bedienbar, melden ihre Entwurfsgrenze und werden für die Testleitung optional
im selben Tab und derselben Sitzung gezählt. Der Zähler ist ein
Prototyp-Hilfsmittel und kein persistentes Testprotokoll.

Die Hüllensuche gruppiert Personen, Institutionen, Veranstaltungen, Verteiler
und sichtbare Mailings. Nur tatsächlich hinterlegte Detailziele navigieren;
andere Treffer bleiben am Ausgangsbildschirm und verwenden die vorhandene
Prototypmeldung.

## Bestand, Ergänzungen und lokale Versuchungen

Aus dem Systembestand stammen Hülle, Suche, Toast, Prototypmeldung,
Zustandsumschaltung, Karten, Schaltflächen, Status, Tabellen,
Zuordnungsdialoge und alle Formularzustände. Für den Testmodus und seine
Auswertung war keine neue visuelle Komponente erforderlich. `sessionStorage`
ergänzt ausschließlich die sitzungsbezogene Hüllenlogik.

Neu ist der bereichsübergreifende Fixture-Vertrag. Er war früher nicht
vorgesehen, weil Verteiler-, Veranstaltungs- und Mailingdaten in getrennten
Bauabschnitten entstanden. Parallel gepflegte Mitglieder-, Empfänger- und
Rechtezahlen hätten die bereits beobachteten Abweichungen fortgesetzt; sie
wurden deshalb nicht lokal in den Screens korrigiert. Ebenso wurden weder die
Prototypsteuerung je Screen ausgeblendet noch Rechte je Mailingansicht erneut
formuliert.

Der vorhandene Token `--color-text-disabled` verwendet nun `#6D7073`. Er
erreicht 4,98:1 auf Weiß und 4,56:1 auf der Seitenfläche. CD Steingrau bleibt
nichttextlichen Symbolen vorbehalten. Ein lokaler Farbwert in einzelnen
Komponenten oder Screens wurde nicht eingeführt; Styleguide und offene Befunde
sind auf den gemeinsamen Rollenwert angeglichen.

## Rollen-, Zustands- und Rechteprüfung

| Prüffall | Umsetzung im konsolidierten Bestand |
|---|---|
| Inhalt vorhanden | Personen, Mitgliedschaften, Ausschlüsse und Empfängermengen stammen aus derselben Fixture-Kopie. |
| Lädt, fachlich leer, technisch fehlgeschlagen | Vorhandene Listen- und Prozesszustände bleiben unverändert; die Konsolidierung ersetzt nur ihre Datengrundlage. |
| Teilweise geschützt | Sichtbare fremde Verteiler und Mailings bleiben lesbar; Bearbeitung und Verteilerwechsel werden getrennt begründet gesperrt. |
| Vollständig geschützt | Ein Mailing ohne sichtbaren Verteiler wird vollständig ausgeblendet; der direkte Aufruf legt weder Mailing- noch Verteilerangaben offen. |
| Deaktiviert | Native deaktivierte Bedienelemente verwenden den gemeinsamen AA-konformen Texttoken und bleiben zusätzlich über Fläche, Rand und Mauszeiger unterscheidbar. |

Die Testpersona gehört zur Wirtschaftsförderung. Sichtbare fremde Verteiler
bleiben eine ausdrücklich dokumentierte Testannahme; sie wird nicht mit der
beschlossenen Mailingregel vermischt.

## Prüfung

`system/pruefung.sh`, `git diff --check` und `node --check system/shell.js`
liefen ohne Befund. Die drei Screenprüfungen auf `<style>`, `style=` und
Farbwerte ergaben für alle geänderten Screens null Treffer. Es wurden keine
Module, `import`-Anweisungen, `fetch`-Aufrufe oder externen Laufzeitadressen
eingeführt.

Firefox 154.0.1 öffnete elf geänderte Screen- und Prozessausprägungen über
`file://` bei 1024, 1280 und 1920 Pixel Breite. Alle 33 Kombinationen besaßen
den Hauptinhalt, luden Noto Sans lokal, enthielten keine externe
Ressourcenadresse und erzeugten keinen horizontalen Dokumentüberlauf. Im
Testmodus waren weder Zustandsknöpfe noch Indexlink vorhanden; nach `#review`
erschienen auf der Kontaktliste wieder vier Zustandsknöpfe und der Indexlink.

Die Fixture lieferte 53 Personen, 25 sichtbare Mailings, acht bearbeitbare
Mailings und sieben Mailings mit bearbeitbarem Verteiler. Im gerenderten
Bestand erschienen 53 Veranstaltungszeilen, 53 Mitglieder des
Arbeitsverteilers, 28 Mitglieder des Managed-Verteilers und 25 Mailingzeilen.
Die vier Verteilermengen und ihre zentral abgeleiteten Sichtbarkeits- und
Bearbeitbarkeitswerte entsprachen der Tabelle dieses Befunds.

Der Lauf war automatisiert und auf Firefox beschränkt. Die vollständige
manuelle Betätigung aller Schaltflächen und Navigationswege, ein Tastaturweg
durch den gesamten konsolidierten Bereich sowie Fokusfang und vollständige
ARIA-Prüfung bleiben ausstehend.
