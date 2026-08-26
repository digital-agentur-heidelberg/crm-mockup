# Befund 01 – Veranstaltungsübersicht

## Ausgangshypothese und tatsächliches Ergebnis

Vor der Umsetzung wurden drei wahrscheinliche Lücken benannt: eine generische
Haupt-/Nebentextzelle für Tabellen, eine kompakte Belegungsanzeige und ein
eigenständiger Fehlerzustand. Genau diese drei Ergänzungen waren tatsächlich
nötig. Zeitraum- und Amtsfilter, Online-Status, Seitengerüst und Liste ließen
sich aus dem Bestand zusammensetzen. Es wurden weder neue Tokens noch eine
Änderung der Bauanleitung in `README.md` benötigt.

## 1. Was aus dem Bestand kam

Unverändert verwendet wurden:

- der App-Rahmen aus Seitennavigation, Topbar, globaler Suche und `.screen`;
- Seitenkopf, Aktionsgruppe und Knöpfe einschließlich Primäraktion;
- Karten, kompakter Kartenkopf und die vorhandenen Innenraumvarianten;
- Filter-Chips, Popover-Menü und Checkboxen;
- die Datentabelle mit klebendem Tabellenkopf und der scrollbaren Hülle;
- Statusmarken für „Geöffnet“, „Geschlossen“, „Startet am …“, „Nur auf
  Einladung“ und „Beendet“;
- Leer- und Ladezustand;
- globale Fokusregeln, Skip-Link und die Regeln für reduzierte Bewegung.

Mehrere Bausteine funktionierten in einem Kontext, für den sie nicht gebaut
worden waren. Die Filter-Chips stammen aus der Kontaktliste, bilden aber auch
eine exklusive zeitliche Sicht sehr klar ab. Das Popover-Menü war zuvor ein
Aktions- beziehungsweise Kontaktfilter und trägt ohne Änderung die
ämterübergreifende Mehrfachauswahl. Die Datentabelle kam aus Kontakt- und
Teilnehmendenlisten; sie bewältigt auch Termine, Orte, Zuständigkeit,
Registrierungszustand und Kapazität, ohne dass eine neue Listenkomponente nötig
wurde. Die kurzen Statusmarken funktionieren ebenfalls für einen technischen
Schalter mit fachlicher Folge: Ob Online-Anmeldungen hereinkommen können, ist
als Text und Icon ablesbar und nicht nur farblich codiert.

Das ist ein wichtiger positiver Befund: Die tragenden Atome und die dichte
Tabellenstruktur sind nicht an ihre Ursprungsscreens gebunden. Vor allem die
Entscheidung, Veranstaltungseinträge weiterhin als vergleichbare Datensätze und
nicht als Folge großer Karten zu behandeln, hielt das System ruhig.

## 2. Was ergänzt werden musste

### Generische Haupt-/Nebentextzelle `.primary-cell`

**Was:** Die vorhandene Darstellungslogik von `.name-cell` wurde unter dem
generischen Namen `.primary-cell` verfügbar gemacht. `.name-cell` bleibt
kompatibel; Geometrie und Typografie wurden nicht verändert.

**Warum reichte der Bestand nicht:** Termin sowie Veranstaltung und Ort brauchen
jeweils eine klare erste und zweite Textstufe. Die passende Regel existierte,
aber ihr Name behauptete, nur Namen beziehungsweise Kontakte zu beschreiben.
Eine Veranstaltung mit `.name-cell` zu markieren, hätte die Struktur zwar
optisch gerettet, semantisch aber die nächste lokale Schuld erzeugt.

**Warum Phase 2 das nicht vorhergesehen hat:** Das ist keine in den sechs
Screens fehlende Darstellung, sondern eine zu enge Verallgemeinerung. Die
Extraktion hat die sichtbare Textstufe erkannt, sie aber nach ihrem ersten
Inhalt statt nach ihrer Rolle benannt. Der neue Screen hat diese Bindung erst
sichtbar gemacht.

### Kompakte Belegungsanzeige `.occupancy`

**Was:** Eine wiederholbare Belegungsanzeige aus Zahlenpaar, ausgeschriebenen
freien Plätzen und nativem `<meter>`. Die Varianten „verfügbar“, „knapp“ und
„ausgebucht“ verwenden Text und Skalenlänge als primäre Information; Farbe ist
nur Verstärkung. Die neuen Text- und Grafik-Kombinationen sind mit
Kontrastwerten im Styleguide dokumentiert.

