# Offene Befunde aus der Klickprüfung

Geprüft wurden die bisherigen Fachscreens, die drei Verteiler-Screens und eine
frische Kopie von `screens/_vorlage.html`. Die gemeinsame Hülle sowie die zuvor
gefundenen screenspezifischen Interaktionslücken sind umgesetzt. Offen bleiben
fachliche Entscheidungen, zwei kleine Bestandsüberläufe und der bekannte
Kontrastgrenzfall.

## Offene Fachfragen

1. **Veranstaltung / Absagen und Löschen:** Offen ist, was beim Löschen oder
   Absagen einer Veranstaltung mit Teilnahmen, Anmeldelink und bereits
   versendeten Bestätigungen geschehen soll.
2. **Veranstaltung / Warteliste und Platzangebot:** Die Schaltflächen benennen
   die im Entwurf nicht ausgeführte Handlung. Regeln, Frist und Nachricht des
   Platzangebots sind fachlich weiterhin nicht festgelegt.
3. **Managed-Verteiler / ändernde Stelle:** Das Sperr-Muster muss benennen, wer
   eine geschützte Definition ändern kann. Der Entwurf verwendet dafür die
   neutrale Rollenbezeichnung „Zentrale CRM-Administration“. Die verbindliche
   organisatorische Bezeichnung und der zugehörige Kontaktweg sind mit den
   Fachämtern noch festzulegen.
4. **Teilnehmendenliste / Statussummen:** Die Statusstrecke nennt acht Personen
   auf der Warteliste, die fest verdrahtete Tabelle enthält zehn sichtbare
   Wartelistenzeilen. Filter und Mehrfachauswahl bilden weiterhin den
   tatsächlichen Tabellenbestand ab. Welche Zahl fachlich gelten soll, ist zu
   klären; der Verteiler-Bauabschnitt ändert diese Bestandsdaten nicht.
5. **Mailingübersicht / Status und Sichtbarkeit:** Der allgemeine Listenvertrag
   trägt beliebige ausgeschriebene Statuswerte, Ämterfilter und geschützte
   Zustände. Welche Statuswerte fachlich gelten, welche Mailings zwischen
   Ämtern sichtbar sind und wer Mailings anlegen darf, ist vor einem
   Übersichts-Screen festzulegen.
6. **Mailingübersicht / Mehrfachauswahl:** Auswahlspalte, seitenweise
   Sammelauswahl und seitenübergreifender Auswahlzähler sind systemisch
   vorhanden. Ob eine Mailingübersicht eine fachliche Mehrfachhandlung braucht,
   ist nicht belegt; deshalb wird die Auswahl dort nicht vorweggenommen.
7. **Verteilerzuordnung / Kontakterlaubnis:** Offen ist, ob ein Kontakt ohne
   E-Mail-Kontakterlaubnis einem Verteiler hinzugefügt werden darf. Der heutige
   Entwurf zeigt die Kontakterlaubnis in der Trefferzeile, lässt die Zuordnung
   aber zu; Ausschlüsse greifen wie bisher erst beim Versand. Eine fachliche
   Sperre wird nicht vorweggenommen.
8. **Verteilerzuordnung / fremde Verteiler:** Nicht festgelegt ist, wer
   Mitgliedschaften in Verteilern anderer Ämter bearbeiten darf und welche
   Stelle eine fehlende Berechtigung begründen müsste. Der Entwurf bildet nur
   den zugänglichen Arbeitsfall ab und erfindet keine zusätzliche Rolle.
9. **Verteilerzuordnung / Mengengrenze:** Eine Obergrenze oder ein besonderes
   Bestätigungsverfahren für sehr große Zuordnungen ist fachlich nicht
   festgelegt. Der Entwurf beziffert deshalb jede Menge unmittelbar vor der
   Ausführung, setzt aber keine unbelegte Grenze.

## Offener Umsetzungsbefund

- **Persönliche Öffnungshistorie:** „Zuletzt geöffnet“ ist nutzerbezogen und
  gehört nicht zum CRM-Fachdatenmodell. Eine spätere Umsetzung muss diese
  persönliche Historie deshalb außerhalb der fachlichen Datensätze
  bereitstellen; Speicherort, Aufbewahrungsdauer und Löschung sind noch
  festzulegen.

## Offener Technikbefund

