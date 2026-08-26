# CRM Mockups – Design-Exploration (Sandbox)

Ziel: mehrere **unabhängige** Designentwürfe für das CRM der Stadt Heidelberg,
losgelöst vom bestehenden Frontend. Einziger harter Anker: die CD-Farben.

## Wichtig: Isolation
Dieser Ordner gehört **nicht** ins Produktivrepo und darf keinen Zugriff
darauf haben. Sobald Codex das bestehende Designsystem oder den Prototyp-Code
im Kontext hat, entstehen Reskins statt Alternativen.

Der Prototyp fließt deshalb nur als **Text** ein: `SCREEN-INVENTAR.md` liefert
Umfang, Inhalte und Begriffe. Kein Prototyp-Code, keine Screenshots, keine
CSS-Dateien in den Sandbox-Ordner kopieren.

    # eigenes Repo, nicht als Unterordner von crm-platform
    cd ~/dev && git init crm-mockups && cd crm-mockups
    # diesen Ordnerinhalt hineinkopieren
    codex   # Session im Ordner starten

## Vorbereitung (einmalig, ~20 Min)
1. `input/tokens.css` – CD-Farbwerte eintragen (aus dem bestehenden Designsystem
   herauskopieren, **nur die Farben**, keine Komponenten, kein Spacing, keine Typo).
2. `input/BRIEFING.md` – die verbliebenen `<TODO>` ausfüllen. Am wichtigsten
   ist Abschnitt 5b (Feeling): drei Adjektive dafür, drei dagegen.
3. `input/SCREEN-INVENTAR.md` – Routen und Begriffe aus dem bestehenden
   Prototypen eintragen. Der Prototyp klärt den Umfang, die Entwürfe klären
   die Haltung.
4. `AGENTS.md` unverändert lassen – setzt Codex bewusst in den Explorationsmodus.

## Durchführung
Für **jede** Variante eine **frische** Codex-Session (kein Kontextübertrag –
sonst konvergieren die Entwürfe):

    Session 1 -> prompts/01-datendicht.md
    Session 2 -> prompts/02-ruhig-gefuehrt.md
    Session 3 -> prompts/03-kontext-dashboard.md
    Session 4 -> prompts/04-kommandozentriert.md

Jede Session legt genau eine Datei ab: `varianten/0X-<name>.html`.

## Auswertung
`BEWERTUNG.md` ausfüllen, bevor Lieblingsentwürfe entstehen – die Kriterien
gehören vor die Entwürfe, nicht danach.

Danach Runde 2: `prompts/99-hybrid.md` mit den ausgewählten Elementen.