**Warum reichte der Bestand nicht:** `.capacity-overview` ist eine große
Detailkomposition mit zwei Kennzahlflächen. Achtzehn- bis fünfundzwanzigmal
wiederholt würde sie die Liste dominieren und die horizontale Vergleichbarkeit
zerstören. `.status-bar` zeigt dagegen die Verteilung verschiedener
Anmeldestatus und kann keine einzelne Kapazität abbilden. Die Breite lokal per
`style` oder Prozentklasse zu setzen war durch die Screenregeln zu Recht
ausgeschlossen. Das native `<meter>` trägt den Wert ohne lokale CSS-Angabe.

**Warum Phase 2 das nicht vorhergesehen hat:** Eine Veranstaltungsdetailseite
war vorhanden, eine Veranstaltungsübersicht jedoch nicht. Die sechs Screens
enthielten Kapazität nur als einzelne, großformatige Kennzahl. Es fehlte damit
schlicht der wiederholte Vergleichskontext; die Phase-2-Extraktion konnte die
nötige Dichte nicht aus einem vorhandenen Beispiel ableiten.

### Behebbarer Fehlerzustand `.error-state`

**Was:** Ein zentrierter Fehlerzustand mit Gefahr-Icon, einer konkreten
Beschreibung des fehlgeschlagenen Vorgangs und einer Wiederholen-Aktion. Er
teilt Geometrie mit dem Leerzustand, bleibt aber eine eigene semantische Rolle.

**Warum reichte der Bestand nicht:** `.notice--danger` ist eine Meldung im
Inhaltsfluss und lässt den eigentlichen Inhalt weiter bestehen. Beim
fehlgeschlagenen Laden der gesamten Übersicht fehlt dieser Inhalt. Der
Leerzustand wäre fachlich falsch: Es gibt nicht null Veranstaltungen, sondern
keine verlässliche Antwort. `.no-access` beschreibt wiederum eine dauerhafte
Berechtigungsgrenze, keinen behebbaren technischen Fehler.

**Warum Phase 2 das nicht vorhergesehen hat:** Der damalige Pflichtumfang nannte
leer, lädt und kein Zugriff, aber keinen allgemeinen Ladefehler. Diese Lücke war
also in den sechs Screens schlicht nicht enthalten. Sie zeigt weniger eine zu
enge Abstraktion als eine zu schmale Zustandsinventur.

## 3. Wo eine lokale Lösung bequemer gewesen wäre

- Für jede Belegung wäre eine individuelle Balkenbreite per `style` der
  kürzeste Weg gewesen. Das hätte dynamische Werte direkt an einen verbotenen
  Screen-Sonderfall gekoppelt. `<meter>` löst die Wertdarstellung im Markup und
  lässt alle Erscheinungsregeln im System.
- Die große `.capacity-overview` hätte verkleinert oder mit einer lokalen
  Tabellenvariante überschrieben werden können. Das wäre eine Kopie der
  Detailansicht statt einer zur Aufgabe passenden Entsprechung geworden.
- `.name-cell` hätte ohne sichtbaren Nachteil für Veranstaltung und Termin
  missbraucht werden können. Gerade weil das funktioniert hätte, war die
  Versuchung groß. Die generische Alias-Rolle legt die Phase-2-Überanpassung
  offen, statt sie zu verstecken.
- Der Fehlerzustand hätte als lokal kopierter Leerzustand oder als
  `.notice--danger` in einer sonst leeren Karte erscheinen können. Beides hätte
  einen neuen Zustand ohne Systemvertrag erzeugt.
- Für 1024 Pixel wären feste Spaltenbreiten und lokale Umbruchregeln bequem
  gewesen. Die vorhandene scrollbare Tabellenhülle und natürlicher Textumbruch
  reichen aus; deshalb wurde keine veranstaltungsspezifische Responsive-Regel
  ergänzt.
- Ein eigener Veranstaltungsfilter-Toolbar-Block lag nahe. Filter-Chips,
  Popover, Checkboxen und Kartenkopf tragen die Komposition jedoch bereits.
  Eine neue Komponente hätte nur einen einmaligen Seitenaufbau benannt.

Diese Stellen sind die gegenwärtigen Sollbruchstellen: dynamische
Visualisierungen, zu fachlich benannte Klassen, vollständige Seitenfehler und
komplexe Tabellen bei der unteren Desktopbreite.

## 4. Einschätzung zur Tragfähigkeit

