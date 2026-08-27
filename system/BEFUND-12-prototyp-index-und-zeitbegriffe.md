# Befund 12 – Prototyp-Index und Zeitbegriffe

Stand: 26. August 2026.

## Umfang und Entscheidung

R01 ist als `screens/index.html` umgesetzt und sichtbar als
Prototyp-Hilfsmittel gekennzeichnet. Die Seite ist kein regulärer
Navigationsbereich. F01–F17 entfallen ersatzlos als Screens; ihre Inhalte
bleiben in `BEFUNDE-offen.md` und Abschnitt 4 von `ABDECKUNG.md`.

„Zuletzt geöffnet“ ist die persönliche Öffnungshistorie und steht als
Einstiegszustand in der Kontaktsuche. „Zuletzt geändert“ ist der tatsächliche
Änderungszeitpunkt des Datensatzes. „Letzter fachlicher Kontakt“ bezeichnet in
der vollständigen Kontaktliste das jüngste Gespräch, Schreiben oder Treffen.
Der Arbeitsbereich zeigt unter „Änderungen in meiner Zuständigkeit“ Änderungen
anderer, die die eigene Arbeit betreffen.

## Aus dem Bestand übernommen

- gemeinsame Offline-Hülle mit Navigation, Suche, Toast und lokalen Symbolen
- Seitenkopf, Karten, Datentabelle, Statusmarken und Prototyp-Zustandsleiste
- vorhandene Kontakt- und Veranstaltungsdaten sowie alle bestehenden Ziele
- gefüllt-, lädt-, leer- und Fehlerzustände der Kontaktsuche

## Ergänzungen am System

Die Prototyp-Leiste erhielt die nicht-interaktive Textrolle
`.prototype-note`, damit die Kennzeichnung eines Hilfsmittels dieselbe
Gestalt wie die Zustandssteuerung verwenden kann, ohne eine Schaltfläche
vorzutäuschen.

Für die gruppierte Übersicht fehlte eine rollenrein benannte, beschreibende
Zielkarte. `.destination-grid`, `.destination-list` und `.destination-link`
sind deshalb als allgemeine Navigationskomponente mit Ruhe-, Hover-, Fokus-,
Aktiv- und deaktiviertem Zustand ergänzt und im Styleguide dokumentiert.

Die Hülle setzt außerhalb der regulären Hauptnavigation den Link
„Prototyp-Übersicht“. `data-screen="prototyp-index"` markiert ausschließlich
das Hilfsmittel und aktiviert keinen Fachbereich.

## Warum der Bedarf vorher nicht sichtbar war

Der bisherige Bestand bestand ausschließlich aus Fachscreens. Eine
bereichsübergreifende, erklärende Zielübersicht war weder Aufgabe noch
Datensatzliste; die aufgabenbezogene `.task-card` wäre deshalb die falsche
Rolle gewesen. Erst die Entscheidung, R01 als Hilfsmittel zurückzubringen,
machte diese kleine Navigationsrolle erforderlich.

Die Kontaktliste kannte bisher nur den fachlichen Kontaktzeitpunkt. Der
persönliche Öffnungszeitpunkt und der Änderungszeitpunkt des Datensatzes waren
im klickbaren Entwurf nicht gemeinsam sichtbar und konnten deshalb sprachlich
nicht gegeneinander geprüft werden.

## Wo eine lokale Lösung verlockend war

Naheliegend wäre ein eigenes Kartenraster nur in `index.html` oder die
Wiederverwendung der Aufgaben-Kachel gewesen. Beides hätte entweder
screenspezifisches CSS erzeugt oder Navigation fälschlich als priorisierte
Arbeitsaufgabe dargestellt. Die Ergänzung blieb deshalb im System und wird im
Styleguide gegen weitere Kontexte prüfbar gehalten.

Ebenso wäre ein vierter Block „Zuletzt geöffnet“ im Arbeitsbereich schnell
einzufügen gewesen. Er hätte die Dichtevorgabe verletzt und den Telefonweg von
der Kontaktsuche getrennt. Der persönliche Verlauf steht stattdessen am Beginn
der Kontaktsuche; der Arbeitsbereich behält drei Blöcke.

## Zustände und Rechte

- Der Index ist statisch gefüllt und enthält keine ladenden, leeren,
  fehlerhaften, geschützten oder deaktivierten Fachinhalte.
- Die Kontaktsuche startet persönlich gefüllt; ihre bestehenden Lade-, Leer-
  und Fehlerzustände bleiben erreichbar. Die fest verdrahtete Verlaufsliste
  enthält nur lesbare Kontakte und legt keine geschützten Kontaktnamen offen.
- Der Arbeitsbereich ändert nur Bedeutung und Beschriftung des vorhandenen
  Blocks; Rechte und Handlungen bleiben unverändert.

## Prüfung und Tragfähigkeit

Die drei Screenprüfungen auf `<style>`, `style=` und Farbwerte ergeben jeweils
null Treffer. Index, Kontaktsuche und Arbeitsbereich wurden direkt als
`file://`-Dateien ohne Netz bei 1024, 1280 und 1920 Pixel Breite in Firefox
geöffnet; die lokale Noto Sans und die lokalen Lucide-Symbole erscheinen. Die
zehn Indexziele verweisen auf vorhandene Dateien, und die zentrale Hülle stellt
auf jedem Fachscreen den Rückweg zum Index bereit. Tabellenkopf und vier
Datenzellen des persönlichen Kontakteinstiegs stimmen überein.

Die neuen Bedienelemente besitzen einen vollständigen Reaktionsweg: zehn echte
Indexlinks, ein echter Detailpfad für Sabine Keller, drei ausdrücklich als
nicht hinterlegt gemeldete Kontaktdetails und die vorhandene Zustandssteuerung.
Die Fokusdarstellung stammt aus den bestehenden globalen beziehungsweise neu
dokumentierten Komponentenzuständen.

Die Ergänzung ist tragfähig: Der Index bleibt klar außerhalb der
Fachanwendung, die Kontaktsuche gewinnt einen persönlichen Einstieg ohne einen
zweiten Arbeitsbereichsblock, und die vier Zeitbegriffe benennen unterschiedliche
fachliche oder persönliche Ereignisse unmittelbar am jeweiligen Wert.
