# Befund 07 – Kontaktanlage und Dublettenprüfung

Stand: 27. August 2026. Dieser chronologisch siebte Befund dokumentiert den in
`ABDECKUNG.md` als Bauabschnitt 06 geplanten Ausbau K05.1 bis K05.6.

## Umfang und Testentscheidung

`kontakt-anlegen.html` ist über die Primäraktion der Kontaktliste erreichbar.
Alle sechs Zustände sind in einer Datei durchklickbar. Die fachlich offene
Frage wird als einzige Testvariable in zwei Fassungen gezeigt:

- Variante A unterbricht die Arbeit für Prüfung, Trefferentscheidung und eine
  begründete Neuanlage.
- Variante B begleitet die Eingabe, zeigt Treffer neben dem Formular und
  verlangt unmittelbar vor der weiterhin primären Anlage nur eine
  Bestätigung.

Ohne Fragment ist die Variantenleiste für die interne Abnahme sichtbar. Mit
`#variant-a` oder `#variant-b` wird die Fassung vor der Sitzung festgelegt und
nur diese Leiste verborgen; die K05-Zustandsleiste bleibt für die Vorbereitung
erhalten. Der fachliche Erfolg beschreibt wie im späteren Produkt, welcher
Kontakt entstanden ist und wo er liegt. Erst ein Klick auf den noch nicht
hinterlegten neuen Datensatz meldet die Entwurfsgrenze per Toast.

## Aus dem Bestand übernommen

- Seitenkopf, Karten, Formularfelder, Schaltflächen, Statusmarken, Hinweise,
  Zusammenfassungslisten, Spinner und die Prototyp-Zustandsleiste
- `CrmShell.createStateSwitch` für die sechs K05-Zustände
- `CrmShell.createDialog` für Fokusfang, Escape, Anfangsfokus und
  Fokusrückgabe der Verlassensnachfrage
- lokale Toasts, Icon-Nachrendern und die Rückmeldung für nicht hinterlegte
  Handlungen oder Datensätze
- Sabine Keller als vorhandene Schreibvarianten-Kandidatin mit hinterlegter
  Detailseite; ihre Kontaktdaten sind direkt neben der eigenen Eingabe
  vergleichbar
- dieselbe nachgelagerte Typentscheidung wie beim Anlegen einer Veranstaltung

## Neue und umbenannte Klassen

Es wurden elf allgemeine Klassen für vier Verträge und ihre notwendigen
Geometrien ergänzt. Keine davon enthält eine kontaktfachliche Benennung.

- `.proposal-box` ist der allgemeine Vorschlag mit ausdrücklicher Bestätigung.
  Der Veranstaltungsscreen verwendet denselben kanonischen Namen. Eine
  Variante von `.notice` wäre fachlich falsch, weil ein Vorschlag eine
  änderbare Abschlussentscheidung und keine bloße Mitteilung ist.
- `.form-section`, `.field-required` und `.field-help` ergänzen die bestehende
  `.field`-/`.field-error`-Anatomie um semantische Formularabschnitte,
  Pflichtkennzeichnung und stabile Hilfetexte. Kartenvarianten können diese
  Beziehungen nicht ausdrücken.
- `.validation-summary` und `.validation-summary-list` bilden die
  fokussierbare Fehlerübersicht am Kopf mit Links zu den Feldern. Das ist kein
  Feldfehlerzustand, weil mehrere Fehler gesammelt und erreichbar gemacht
  werden.
- `.async-check` trägt die vier Zustände läuft, fehlgeschlagen, ohne Ergebnis
  und mit Ergebnis. `.async-check--stage` ist die unterbrechende Vollfläche,
  `.async-check--inline` der zurückhaltende Hinweis im weiter bearbeitbaren
  Kontext. Diese Geometrien sind weder Statusmarken noch bloße Hinweise, da
  sie den Status und seine Folgehandlung als zusammenhängenden Vertrag tragen.
