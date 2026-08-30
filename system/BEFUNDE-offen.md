# Offene Befunde aus der Klickprüfung

Die gemeinsame Hülle sowie die zuvor gefundenen screenspezifischen
Interaktionslücken sind umgesetzt. Für die im jüngsten Durchgang betroffenen
Veranstaltungs- und Detailansichten sind die Überläufe behoben. Tastaturwege,
Fokusfang und vollständige ARIA-Zustände bleiben nach der Konsolidierung
ausdrücklich ausstehend.

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
- **Mailings am Verteiler:** Im Verteilerdetail ist nur die Übergabe in den
  Mailing-Prozess vorhanden; eine Liste oder Historie der zugehörigen Mailings
  fehlt bewusst. Fachliche Status und Anlageberechtigung bleiben in
  [`ABDECKUNG.md`, Abschnitt 5](ABDECKUNG.md#5-fachfragen-nach-dem-testing)
  zu klären. Die gemeinsame Fixture und die Sichtbarkeitsregel sind dort als
  erledigte Umsetzung beziehungsweise beschlossene Anforderung dokumentiert.
- **Ämterübergreifende Wiederholung:** Ravi Menon bleibt in einem Verteiler der
  Wirtschaftsförderung und einem sichtbaren Verteiler des Kulturamts sowie im
  Teilnehmendenbestand geführt. Ob und auf welcher
  Rechtsgrundlage ein späteres System eine doppelte Ansprache über diese
  Amtsgrenze hinweg erkennen oder verhindern darf, bleibt nach
  [`ABDECKUNG.md`, Abschnitt 5](ABDECKUNG.md#5-fachfragen-nach-dem-testing)
  offen.

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
  trennt gefilterte Menge, aktuelle Seite und Gesamtbestand mit derselben
  Pagination wie die Kontaktliste. Statusstrecke, Belegung und Warteliste
  leiten sich aus dem vollständigen Datenbestand ab. Einzel- und
  Sammeländerungen teilen einen Rückgängig-Stapel; die Veranstaltungsübersicht
  bei 1024 Pixeln und das Kontakt-Detail bei 1280 Pixeln überlaufen nicht mehr.
- **Mailing:** Die Übersicht erschließt 25 Mailings. Offene Mailings setzen den
  gespeicherten Fünf-Schritt-Prozess fort, abgeschlossene öffnen eine reine
  Leseansicht. Vorlage, genau ein Verteiler, Inhalt, namentliche Ausschlüsse,
  tatsächliche Empfänger und Vorschau verwenden eine gemeinsame Fixture.
  Test- und Echtversand benennen die Entwurfsgrenze; ein vorhandener Beleg wird
  nur bei abgeschlossenen Fixture-Mailings gelesen und nicht neu erzeugt.
- **Globale Suche:** Nur hinterlegte Datensätze navigieren. Nicht ausgebaute
  Suchtreffer bleiben aktiv und melden Art und Name des fehlenden Datensatzes.
  Die Suche umfasst Kontakte, Institutionen, Veranstaltungen, Verteiler und
  sichtbare Mailings und gruppiert sie nach Art.
- **Gemeinsame Fixture und Rechte:** Verteiler-, Empfänger- und
  Teilnehmendenmengen sowie beide Ämterfelder werden in `shell.js` gemeinsam
  geführt. Mailing-Sichtbarkeit und Änderbarkeit werden daraus zentral
  abgeleitet; Screens entscheiden sie nicht erneut.
- **Kontrast deaktivierter Texte:** Die vorhandene Rolle
  `--color-text-disabled` verwendet #6D7073 und erreicht AA auf Karten- und
  Seitenfläche. CD Steingrau bleibt nichttextlichen Symbolen vorbehalten.
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
- **B2 – Kontaktanlage im Testmodus:** Die feste Testfixture wechselt nach dem
  sichtbaren Prüfzustand selbst zum möglichen Dublettentreffer. In der
  anschließenden Kenntnisnahme sind die bekannten Angaben wieder bearbeitbar,
  sodass die verpflichtende Kontaktart bestätigt und die begründete
  Neuanlage abgeschlossen werden kann. Die Prototypsteuerung kann den
  automatischen Übergang weiterhin gezielt übersteuern.
- **B3 – Gespeicherte Begründung:** Nach erfolgreicher begründeter Neuanlage
  verschwindet die Abschlussaktion. Die gewählte Begründung einschließlich
  eines sichtbaren Freitexts bleibt als gespeicherte Entscheidung lesbar, ist
  aber nativ deaktiviert und nicht mehr bearbeitbar. Validierungsfehler und
  die anderen K05-Zustände bleiben davon unberührt.

Tastaturweg und ARIA-Semantik der vollständigen manuellen Browserrunde sind
ausstehend. Die im Befund 11 beschriebenen Firefox-Prüfungen bei 1024, 1280
und 1920 Pixeln ersetzen diese Prüfung nicht.
