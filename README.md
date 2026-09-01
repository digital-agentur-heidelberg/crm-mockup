# CRM Heidelberg – klickbarer Entwurf

Dieses Repository enthält den klickbaren Entwurf für das gemeinsame CRM der
Stadt Heidelberg. Er dient der Abstimmung mit den Fachämtern, der explorativen
Erprobung und als Vorlage für die spätere Umsetzung in React.

Der Bestand ist ein statischer Prototyp: Es gibt kein Backend, keine
Persistenz und keinen realen Versand. Die fachlichen Daten sind plausible,
fest verdrahtete Mockdaten.

## Prototyp öffnen

1. Das Repository lokal auschecken oder herunterladen.
2. [`screens/index.html`](screens/index.html) per Doppelklick im Browser öffnen.
3. Von der Prototyp-Übersicht aus den gewünschten Fachscreen aufrufen.

Für eine explorative Testsitzung wird
[`screens/arbeitsbereich.html#test`](screens/arbeitsbereich.html#test) geöffnet.
Der Testmodus blendet die Hilfsmittel für die Testleitung im selben
Browser-Tab bis zum Sitzungsende aus.

Der Entwurf benötigt keinen Server, keinen Build-Schritt und keine
Internetverbindung. Schriften und Symbole liegen vollständig im Repository.

## Abgedeckte Bereiche

Der aktuelle Bestand umfasst insbesondere:

- Arbeitsbereich und objektübergreifende Suche
- Kontaktliste, Personendetail und Kontaktanlage mit Dublettenprüfung
- Verteilerübersicht, Arbeits- und Managed-Verteiler sowie Mitgliedschaften
- Veranstaltungsübersicht, Veranstaltungsdetail und Teilnehmendenarbeit
- Mailingübersicht, Mailingprozess und abgeschlossene Leseansicht
- gemeinsame Listen-, Auswahl-, Rechte- und Rückmeldemuster
- Lade-, Leer-, Fehler- und geschützte Zustände, soweit im Entwurf vorgesehen

Der verbindliche Umsetzungsstand einschließlich fehlender oder bewusst nicht
gebauter Anforderungen steht in
[`system/ABDECKUNG.md`](system/ABDECKUNG.md).

## Struktur

```text
input/       unveränderte fachliche Ausgangsquellen
screens/     Fachscreens und Vorlage für neue Screens
system/      Designsystem, Hülle, Styleguide und Dokumentation
varianten/   archivierte Entwurfsrunden
```

Die zentrale Hülle mit Navigation, Suche, Toasts und Symbolen liegt in
`system/shell.js`. Farben, Typografie, Abstände und weitere Designwerte sind in
`system/tokens.css` definiert; wiederverwendbare Komponenten stehen in
`system/components.css` und werden in `system/styleguide.html` gezeigt.

## Am Entwurf arbeiten

Vor Änderungen sind [`AGENTS.md`](AGENTS.md) und die
[`Bauanleitung des Designsystems`](system/README.md) zu lesen. Die
Designsprache ist abgenommen: Neue Screens entstehen aus
`screens/_vorlage.html` und werden aus vorhandenen Systemkomponenten
zusammengesetzt. Der Ordner `varianten/` ist ein Archiv und wird nicht
weiterbearbeitet.

Die statische Vorprüfung läuft ohne Abhängigkeiten:

```bash
./system/pruefung.sh
```

Sie prüft ausschließlich mechanische Konventionen und ersetzt nicht die in
`AGENTS.md` beschriebene manuelle Prüfung von Bedienung, Tastaturwegen,
Darstellung und Barrierefreiheit.

## Maßgebliche Dokumentation

- [`system/ABDECKUNG.md`](system/ABDECKUNG.md) – aktueller Umsetzungsstand
- [`system/README.md`](system/README.md) – Bau- und Systemregeln
- [`system/styleguide.html`](system/styleguide.html) – visuelle Referenz
- [`system/BEFUNDE-offen.md`](system/BEFUNDE-offen.md) – offene Beobachtungen
- [`system/BEFUND-*.md`](system/) – chronologische Befundberichte
