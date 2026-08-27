# Befund 10 – Such- und Filterumsetzung

Stand: 27. August 2026. Bezug: Abschnitt 4 „Vor dem Testing“, Punkt 1 in
`ABDECKUNG.md`; Bestandsaufnahme in Befund 09.

## Umfang und Entscheidungen

Umgesetzt wurden nur die freigegebenen Punkte: der Zuordnungsdialog, die drei
zuvor gekürzten Listen und die Filterbereinigung der Übersichten. Der
eingebettete Listenvertrag für Teilnehmendenstatus bleibt ausdrücklich der
nächste Bauabschnitt.

- Der Zuordnungsdialog verwendet weiter `work-dialog`, `list-controls`,
  `data-table`, `list-pagination`, Statusmarken und die Auswahlverträge aus
  `shell.js`. Die Tabellenhülle erzeugt keine eigene vertikale Scrollfläche;
  der Tabellenkopf bleibt im Dialog unter dessen Kopf sichtbar.
- Der feste Verteiler steht im Dialogtitel, seine Art als Statusmarke daneben.
  Bei der Liste steht „205 Treffer“; der Auswahlzustand steht getrennt als
  „0 ausgewählt“. Erst die feste Zusammenfassung am Fuß nennt hinzufügbar und
  bereits enthalten. Damit werden Treffer- und Auswahlmenge nicht mehr in
  einer Aufzählung vermischt.
- `.dialog-filter-toggle` ist eine allgemeine Dialogvariante der vorhandenen
  kompakten Schaltfläche. Sie öffnet den zunächst geschlossenen
  Filterbereich, nennt dessen aktive Zahl und liegt in `shell.js`; sie ist
  nicht auf diesen Dialog beschränkt. Übersichtsseiten behalten offene Filter.
- Im Dialog bleibt Zuständigkeit ein mehrwertiges Ämter-Auswahlfeld. Das gilt
  ebenso für Kontakt-, Veranstaltungs- und Verteilerübersicht; die drei
  Fixture-Ämter begründen keine Chipgruppe. Kontaktart, Verteilerart und
  Zeitraum bleiben ihre begrenzten Chipgruppen. Die doppelte
  „Meine-Zuständigkeit“-Einschränkung ist aus Kontaktübersicht und Dialog
  entfernt; „Rückmeldung offen“ bleibt nur auf der Kontaktübersicht. Neu im
  Dialog ist „Nur hinzufügbare“.
- Kontakterlaubnis und Mitgliedschaft stehen in zwei Spalten. Organisationen
  und E-Mails werden auf eine Zeile gekürzt; die vollständige E-Mail bleibt
  sichtbar über den nativen Titelhinweis wiederherstellbar. Das macht die
  E-Mail weiterhin zum Unterscheidungsmerkmal gleichnamiger Personen.

## Vollständige Wege in den drei gekürzten Listen

- Die Teilnehmendenliste enthält nun alle 53 dargestellten Anmeldungen. Ihre
  Statusstrecke und Statussummen werden aus den Tabellenzeilen berechnet:
  38 bestätigt, 3 offen, 10 Warteliste und 2 storniert.
- Die Warteliste wird aus denselben zehn Tabellenzeilen gebildet und vollständig
  im bestehenden Aufklappbereich gezeigt. Die Reihenfolge folgt dem bereits
  sichtbaren Eingang.
- Der Arbeitsbereich behält drei aktuelle Änderungen und legt die weiteren
  neun in einem nativen Aufklappbereich offen. Damit sind alle zwölf sichtbar
  wiederherstellbar, ohne einer Detailseite einen langen Listenvertrag
  vorwegzunehmen.

## Messung und Prüfung

Geprüft wurde bewusst nur mit Firefox. Das ist eine Einschränkung, keine
browserübergreifende Aussage. Beim Zuordnungsdialog waren ohne vertikales
Scrollen sichtbar:

| Viewport | Vollständige Datenzeilen |
|---|---:|
| 1024 × 640 | 4 |
| 1024 × 720 | 5 |

1024 × 640 ergänzt die Breitenprüfung, weil bei einem Arbeitsplatz mit
1024 × 768 Pixeln nach Fensterrahmen und Browserleiste nur etwa diese
Inhaltshöhe übrigbleiben kann. Das frühere Ziel von mindestens sechs Zeilen
bei 1024 × 720 wurde nicht erreicht; die tatsächlichen fünf Zeilen sind
deshalb das Ergebnis dieses Durchgangs und kein stillschweigend erfüllter
Zielwert. Der Tabellenkopf blieb beim Scrollen sichtbar; im Dialog gibt es
keine zweite vertikale Tabellen-Scrollfläche. Bei 1024 Pixel Breite trat in
den offenen Übersichtsfiltergruppen kein neuer horizontaler Überlauf auf.

`./system/pruefung.sh` lief erfolgreich. Die manuelle Firefox-Runde für
Tastaturweg, ARIA und Kontrast bleibt, wie in `BEFUNDE-offen.md` geführt,
ausstehend. Die bekannten Überläufe von `veranstaltungen.html` bei 1024 Pixeln
und `kontakt-detail.html` bei 1280 Pixeln waren nicht Teil dieses Abschnitts.

## Systemergänzung und Tragfähigkeit

Neu ist nur die komponentenweite Klasse `.dialog-filter-toggle` einschließlich
geschlossener und gesetzter Zustände im Styleguide. Die kompakte
Zuordnungstabelle erhält ihre Breiten- und Sticky-Regeln ausschließlich im
System, nicht im Screen. Neue Tokens waren nicht erforderlich; die
Tokenerwartung von null wurde eingehalten.

Der vorherige Befund zur Zuordnung behauptete bereits eine vertikale
Scrollfläche. Das sichtbare Verhalten widersprach dem wegen der zusätzlichen
Tabellenscrollfläche. Korrigiert wurde das Verhalten, nicht der Befund: Eine
Scrollfläche mit klebendem Tabellenkopf bewahrt bei 25 Zeilen den Kontext und
vermeidet verschachteltes vertikales Scrollen.

Die Befundreihe wurde zugleich chronologisch berichtigt: Die frühere Nummer 12
ist jetzt Befund 08, die frühere Nummer 13 Befund 09. Es existieren keine
Verweise auf die alten Nummern in `ABDECKUNG.md`, `BEFUNDE-offen.md` oder
`README.md`.
