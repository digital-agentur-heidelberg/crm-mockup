# AGENTS.md – CRM Heidelberg, klickbarer Entwurf

Dieses Repo ist der **klickbare Entwurf** für das gemeinsame CRM der Stadt
Heidelberg. Er dient der Abstimmung mit den Fachämtern und als Vorlage für
die spätere Umsetzung in React. Er ist kein Produktivcode – aber er ist
auch keine Skizze mehr.

Die Designsprache ist abgenommen und **wird nicht mehr neu erfunden**. Wer
hier arbeitet, baut innerhalb eines bestehenden Systems.

---

## Aufbau

    system/
      tokens.css        Farben, Typografie, Abstände, Radien, Klebepunkte
      base.css          Grundlagen: Reset, Typografie, Fokus, Tabellen
      components.css    alle Komponenten
      shell.js          Hülle: Navigation, Suche, Toast, Icons
      vendor/lucide.js  lokal abgelegte Symbolbibliothek
      styleguide.html   jede Komponente in allen Zuständen
      README.md         Bauanleitung – vor dem ersten Screen lesen
      BEFUNDE-offen.md  offene Funde und Fachfragen
      BEFUND-*.md       Berichte je Bauabschnitt
    screens/
      _vorlage.html     Kopiervorlage für neue Screens
      *.html            die Fachscreens
    input/              Briefing, Screen-Inventar, CD-Farben
    varianten/          Archiv der Entwurfsrunden – nicht anfassen

---

## Harte Regeln

**Technik**
- Kein Build, kein npm, kein Framework, kein Bundler.
- Klassische Skripte, keine ES-Module, kein `import`, kein `fetch`.
- Alles muss per Doppelklick aus dem Dateisystem laufen, **ohne Server und
  ohne Internet**. Externe Adressen sind nicht erlaubt; Bibliotheken liegen
  unter `system/vendor/`.

**Screens**
- Neue Screens entstehen aus `screens/_vorlage.html`, nie durch Kopieren
  eines bestehenden Screens. Kopfaufbau, `data-screen`-Werte, Mindestzahl
  der Datensätze und die Schnittstellen der Hülle stehen in
  `system/README.md` – dort nachlesen, nicht raten.
- Kein `<style>`-Block, kein `style`-Attribut, kein Farbwert in einem
  Screen. Diese drei Prüfungen müssen immer null ergeben.
- Keine Klasse, die nur in einem Screen vorkommt. Was neu ist, gehört nach
  `system/components.css` **und** in `system/styleguide.html`, mit
  Kommentarblock und allen Zuständen.
- Kein eigenes Hüllen-Markup. Navigation, Suche, Toast und Symbole kommen
  aus `shell.js`; der Screen setzt nur sein `data-screen`.
- Kleine screenbezogene Interaktionen dürfen als Vanilla-JavaScript im
  Dokument stehen. Alles, was mehr als einen Screen betrifft, gehört in
  `shell.js`. Fachliche Daten bleiben fest verdrahtet.

**Designsprache**
- Keine neuen Farben, Schriften, Radien, Schattenstufen oder Abstandswerte,
  solange sich etwas mit vorhandenen Tokens bauen lässt.
- Neue Tokens werden nach Rolle benannt, nicht nach Aussehen.
- Zustände sind Pflicht, nicht Kür: Ruhe, Überfahren, Fokus, aktiv,
  deaktiviert, ausgewählt, Fehler – soweit sinnvoll.

**Barrierefreiheit (BITV 2.0 / WCAG 2.1 AA)**
- Kontrast mindestens 4,5:1 für Text; neue Kombinationen kommen mit ihrem
  Wert in die Tabelle im Styleguide.
- Eine Kombination unter 4,5:1 wird nie stillschweigend eingeführt. Sie
  braucht einen Eintrag in `system/BEFUNDE-offen.md` mit Wert,
  Verwendungszweck und Begründung. Ein bekannter Grenzfall ist vertretbar,
  ein unbemerkter nicht.
- Sichtbarer Fokus überall, vollständige Tastaturbedienung, semantisches
  Markup, korrekte Auszeichnung für Screenreader.
- Bedeutung nie allein über Farbe.
- Tabellen: Kopf- und Datenzellen müssen in Anzahl und Zuordnung
  übereinstimmen.

**Konventionen**
- Die Suche wird ausschließlich über die Schnittstelle in `shell.js`
  geöffnet, nie direkt am Eingabefeld.
