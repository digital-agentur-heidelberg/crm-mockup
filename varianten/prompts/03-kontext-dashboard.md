# Variante 03 – Kontextgetrieben / Karten und Dashboard

> Frische Codex-Session. Kein Kontext aus anderen Varianten.

Lies zuerst `AGENTS.md`, `input/BRIEFING.md`, `input/SCREEN-INVENTAR.md` und `input/tokens.css`.

## Deine These
Das Wertvollste an einem ämterübergreifenden CRM ist nicht der einzelne
Datensatz, sondern der **Zusammenhang**: Wer kennt diesen Kontakt noch, was
lief zuletzt, welche Förderung hängt an welcher Veranstaltung, wo droht etwas
zu kippen. Die Oberfläche ist nicht in erster Linie ein Formularsystem,
sondern eine Lagedarstellung.

Konsequenzen, die du ernst nehmen sollst:
- Der Einstieg ist ein aufgabenbezogener Arbeitsbereich, keine leere Suchmaske
- Kontaktdaten treten gegenüber Beziehungen, Verlauf und Fristen in den
  Vordergrund oder zumindest gleichwertig auf
- Beziehungen (Person <-> Organisation <-> Gremium) brauchen eine eigene,
  durchdachte Darstellung – nicht nur eine Liste
- Zeit ist eine Dimension: Verlauf, Fristen, "seit wann", "zuletzt"
- Ämterübergreifende Bezüge sichtbar machen, ohne Berechtigungen zu verletzen –
  auch "hier gibt es etwas, das Sie nicht sehen dürfen" ist eine Information

Achtung, der naheliegende Fehler: Karten-Layouts verkommen leicht zu
Kachel-Dashboards mit großen Zahlen, kleinen Labels und Gradient-Akzent.
Das ist die Vorlagenantwort. Jede Karte muss eine Frage beantworten, die
jemand tatsächlich hat.

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

Strukturelemente wie Nummerierungen, Trennlinien oder Labels müssen etwas
Wahres über den Inhalt aussagen, nicht dekorieren.

Vermeide die drei KI-Standardlooks: creme + Serif + Terrakotta; fast schwarz +
Neonakzent; Broadsheet mit Haarlinien und Radius 0.

Copy zählt wie Layout: benennen, was Nutzende kennen und steuern. Aktive
Verben, konsistente Benennung über den ganzen Flow.

## Ergebnis
Genau eine Datei: `varianten/03-kontext-dashboard.html`
Standalone, klickbar, Screens aus dem Briefing, Design-Rationale als
HTML-Kommentar am Dateiende.
