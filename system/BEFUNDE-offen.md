# Offene Befunde aus der Klickprüfung

Geprüft wurden die bisherigen Fachscreens, die drei Verteiler-Screens und eine
frische Kopie von `screens/_vorlage.html`. Die gemeinsame Hülle sowie die zuvor
gefundenen screenspezifischen Interaktionslücken sind umgesetzt. Offen bleiben
fachliche Entscheidungen, ein Bestandswiderspruch zur Offline-Regel und der
bekannte Kontrastgrenzfall.

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

## Offener Technikbefund

- **Externe Schriftadressen im Bestand:** `_vorlage.html`, der Styleguide und
  die bisherigen Fachscreens binden Google Fonts ein, obwohl alle Dateien ohne
  Internet und ohne externe Adressen laufen müssen. Die drei neuen
  Verteiler-Screens übernehmen diese Verweise nicht und funktionieren mit der
  im Schrifttoken vorgesehenen lokalen Ersatzschrift. Eine systemweite
  Bereinigung oder eine lokal abgelegte Noto-Sans-Datei wäre ein eigener
  Bauabschnitt, weil sie sämtliche Bestandsscreens berührt.

## Offener Barrierefreiheitsbefund

- **CD Steingrau auf Weiß:** `#75787B` erreicht auf `#FFFFFF` nur 4,44:1 und
  liegt damit knapp unter 4,5:1. Die Farbe bleibt auf deaktivierte Inhalte und
  nichttextliche Symbole begrenzt; informativer Text verwendet die dunklere
  Rolle `--color-text-muted`. Ob deaktivierter Text damit ausreichend ist,
  bleibt zu klären.

## Behobene Umsetzungsbefunde

- **Kontakte:** Beide Exporte und „Kontakt erfassen“ benennen die nicht
  ausgeführte Handlung. Amtsauswahl, Suche und Hauptfilter wirken gemeinsam;
  „Übernehmen“ schließt das Menü. Die sichtbare Startauswahl und der Reset
  umfassen alle drei Ämter.
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

Eine vollständige erneute Klick- und Tastaturprüfung aller Screens und
Viewportbreiten steht nach diesen Reparaturen noch aus.