- **Kein Bedienelement bleibt ohne Reaktion.** Was der Entwurf nicht
  leistet, sagt es über den Toast „im Entwurf nicht hinterlegt". Bei nicht
  ausgebauten Zielen wird nicht navigiert.

**Sprache und Daten**
- Oberfläche auf Deutsch, Sie-Form, Verwaltungskontext. Begriffe aus
  `input/SCREEN-INVENTAR.md` sind verbindlich.
- Mockdaten sind plausible deutsche Verwaltungsdaten – echte Heidelberger
  Bezüge, realistische Vereins- und Amtsbezeichnungen, keine
  Platzhalternamen. Listen mindestens 20 Einträge. Vorhandene Datensätze
  wiederverwenden statt neue zu erfinden.

**Dokumentation und gemeinsame Fakten**
- `input/` ist die unveränderte fachliche Ausgangsquelle. Der aktuelle
  Umsetzungsstand, einschließlich nicht gebauter Anforderungen, steht allein
  in `system/ABDECKUNG.md`.
- `system/BEFUNDE-offen.md` hält nur offene Beobachtungen, technische Folgen
  und Verweise auf die maßgebliche Fachfrage in `ABDECKUNG.md`. Es kopiert
  keine vollständigen Anforderungen.
- `system/BEFUND-*.md` sind chronologische Befundberichte. Sie werden nach
  Abschluss eines Bauabschnitts ergänzt, aber nicht nachträglich zu einem
  zweiten aktuellen Plan umgeschrieben.
- Betrifft eine fachliche Aussage mehrere Dateien oder Screens, wird vor der
  Änderung eine maßgebliche Stelle benannt und die anderen Stellen verweisen
  darauf. Wiederholte Werte wie Namen, Mitglieder-, Empfänger- oder
  Statuszahlen erhalten im Prototyp eine gemeinsame Fixture oder einen
  dokumentierten Vertrag; sie werden nicht parallel gepflegt. Eine gefundene
  Abweichung wird zuerst in `BEFUNDE-offen.md` und im aktuellen
  Abdeckungsstand sichtbar gemacht.

---

## Arbeitsweise

1. **Plan zuerst**, im Chat, ohne Code: was gebaut wird, welche Komponenten
   vorhanden sind und welche fehlen. Bei fehlenden: erst System ergänzen,
   dann Screen bauen – nie umgekehrt. Die verbindliche Rollenprüfung und die
   Zustands- und Rechtematrix aus `system/README.md` sind Teil dieses Schritts.
2. **Nur den Auftrag umsetzen.** Nichts außerhalb anfassen: kein
   Aufräumen, kein Vereinheitlichen, keine Verbesserung nebenbei. Was
   auffällt, wird in `system/BEFUNDE-offen.md` notiert.
3. **Nichts erfinden.** Fachliche Regeln, die nicht im Briefing oder
   Screen-Inventar stehen, sind offene Fragen für die Ämter und werden als
   solche notiert.
4. **Prüfen** nach jeder Runde:
   - die drei Prüfungen (`<style>`, `style=`, Farbwerte) – jeweils null
   - alle Screens per Doppelklick, ohne Netz
   - offline dieselbe Noto Sans wie mit Netz, nicht nur vorhandene Symbole
   - jede Schaltfläche auf jedem Screen einmal drücken
   - alle Navigationswege durchklicken, aktiven Eintrag prüfen
   - 1024, 1280 und 1920 Pixel
   - einen Tastaturweg quer durch den neuen Bereich
   Die letzten vier findet kein Werkzeug – sie laufen von Hand.
5. **Befundbericht** je Bauabschnitt: was aus dem Bestand kam, was ergänzt
   werden musste und warum es nicht vorhergesehen wurde, wo lokal zu lösen
   verlockend war, Einschätzung zur Tragfähigkeit.

---

## Was hier nicht gilt

Keine STOPP-REGEL, kein Freigabe-Gate, kein `gate.sh`, keine Tests, keine
Linter, keine CI, keine ADRs. Als einzige eng begrenzte Ausnahme ist
`system/pruefung.sh` erlaubt: ein abhängigkeitsfreies Shell-Skript, das
ausschließlich statische Konventionen des Bestands vorprüft. Es ist weder
Testrahmen noch CI, Bau- oder Paketverwaltungsschritt und kein Abnahmetor;
der Abschlussnachweis bleibt die manuelle Prüfrunde mit Befund. Es bleibt ein
Entwurf – nur einer, der zusammenhält.