Das System trägt diesen ersten neuen Screen. Drei Ergänzungen liegen am oberen
Rand des erwarteten normalen Bereichs, aber nur eine davon ist eine neue
fachliche Datenanzeige. Eine zweite korrigiert eine zu enge Benennung, die
dritte schließt einen im bisherigen Pflichtumfang nicht enthaltenen
Seitenzustand. Es war keine neue Palette, kein neuer Raster, kein neuer
Umbruchpunkt und keine neue Aktionshierarchie nötig. Das ist für den Ausbau um
rund fünfzig weitere Bildschirmzustände ein belastbarer, aber noch kein
abschließender Befund.

Die Phase-2-Extraktion ist bei Rahmen, Karten, Aktionen, Status und dichten
Listen ausreichend abstrakt. Schwächer ist sie dort, wo der Ausgangsbestand
nur eine fachliche Ausprägung zeigte. `.name-cell` ist das erste konkrete
Beispiel dafür. Vor dem nächsten Ausbau sollten Klassen mit Kontakt-,
Veranstaltungs- oder Mailingbezug deshalb jeweils darauf geprüft werden, ob sie
tatsächlich eine fachliche Komposition oder nur eine allgemeinere Rolle
benennen.

Weitere Lücken sind besonders in diesen Bereichen zu erwarten:

- **Formulare:** Validierungszusammenfassungen, abhängige Felder,
  Mehrfachdatensätze, ungespeicherte Änderungen, Auto-Save und längere
  Abschnittsformulare sind noch nicht als Systemverhalten beschrieben.
- **Detailansichten:** Kontakt- und Veranstaltungskopf sind bewusst spezifisch.
  Für Institutionen, Verteiler oder Förderfälle fehlt noch ein belastbarer
  allgemeiner Objektkopf sowie eine wiederverwendbare Änderungs- und
  Nachvollziehbarkeitsanzeige.
- **Assistenten:** Die Prozessleiste kann einen linearen fünfstufigen Ablauf.
  Verzweigungen, optionale Schritte, Unterbrechung, Wiederaufnahme und
  asynchrone Prüfungen sind nicht abgedeckt.
- **Berechtigungen:** `.no-access` deckt einen vollständig geschützten Inhalt
  ab. Gemischte Feld- und Abschnittsrechte, begründetes Deaktivieren,
  Freigabeanfragen und die Unterscheidung zwischen „nicht vorhanden“ und „nicht
  sichtbar“ fehlen.

Zusätzlich ist bei künftigen Übersichten mit Sortierung, Paginierung,
Mehrfachaktionen und sehr langen Zellinhalten zu rechnen. Die Tabelle trägt die
vorliegende Dichte, aber diese Kombinationen wurden noch nicht gemeinsam
erprobt.

## 5. Was beim nächsten Screen anders angegangen wird

Vor dem visuellen Aufbau sollte zuerst eine kurze Rollenprüfung der
voraussichtlich wiederverwendeten Klassen erfolgen: Beschreibt der Name eine
Darstellungsrolle oder nur den Inhalt des Ursprungsscreens? Das hätte
`.name-cell` bereits vor der Komposition als Verallgemeinerungskandidat
markiert.

Außerdem sollte die Zustandsmatrix vor dem Layout vollständig feststehen:
Inhalt vorhanden, lädt, fachlich leer, technisch fehlgeschlagen, teilweise
geschützt, vollständig geschützt und deaktiviert. Phase 2 hat Komponenten gut
aus sichtbaren Screens extrahiert, aber nicht systematisch alle Übergänge
zwischen diesen Zuständen inventarisiert.

Schließlich sollte die wichtigste Vergleichsgröße eines neuen Screens zuerst
als eigenständige Systemfrage behandelt werden. Bei dieser Übersicht war das
die Belegung. Mit dieser Entscheidung vor Tabellen- und Filterdetails entstand
eine kleine, wiederverwendbare Komponente statt einer nachträglich verkleinerten
Detailkarte.

## Prüfnachweis

- Baseline vor der Umsetzung: Commit `c1e77da`.
- Screen enthält 25 Datensätze: 18 anstehende und 7 vergangene.
- Null Treffer für `<style>`, `style=` und Farbwerte im Screen.
- Visuell geprüft bei 1024, 1280 und 1920 Pixel Breite.
- Übersicht, Ladezustand, Leerzustand und Fehlerzustand im Browser
  durchgeschaltet.
- Tastaturweg geprüft: vom Zeitraumfilter über die Zustandswahl bis zum ersten
  Veranstaltungslink; Enter öffnet `veranstaltung.html`.
- `git diff --check` ohne Beanstandung.
