# Offene Befunde aus der Klickprüfung

Die gemeinsame Hülle sowie die zuvor gefundenen screenspezifischen
Interaktionslücken sind umgesetzt. Für die im jüngsten Durchgang betroffenen
Veranstaltungs- und Detailansichten sind die Überläufe behoben. Offen bleiben
die vollständige manuelle Browserrunde und der bekannte Kontrastgrenzfall.

## Fachfragen

Die Fachfragen und ihre Umstufung werden federführend in
[`ABDECKUNG.md`, Abschnitt 5](ABDECKUNG.md#5-fachfragen-nach-dem-testing)
geführt. Der frühere Variantenvergleich für mögliche Dubletten ist mit dem
Wegfall von Variante B nicht mehr verfügbar; die Frage bleibt dort offen und
wird im Test über die Aufgabenstellung adressiert.

- **Teilnehmendenstatus:** Das Vokabular, erlaubte Übergänge und die
  Einreihung einer neu auf Warteliste gesetzten Anmeldung sind nicht
  entschieden. Der Entwurf verwendet ausschließlich bestätigt, offen,
  Warteliste und storniert; der vorhandene Eingang bestimmt nur die sichtbare
  Testreihenfolge.
- **Kapazitätsüberschreitung:** Der Entwurf warnt dauerhaft an der Belegung und
  sperrt nicht. Ob das Fachamt darüber hinaus informiert, bestätigt oder eine
  andere Regel benötigt, wird im Test erhoben.

## Offener Umsetzungsbefund

- **Persönliche Öffnungshistorie:** „Zuletzt geöffnet“ ist nutzerbezogen und
  gehört nicht zum CRM-Fachdatenmodell. Eine spätere Umsetzung muss diese
  persönliche Historie deshalb außerhalb der fachlichen Datensätze
  bereitstellen; Speicherort, Aufbewahrungsdauer und Löschung sind noch
  festzulegen.

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
- **Teilnehmendenstatus und Überläufe:** Die eingebettete Teilnehmendenliste
  trennt gefiltert, geladen und gesamt. Statusstrecke, Belegung und Warteliste
  leiten sich aus dem vollständigen Datenbestand ab. Einzel- und
  Sammeländerungen teilen einen Rückgängig-Stapel; die Veranstaltungsübersicht
  bei 1024 Pixeln und das Kontakt-Detail bei 1280 Pixeln überlaufen nicht mehr.
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

Tastaturweg und ARIA-Semantik der vollständigen manuellen Browserrunde sind
ausstehend. Die im Befund 11 beschriebenen Firefox-Prüfungen bei 1024, 1280
und 1920 Pixeln ersetzen diese Prüfung nicht.
