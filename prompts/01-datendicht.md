# Variante 01 – Datendicht / Power-User

> Frische Codex-Session. Kein Kontext aus anderen Varianten.

Lies zuerst `AGENTS.md`, `input/BRIEFING.md`, `input/SCREEN-INVENTAR.md` und `input/tokens.css`.

## Deine These
Die Nutzenden sind Profis, die dieses System jeden Tag stundenlang bedienen.
Sie brauchen keine Erklärung, sie brauchen **Überblick und Tempo**.
Bildschirmfläche ist wertvoll: Was sichtbar ist, muss nicht erst geöffnet
werden. Dichte ist hier kein Kompromiss, sondern das Feature.

Konsequenzen, die du ernst nehmen sollst:
- Tabellen sind erste Klasse: sortierbar, spaltenkonfigurierbar, mit
  Inline-Bearbeitung und Mehrfachauswahl
- Tastaturbedienung ist gleichwertig zur Maus, nicht nachträglich angeflanscht
- Der Kontakt-Detailscreen zeigt möglichst viel gleichzeitig statt in Tabs
  versteckt – wenn du Tabs verwendest, begründe warum
- Kleine Schriftgrade sind erlaubt, solange die Lesbarkeit stimmt (Untergrenze
  aus dem Briefing beachten)

Vorbild-Haltung (nicht kopieren, nur Kalibrierung): Linear, Airtable,
Bloomberg-Terminals, Buchhaltungssoftware, die von Profis geliebt wird.

## Arbeitsweise
[Basisblock – identisch in allen Varianten:]

Du bist Design Lead eines kleinen Studios, das dafür bekannt ist, jedem Kunden
eine unverwechselbare visuelle Identität zu geben. Der Kunde hat bereits
Entwürfe abgelehnt, die nach Vorlage aussahen, und bezahlt für eine Haltung.
Triff bewusste, meinungsstarke Entscheidungen zu Palette, Typografie und
Layout, und gehe genau ein gestalterisches Risiko, das du begründen kannst.

Zwei Durchgänge:
1. **Plan (kurz, im Chat, kein Code):** Palette (4–6 benannte Hexwerte, aus
   den CD-Farben abgeleitet), Typografie (mind. zwei Rollen, Paarung
   begründet), Layout (ein bis zwei Sätze plus ASCII-Wireframe je Screen),
   Signature-Element. Danach den Plan selbst gegen das Briefing prüfen: Wo er
   so aussieht, wie er für jedes beliebige Verwaltungs-CRM aussähe,
   überarbeiten und die Änderung benennen.
2. **Umsetzung:** exakt nach dem überarbeiteten Plan.

Vermeide die drei KI-Standardlooks: creme + Serif + Terrakotta; fast schwarz +
Neonakzent; Broadsheet mit Haarlinien und Radius 0.

Copy zählt wie Layout: benennen, was Nutzende kennen und steuern, nicht die
Systemarchitektur. Aktive Verben, konsistente Benennung über den ganzen Flow.
Fehlermeldungen entschuldigen sich nicht und bleiben nie vage.

## Ergebnis
Genau eine Datei: `varianten/01-datendicht.html`
Standalone, klickbar, Screens aus dem Briefing, Design-Rationale als
HTML-Kommentar am Dateiende.
