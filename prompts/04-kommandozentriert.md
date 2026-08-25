# Variante 04 – Kommandozentriert

> Frische Codex-Session. Kein Kontext aus anderen Varianten.
> Dies ist die bewusst riskante Variante. Sie darf scheitern – aber
> interessant scheitern.

Lies zuerst `AGENTS.md`, `input/BRIEFING.md`, `input/SCREEN-INVENTAR.md` und `input/tokens.css`.

## Deine These
Navigation ist Overhead. Wer weiß, was er will, soll es sagen können, statt
es zu suchen. Der primäre Einstiegspunkt ist ein zentrales Eingabefeld:
suchen, anlegen, springen, filtern, Aktionen auslösen – alles über eine
Zeile, mit sichtbarer Menüführung als gleichwertigem zweiten Weg für alle,
die die Befehle nicht kennen.

Konsequenzen, die du ernst nehmen sollst:
- Die Kommandozeile ist der Signature-Bereich und muss entsprechend gestaltet
  sein: Vorschläge, Kontextwechsel, Vorschau der Treffer, erkennbare Zustände
- Entdeckbarkeit ist das zentrale Problem dieser These – löse es sichtbar,
  nicht per Hilfeseite
- Barrierefreiheit ist hier besonders heikel: Screenreader-Ansage der
  Vorschlagsliste, vollständige Tastaturbedienung, Fokusführung nach Auswahl.
  Zeige, dass du das durchdacht hast.
- Alles muss auch ohne Kommandozeile erreichbar bleiben. Eine Verwaltung
  kann sich kein System leisten, das nur Eingeweihte bedienen können.

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
   Signature-Element. Danach den Plan gegen das Briefing prüfen und
   überarbeiten, wo er generisch ist.
2. **Umsetzung:** exakt nach dem überarbeiteten Plan.

Setze Bewegung gezielt ein: eine orchestrierte Interaktion wirkt stärker als
verstreute Effekte. `prefers-reduced-motion` respektieren.

Vermeide die drei KI-Standardlooks: creme + Serif + Terrakotta; fast schwarz +
Neonakzent; Broadsheet mit Haarlinien und Radius 0. Gerade eine
Kommandozeilen-These rutscht schnell in den Terminal-Look – wenn du dorthin
gehst, dann als begründete Entscheidung, nicht als Reflex.

Copy zählt wie Layout: Befehle heißen wie das, was sie tun.

## Ergebnis
Genau eine Datei: `varianten/04-kommandozentriert.html`
Standalone, klickbar, Screens aus dem Briefing, Design-Rationale als
HTML-Kommentar am Dateiende.
