# Befund 04 – Konsolidierung

## Schrift und Offline-Betrieb

Noto Sans ist in den fünf im Bestand angeforderten normalen Schnitten 400, 500,
600, 700 und 800 lokal als WOFF2 abgelegt. `base.css` bindet jeden Schnitt mit
`font-display: swap` ein; das bestehende Token behält Arial und `sans-serif` als
Ausweichschriften. Die externen Schriftverweise wurden aus Vorlage, Styleguide
und allen Fachscreens entfernt. Dadurch verwenden auch die drei Verteiler-
Screens Noto Sans, ohne eine neue Schrift- oder Fallback-Entscheidung einzuführen.

## Umbenannte Klassen

- `.event-grid` heißt in neuer Verwendung `.object-work-grid`. Die Rolle ist
  das allgemeine Haupt-/Seitenraster eines Arbeitsobjekts; `.event-grid` bleibt
  als Alias mit identischer Geometrie erhalten.
- `.participant-card` heißt in neuer Verwendung `.selection-table-card`. Die
  Klasse wurde bereits für Teilnehmende und Verteiler-Mitglieder eingesetzt
  und beschreibt tatsächlich eine Kartenhülle für Tabellen mit sichtbarer
  Mehrfachauswahl. `.participant-card` bleibt als Alias erhalten.
- `.event-reference` heißt in neuer Verwendung `.description-list--inset`.
  Die Klasse liefert ausschließlich den eingerückten Innenabstand einer
  Beschreibungs- oder Referenzliste; `.event-reference` bleibt als Alias
  erhalten.

Die aktiven Screens verwenden jeweils den neuen Rollennamen. Die alten Namen
bleiben in `components.css` bewusst nur als rückwärtskompatible Selektoren
erhalten. Selektoren, Abstände, Rastermaße und Umbruchpunkte wurden nicht
verändert.

## Bewusst fachlich gebliebene Klassen

### Kontakt

`.contact-search-tools`, `.contact-actions` und `.contact-tools` bilden die
Werkzeugfolge der Kontakt-Master-Detail-Suche. `.contact-layout` trägt den nur
dort vorhandenen Wechsel von Seitenvorschau zu Detailzeile. `.contact-table`
bewahrt die abgenommene Kontaktdichte; `.contact-preview` ist ausdrücklich die
Vorschau eines gewählten Kontakts. Diese Namen bezeichnen gemeinsam eine
fachliche Komposition und keine neutrale Einzelgeometrie.

### Veranstaltung

`.event-summary` und `.event-date` bilden zusammen den Veranstaltungskopf.
`.event-orientation` koppelt Ort und Zeitraum innerhalb der kompakten
Veranstaltungsangaben. `.control-max-event-type` begrenzt gezielt das Feld der
Veranstaltungsart. Diese Klassen bleiben fachlich, weil Inhalt, Hierarchie und
Verwendung zusammengehören; eine allgemeine Benennung würde einen bislang
nicht belegten Vertrag behaupten.

### Mailing und Verteilerwahl

`.mail-grid`, `.mail-panel` und `.mail-stage` bilden die Arbeitsfläche und die
Stufen des Mailing-Prozesses. `.distribution` bezeichnet die konkrete
Verteilerwahl im Empfängerkreis. `.preview-recipient-nav` und `.recipient-meta`
gehören zur empfängerbezogenen Dokumentvorschau. Sie bleiben fachlich, weil sie
nicht nur neutrale Abstände, sondern den Ablauf und die Bedeutung dieser
Kompositionen tragen.

## Weitere zu enge Verallgemeinerungen

Bei der Durchsicht fiel außerhalb der Klassennamen auf, dass
`.object-work-grid` weiterhin die Token `--grid-event-main-min` und
`--grid-event-side` verwendet. Die Geometrie ist inzwischen allgemein, die
Tokennamen benennen noch ihren Ursprungsscreen. Das ist dieselbe Art enger
Benennung auf Tokenebene, liegt aber außerhalb der beauftragten Klassenprüfung;
die Werte und Namen wurden in dieser rein mechanischen Runde nicht geändert.

Außerdem überschreibt die Auswahlkartenrolle den allgemeinen geprüften
Tabellenzustand gezielt von Akzentweich auf Markenweich. Das ist keine
Namenslücke, aber ein kontextgebundener Variantenunterschied, der bei einer
weiteren Verwendung vorab gegen die allgemeine Tabellenrolle geprüft werden
sollte. Weitere zu enge Verallgemeinerungen ohne Namensbezug sind bei dieser
Durchsicht nicht aufgefallen.

## Prozessänderung und Tragfähigkeit

Die Bauanleitung verlangt die Rollenprüfung nun vor der Komposition sowie eine
vollständige Zustands- und Rechtematrix vor dem Markup. Damit sind die Lehren
aus Befund 01 und Befund 03 nicht mehr nur rückblickende Berichtspunkte. Die
Konsolidierung bestätigt zugleich, dass der Großteil der fachlich benannten
Klassen tatsächlich Kompositionen bezeichnet. Drei Aliaskorrekturen genügen;
eine neue Komponente oder neue Geometrie war nicht erforderlich.

## Prüfnachweis

- Alle fünf WOFF2-Dateien wurden als Noto Sans mit den Schnitten Regular,
  Medium, SemiBold, Bold und ExtraBold erkannt. Firefox registriert alle fünf
  `@font-face`-Regeln mit `font-display: swap` und lädt sie auf Anforderung.
- Alle elf Dateien unter `screens/`, der Styleguide und eine frische
  Vorlagenkopie wurden lokal ohne Server und ohne externe Laufzeitressourcen bei
  1024, 1280 und 1920 Pixeln geöffnet. Noto Sans ist jeweils die berechnete
  Schriftfamilie; Originalvorlage und frische Kopie sind pixelidentisch.
- Die drei Screenprüfungen auf `<style>`, `style=` und Farbwerte liefern jeweils
  null Treffer. Ausführbare Screens, Vorlage, Styleguide und System enthalten
  keine externen `href`- oder `src`-Ziele. Das unveränderliche historische
  Archiv `varianten/` bleibt gemäß `AGENTS.md` von dieser Laufzeitprüfung und
  von Änderungen ausgeschlossen.
- Veranstaltung und Verteilerdetail wurden mit neuem Rollennamen und altem
  Alias bei allen drei Breiten pixelgenau verglichen; alle sechs Vergleiche sind
  identisch.
- Alle statischen Schaltflächen der zehn Fachscreens wurden in frischen lokalen
  Seitenzuständen ausgelöst oder in ihrem vorgesehenen deaktivierten Zustand
  geprüft. Verborgene Leer-, Fehler-, Menü- und Abschlussaktionen wurden über
  ihre echten Auslöser geöffnet; Auswahlaktionen wurden vor dem Auslösen
  freigeschaltet.
- Alle globalen Navigationsziele führen zu vorhandenen lokalen Dateien und
  setzen den richtigen aktiven Eintrag. Weitere lokale Dateiziele fehlen nicht.
- Der Tastaturweg führt mit sichtbarem Fokus von der ersten Mitgliedercheckbox
  durch alle 25 Zeilen bis „Als Empfängerkreis an Mailing übergeben“.
- `git diff --check` ist ohne Beanstandung. Zwei kleine, nicht durch diese Runde
  verursachte horizontale Bestandsüberläufe sind in `BEFUNDE-offen.md`
  dokumentiert und wurden nicht durch eine Geometrieänderung kaschiert.
