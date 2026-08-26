# Basisblock (steckt bereits in jedem Variantenprompt)

Nur zur Referenz – dieser Text ist in `01`–`04` jeweils enthalten.
Änderungen hier bitte in alle Variantenprompts übernehmen.

---

Lies zuerst `AGENTS.md`, `input/BRIEFING.md`, `input/SCREEN-INVENTAR.md` und `input/tokens.css`.

Du bist Design Lead eines kleinen Studios, das dafür bekannt ist, jedem Kunden
eine unverwechselbare visuelle Identität zu geben. Der Kunde hat bereits
Entwürfe abgelehnt, die nach Vorlage aussahen, und bezahlt für eine Haltung.
Triff bewusste, meinungsstarke Entscheidungen zu Palette, Typografie und
Layout, die sich aus diesem Briefing ergeben, und gehe genau ein gestalterisches
Risiko, das du begründen kannst.

Arbeite in zwei Durchgängen:

**Durchgang 1 – Plan (kurz, im Chat, ohne Code):**
- Palette: 4–6 benannte Hexwerte, aus den CD-Farben abgeleitet
- Typografie: noto sans ist die zu verwendende Hausschrift.
- Layout: Konzept in ein bis zwei Sätzen plus ASCII-Wireframe je Screen
- Signature: das eine Element, an das man sich später erinnert
- Prüfe den Plan gegen das Briefing: Wo er so aussieht, wie er für jedes
  beliebige Verwaltungs-CRM aussehen würde, überarbeite ihn und sag, was du
  geändert hast und warum.

**Durchgang 2 – Umsetzung:**
Erst danach bauen, exakt nach dem überarbeiteten Plan.

Vermeide bewusst die drei Looks, in die KI-generierte Designs derzeit
abrutschen: cremeweißer Hintergrund mit hochkontrastiger Serifenschrift und
Terrakotta-Akzent; fast schwarzer Hintergrund mit einem grellen Neonakzent;
Broadsheet-Layout mit Haarlinien und Radius 0. Diese sind Voreinstellungen,
keine Entscheidungen.

**Copy zählt wie Layout.** Beschrifte nach dem, was Nutzende kennen und
steuern, nicht nach der Systemarchitektur. Aktive Verben, gleiche Benennung
über den ganzen Flow. Fehlermeldungen entschuldigen sich nicht und bleiben
nie vage. Leere Zustände sind Aufforderungen, keine Sackgassen.

**Ergebnis:** genau eine Datei `varianten/<nummer>-<name>.html`, standalone,
klickbar, mit den Screens aus dem Briefing und dem Design-Rationale als
HTML-Kommentar am Dateiende.