- **Horizontale Bestandsüberläufe:** Im lokalen Firefox überschreitet die
  Veranstaltungsübersicht bei einem 1024-Pixel-Fenster die innere Viewportbreite
  um rund 22 Pixel; das Kontakt-Detail überschreitet sie bei 1280 Pixeln um rund
  17 Pixel. Der pixelgenaue Vergleich der alten und neuen Klassenaliase ist bei
  1024, 1280 und 1920 Pixeln identisch; die Konsolidierungsrunde hat diese
  Geometrie daher nicht verursacht und ändert sie nicht nebenbei.

## Offener Barrierefreiheitsbefund

- **CD Steingrau auf Weiß:** `#75787B` erreicht auf `#FFFFFF` nur 4,44:1 und
  liegt damit knapp unter 4,5:1. Die Farbe bleibt auf deaktivierte Inhalte und
  nichttextliche Symbole begrenzt; informativer Text verwendet die dunklere
  Rolle `--color-text-muted`. Ob deaktivierter Text damit ausreichend ist,
  bleibt zu klären.

## Behobene Umsetzungsbefunde

- **Schrift / Offline-Betrieb:** Noto Sans liegt in den verwendeten Schnitten
  400, 500, 600, 700 und 800 lokal als WOFF2 vor und wird zentral aus
  `base.css` geladen. Vorlage, Styleguide und alle Fachscreens besitzen keine
  externen Schriftverweise mehr; die Verteiler-Screens verwenden damit
  dieselbe Schrift wie der Bestand.
- **Kontakte:** Beide Exporte und „Kontakt anlegen“ benennen die nicht
  ausgeführte Handlung. Kontaktart und Umfang sind getrennte Achsen; Suche,
  beide Achsen und Amtsauswahl wirken gemeinsam. Ämteränderungen gelten
  unmittelbar. Die sichtbare Startauswahl und der Reset umfassen alle drei
  Ämter.
- **Kontaktvorschau:** Zeilenklick, Vorschauknopf, Enter und Leertaste verwenden
  gemeinsam `selectContact(row)` und aktualisieren Seitenvorschau sowie
  responsive Detailzeile. Nur Sabine Keller besitzt eine vollständige
  Detailseite; andere Kontakte bleiben ausgewählt und melden den nicht
  hinterlegten Datensatz, ohne zu navigieren.
- **Kontakt-Detail:** „Ältere Einträge anzeigen“ blendet die zwei bereits in der
  Gesamtzahl enthaltenen Verlaufseinträge ein und bestätigt den Zustand am
  deaktivierten Schalter.
- **Veranstaltungen:** Das Anschreiben ausgewählter Teilnehmender und jedes
  Platzangebot benennen die nicht ausgeführte Handlung. Nur der
  „Branchendialog Kreativwirtschaft“ besitzt eine Detailseite; andere Ziele
  bleiben sichtbar und melden den nicht hinterlegten Datensatz.
- **Mailing:** Die Verteilerwahl berechnet eindeutige, ausgeschlossene und
  tatsächliche Empfänger neu und trägt die Werte bis zum Versandbeleg. Die
  Vorschau zeigt den tatsächlichen Beispielbestand „x von 5“; der Problemsprung
  durchläuft zyklisch alle vier betroffenen Beispiele. Versandbeleg und
  persönliche Anmeldung benennen die nicht ausgeführte Handlung.
- **Globale Suche:** Nur hinterlegte Datensätze navigieren. Nicht ausgebaute
  Suchtreffer bleiben aktiv und melden Art und Name des fehlenden Datensatzes.
- **Belegung:** Klasse, sichtbare Textangabe und native `meter`-Semantik sind
  für verfügbar, knapp und ausgebucht angeglichen; die Bedeutung bleibt
  ausgeschrieben und ist nicht allein farblich codiert.
- **Veranstaltung anlegen:** Die Entwurfsübersicht reagiert live auf Titel,
  Termin, Uhrzeit, Ort, Kapazität und verantwortliches Amt.

## Behobener Testblocker

- **B1 – Kontaktliste und Kontaktvorschau:** Der fehlende gemeinsame
  Auswahlpfad und die fest an Sabine Keller gekoppelte responsive Detailzeile
  blockieren die Klick- und Tastaturprüfung nicht mehr. Auswahl, Vorschau und
  Detailziel werden aus der jeweils aktiven Zeile abgeleitet.

Die vollständige erneute Klick-, Navigations- und Tastaturprüfung aller Screens
bei 1024, 1280 und 1920 Pixeln wurde in der Konsolidierungsrunde durchgeführt.