- `.candidate-list` ordnet mehrere mögliche Ergebnisse als Liste an. Eine
  einzelne Karte genügt nicht, weil mehrere Treffer ausdrücklich denselben
  Rang und dieselbe wiederholte Struktur behalten müssen.
- `.confirm-dialog` begrenzt ausschließlich die Geometrie einer kurzen
  Bestätigungsnachfrage. Die Klasse baut keine Dialogmechanik; diese kommt
  vollständig aus `CrmShell.createDialog`.

Die Klassenaliase `.type-box` und `.row-check` wurden vollständig auf ihre
kanonischen Namen `.proposal-box` beziehungsweise `.selection-check`
vereinheitlicht. In `kontakt-detail.html` und `mailing.html` wurden zwei reine
JavaScript-Hooks von Klassen auf `data-*`-Attribute umgestellt. Das waren keine
neuen Komponenten, sondern notwendige eindeutige Abgrenzungen für die
statische Klassenprüfung.

## Tokens und Kontrast

Es wurden keine Tokens ergänzt oder geändert. Abstände, Umbruchpunkt, Farben,
Radien, Schatten und Typografie stammen vollständig aus dem Bestand.

Die asynchronen Zustände verwenden bereits dokumentierte semantische
Farbpaare. Für die Pflichtkennzeichnung im Vorschlagskasten wurde im Styleguide
die bislang noch nicht dokumentierte vorhandene Kombination mit 8,40:1
ergänzt. CD Steingrau auf Weiß wird weiterhin nur für deaktivierte Inhalte und
nichttextliche Symbole verwendet.

## Neue Verträge in `shell.js`

`CrmShell.createUnsavedGuard` beobachtet einen angegebenen Formularkontext,
markiert Eingaben als ungespeichert und fragt beim Verlassen nach. Speichern
setzt den Zustand über `markSaved()` zurück. Die Implementierung komponiert
`CrmShell.createDialog`; dessen Fokusfang, Escape-Verhalten und Fokusrückgabe
waren vollständig ausreichend und wurden nicht dupliziert.

Die Variantensteuerung gehört ebenfalls in die Hülle, weil weitere
vergleichende User-Tests denselben vorab verbergbaren Mechanismus benötigen.
`data-prototype-variants`, die positionsgleichen Beschriftungen und die
Fragmente setzen `data-variant`, schalten allgemeine Varianteninhalte und
senden `crm:prototype-variant`. Das festgelegte Variantenfragment wird an
interne HTML-Verweise angehängt, damit die Sitzung über Detail- und
Listenansichten hinweg in derselben Fassung bleibt. Die Zustandssteuerung
erhielt lediglich frei benennbare sichtbare Beschriftungen, damit K05.1 bis
K05.6 in der Leiste stehen, ohne die neutralen Zustandsnamen zu verlieren.

Navigation, aktiver Eintrag, Suche, Toasts und Icon-Nachrendern bleiben
unverändert allein in der Hülle. Screenbezogen bleiben nur Zustandsfolgen,
Formularvalidierung, feste Trefferdaten und die fachlichen Abschlusswege.

## Rollen-, Zustands- und Rechteprüfung

Die vor dem Markup geprüften Rollen sind Formularabschnitt, Feldhilfe,
Pflichtkennzeichnung, Validierungszusammenfassung, asynchrones Prüfergebnis,
Ergebnisliste, Vorschlag und kurze Bestätigungsgeometrie. Kein Klassenname
beschreibt Kontakt, Dublette oder einen einzelnen Screen.

| Prüffall | Darstellung und Handlung |
|---|---|
| Inhalt vorhanden | Erfasste Angaben, Typvorschlag und Treffer bleiben lesbar; in B sind sie bearbeitbar. |
| Lädt | A sperrt die sichtbaren Eingaben und legt den Fokus auf die Entscheidung; B zeigt den Status am Namensfeld und lässt die Eingabe offen. |
| Fachlich leer | „Keine mögliche Dublette gefunden“ führt zur validierten Anlage. |
| Technisch fehlgeschlagen | Eingaben und Vorgang bleiben erhalten; „Erneut prüfen“ ist verfügbar. |
| Teilweise geschützt | Nicht simuliert, weil Feld- und Kontaktartrechte geparkt sind. |
| Vollständig geschützt | Nicht simuliert; die Testpersona besitzt die sichtbare Annahme für das eigene Amt. |
| Deaktiviert | Abschlussaktionen bleiben bis zur nötigen Bestätigung oder Begründung nativ deaktiviert. |

