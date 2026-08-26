# Befund 02 – Gemeinsame Hülle

## Abweichungen im Ausgangsstand

Die sieben Screens verwendeten zwar dieselbe äußere Reihenfolge aus Marke,
vier Navigationseinträgen, Hilfe, Profil, Kopfleiste und Inhalt. Die sichtbare
Gleichheit verdeckte jedoch mehrere unterschiedliche Verträge:

- Nur `arbeitsbereich.html` setzte am aktiven Navigationseintrag
  `aria-current="page"`. Die übrigen sechs Screens verwendeten
  `aria-current="true"`. Da ausschließlich `aria-current="page"` gestaltet
  war, erschien nur der Arbeitsbereich aktiv.
- Die Kontakte-Detailseite ordnete sich lokal dem Bereich Kontakte zu; die
  Veranstaltungsdetailseite und das Veranstaltungsformular ordneten sich lokal
  Veranstaltungen zu. Diese fachlich richtige Zuordnung wurde siebenmal im
  Markup entschieden und blieb wegen des falschen Attributwerts unsichtbar.
- Sechs Screens führten der Navigationseintrag „Veranstaltungen“ direkt zu
  `veranstaltung.html`, also zu einem einzelnen Branchendialog. Nur die neue
  Übersicht verwies auf `veranstaltungen.html`.
- Nur der Arbeitsbereich enthielt das Vorschlags-Popover der globalen Suche.
  Dort war das Eingabefeld als Combobox mit Listbox-Bezug beschrieben. Auf den
  übrigen Screens stand an derselben Stelle lediglich ein unverdrahtetes
  Suchfeld.
- Die Suchbeschriftung lautete im Arbeitsbereich „Kontakte, Aufgaben oder
  Veranstaltungen suchen“, auf allen anderen Screens „Überall suchen“. Der
  sichtbare Placeholder war dagegen gleich.
- Die Arbeitsbereichssuche öffnete bei Fokus und schloss mit Escape oder
  Außenklick. Strg+K, Filterung, Pfeiltasten, Enter-Navigation und Ansagen
  fehlten auch dort. Auf den übrigen sechs Screens fehlte jedes Suchverhalten.
- Die Hilfe-Schaltfläche zeigte nur im Arbeitsbereich eine Rückmeldung. In den
  anderen sechs Kopien war sie ohne Funktion.

## Gewählte Grundlage

Die Hülle des Arbeitsbereichs gewann, weil sie als einzige bereits die
vollständige Suchoberfläche, Combobox-/Listbox-Semantik, Vorschläge und eine
Kontextvorschau enthielt. Ihr Navigationsziel für Veranstaltungen wurde nicht
übernommen: Die gemeinsame Navigation führt auf die fachlich richtige
`veranstaltungen.html`.

Der aktive Bereich wird jetzt ausschließlich aus `data-screen` am `<body>`
abgeleitet. Kontakte und Kontakt-Detail verwenden `kontakte`; Übersicht,
Detail und Formular der Veranstaltungen verwenden `veranstaltungen`.
`shell.js` setzt genau einmal `aria-current="page"`.

## Weitere Doppelungen und nächste Kandidaten

Nach dem Entfernen der Hülle bleiben mehrere wiederkehrende Muster sichtbar,
die bei weiteren Screens dieselbe Art von Drift entwickeln könnten:

- Jeder Screen lädt dieselben drei Stylesheets, dieselbe Schrift und Lucide in
  nahezu identischem, aber unterschiedlich umbrochenem Head-Markup. Eine
  gemeinsame Datei ist wegen der Doppelklick-Anforderung nicht nachladbar; eine
  verbindliche Head-Schablone oder Erzeugung beim Anlegen eines Screens wäre
  dennoch sinnvoll.
- Toast-Markup und die Funktionen zum Einblenden und zeitgesteuerten Schließen
  werden in Arbeitsbereich, Kontakt-Detail, Veranstaltungsformular und Mailing
  lokal wiederholt. Text und auslösende Aktion sind fachlich, der
  Lebenszyklus ist gemeinsam.
- Alle Screens rufen `lucide.createIcons()` selbst beim Laden auf. Die Hülle
  initialisiert ihre eigenen Icons bereits zentral; für dynamisch erzeugte
  Inhaltsicons fehlt noch ein gemeinsamer, ereignisbasierter Vertrag.
- Auswahlzähler und Mehrfachauswahl sind in Kontakt- und Teilnehmendenliste
  strukturell ähnlich verdrahtet. Sichtbare Zeilen auswählen, Zeilenstatus
  setzen und Aktionsknöpfe aktivieren sind Kandidaten für eine kleine
  Listen-Auswahllogik.
- Filter setzen in Kontakte, Veranstaltungen und Teilnehmendenliste jeweils
  `aria-pressed`, verstecken Zeilen und aktualisieren Ergebniszahlen. Die
  fachlichen Filterwerte unterscheiden sich, der Zustandswechsel nicht.
- Lade-, Leer- und Fehlerzustände werden weiterhin von jedem Screen lokal
  ein- und ausgeblendet. Die Komponenten sind gemeinsam gestaltet, ihr
  Umschaltvertrag ist noch nicht zentralisiert.

Diese Kandidaten sollten erst dann extrahiert werden, wenn ein weiterer Screen
den gleichen Interaktionsvertrag tatsächlich benötigt. Die Hülle war dagegen
bereits auf allen sieben Screens vorhanden und deshalb unmittelbar zentral zu
halten.
