# AGENTS.md – Design-Sandbox

Dieses Repo ist eine **Wegwerf-Designexploration**, kein Produktcode.

## Was hier NICHT gilt
- Keine STOPP-REGEL, kein Plan-First-Gate, keine Freigabeschleifen.
- Kein `gate.sh`, keine Tests, keine Linter, keine CI.
- Keine ADRs, keine Architekturdokumentation.
- Keine Rückwärtskompatibilität zu irgendetwas.

## Was hier gilt
- Explorationsmodus: eigenständige, meinungsstarke Designentscheidungen treffen.
  Ein Entwurf, der "sicher" wirkt, ist hier ein schlechter Entwurf.
- Genau **eine** Datei pro Auftrag: `varianten/<name>.html`, standalone,
  im Browser per Doppelklick lauffähig.
- Erlaubt: Tailwind via CDN, Lucide-Icons via CDN, Vanilla JS.
- Verboten: Build-Step, npm, React, Framework-Setups, Backend, echte API-Calls.
- Daten: fest verdrahtete, **plausible deutsche Verwaltungs-Mockdaten**
  (echte Heidelberger Straßennamen, realistische Vereins- und Amtsbezeichnungen,
  keine "Max Mustermann"/"Lorem ipsum"-Füllung). Mindestens 25 Datensätze in
  Listen, damit Dichte und Scrollverhalten beurteilbar sind.
- Klickbar: die im Briefing genannten Screens müssen per Navigation
  untereinander erreichbar sein (Show/Hide-Sections genügen).

## Harte Randbedingungen
- Farbanker: ausschließlich `input/tokens.css`. Abgeleitete Tints/Shades sind
  ausdrücklich erlaubt und erwünscht, solange die CD-Farben erkennbar bleiben.
- Barrierefreiheit ist Pflicht, nicht Kür (BITV 2.0 / WCAG 2.1 AA):
  Kontrast >= 4.5:1 für Text, sichtbarer Keyboard-Fokus, semantisches HTML,
  Bedienung ohne Farbe als alleinigem Bedeutungsträger, `prefers-reduced-motion`.
- Sprache der Oberfläche: Deutsch, Verwaltungskontext, Sie-Form,
  Begriffe aus der Welt der Nutzenden – nicht aus der Systemarchitektur.

## Abschluss
Am Ende der Datei als HTML-Kommentar ein kurzes **Design-Rationale**:
Palette (4-6 benannte Hexwerte),
Layoutkonzept, das Signature-Element, und eine Entscheidung, die bewusst
riskant war.
