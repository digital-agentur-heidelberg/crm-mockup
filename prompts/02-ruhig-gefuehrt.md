# Variante 02 – Ruhig / geführt

> Frische Codex-Session. Kein Kontext aus anderen Varianten.

Lies zuerst `AGENTS.md`, `input/BRIEFING.md`, `input/SCREEN-INVENTAR.md` und `input/tokens.css`.

## Deine These
Die Nutzenden sind keine Software-Profis, sondern Fachkräfte der Verwaltung
mit sehr unterschiedlicher Digitalaffinität und ohne Zeit für Schulungen.
Das System muss **ohne Erklärung bedienbar** sein. Es zeigt in jedem Moment
nur das, was jetzt gebraucht wird, und macht den nächsten Schritt offensichtlich.

Konsequenzen, die du ernst nehmen sollst:
- Großzügige Typografie und viel Weißraum, klare Hierarchie statt Dichte
- Ein sichtbarer primärer Handlungspfad pro Screen, sekundäres tritt zurück
- Komplexe Vorgänge (Anlegen, Dublettenauflösung) werden geführt statt
  als Formularwüste präsentiert
- Zustände sind explizit: Was passiert gerade, was ist gespeichert, was fehlt
- Diese Variante darf langsamer sein als 01 – aber niemals bevormundend
  oder infantil. Erwachsene Nutzende, ruhige Oberfläche.

Achtung, der naheliegende Fehler: "ruhig" wird schnell zu "generisches
SaaS-Onboarding mit runden Ecken und Illustrationen". Das ist hier kein
gutes Ergebnis. Ruhe muss aus Typografie, Rhythmus und Reduktion kommen,
nicht aus Dekoration.

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
   Signature-Element. Danach den Plan selbst gegen das Briefing prüfen und
   überarbeiten, wo er generisch ist.
2. **Umsetzung:** exakt nach dem überarbeiteten Plan.

Bei minimalen Richtungen liegt die Qualität in der Präzision von Abständen,
Typografie und Detail – nicht im Weglassen allein.

Vermeide die drei KI-Standardlooks: creme + Serif + Terrakotta; fast schwarz +
Neonakzent; Broadsheet mit Haarlinien und Radius 0.

Copy zählt wie Layout: benennen, was Nutzende kennen und steuern. Aktive
Verben, konsistente Benennung über den ganzen Flow. Leere Zustände sind
Aufforderungen. Fehlermeldungen sagen, was zu tun ist.

## Ergebnis
Genau eine Datei: `varianten/02-ruhig-gefuehrt.html`
Standalone, klickbar, Screens aus dem Briefing, Design-Rationale als
HTML-Kommentar am Dateiende.