Für den Test gilt sichtbar die Annahme, dass die angemeldete Person Personen
und Institutionen im eigenen Amt, hier der Wirtschaftsförderung, anlegen darf.
Eine ämterübergreifende Wirkung ist im statischen Mockup nicht erlebbar und
wurde nicht erfunden. Daher gibt es weder unlesbare Bereiche noch eine
vorgegebene zuständige Stelle für eine Rechtefreigabe.

## Annahmen und offene Fachfragen

- Nur Name/Bezeichnung und bestätigte Kontaktart blockieren im Entwurf den
  Abschluss; alle übrigen Felder sind mangels verbindlicher Pflichtfeldregel
  optional. Ein unvollständiger Entwurf bleibt speicherbar.
- Person und Institution sind die testbaren Kontaktarten. Ob eine Person mit
  beruflichem Bezug anders modelliert wird, bleibt offen.
- Vergleichsgewichtung, Schwelle, Prüfdauer und automatische Auslösung sind
  nicht festgelegt. Die Prototypsteuerung macht die Zustände deterministisch.
- „Um meine Angaben ergänzen“ zeigt mangels Feldkonflikt- und Rechtevertrag die
  Entwurfsgrenze per Toast und verändert keinen Bestandskontakt.
- Die drei neutralen Gründe in Variante A sind Testmaterial, keine
  beschlossene Fachregel. „Anderer Grund“ mit Pflichtfreitext ist der
  eigentliche Messpunkt: Auswahlhäufigkeit und Inhalt zeigen, wo die Liste die
  Fachpraxis nicht trifft.
- Rechte je Kontaktart, Feld, Grund und zuständiger Stelle bleiben geparkt.

Alle Punkte stehen zusätzlich in `BEFUNDE-offen.md`.

## Tragfähigkeit für Bauabschnitte 08 und 09

Für Institutionen in Bauabschnitt 08 tragen Formularabschnitte, Hilfen,
Pflicht- und Feldfehler, Validierungszusammenfassung, Kontaktartvorschlag und
asynchrone Ergebnisse unverändert. Wiederholbare institutionelle Beziehungen,
gemischte Feldrechte und der Objektkopf sind noch nicht abgedeckt.

Für die Kontaktbearbeitung in Bauabschnitt 09 tragen die Formularanatomie,
Abschlussvalidierung und der auf `createDialog` aufgebaute Schutz
ungespeicherter Änderungen. Änderungsnachweis, begründete Deaktivierung,
Feldrechte und die fachliche Konfliktauflösung beim Speichern bleiben eigene
Verträge.

## Prüfung

`system/pruefung.sh` wurde neu angelegt und läuft offline ohne
Projektabhängigkeiten. Es prüft ausschließlich die dort und in `README.md`
benannten mechanischen Regeln. Der Lauf vom 27. August 2026 endete mit
„OK: Alle mechanisch prüfbaren Regeln sind erfüllt.“ Ein grüner Lauf ist
ausdrücklich kein Nachweis für Kontrast, ARIA-Semantik, horizontalen Überlauf,
Tastaturweg oder fachliche Regeln.

Die frühere Behauptung einer vollständigen Abschlussrunde und die dazu
genannten Überlaufwerte sind nicht nachvollziehbar belegt und wurden entfernt.
Die manuelle Prüfrunde für alle Screens, die beiden Varianten und die drei
Viewportbreiten ist ausstehend. Vor der Abnahme werden Methode, Browser,
Viewportgröße und die tatsächlich geprüften Wege im Befund ergänzt.
