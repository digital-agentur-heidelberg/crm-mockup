# Befund 15 – Mailingübersicht und vollständiger Prozess

Stand: 28. August 2026.

## Umfang und beobachtetes Verhalten

„Mailings“ führt jetzt in eine Übersicht mit 25 Einträgen. Suche,
Prozessstand-Chips und Ämterauswahl folgen dem vorhandenen Listenvertrag;
eine Mehrfachauswahl gibt es nicht. Offene Mailings setzen ihren gespeicherten
Prozessschritt fort. Abgeschlossene Mailings öffnen dagegen eine reine
Leseansicht mit Angaben, Empfängermenge, Ausschlüssen, Vorschau und vorhandenem
Versandbeleg. Sie besitzen weder Prozessleiste noch bearbeitbare Scheinfelder.

Der Anlageprozess hat fünf Schritte im Wortlaut:

1. **Vorlage:** Entschieden wird die Vorlage. Sichtbar wird dabei die
   Fachfrage, ob Ämter künftig zwischen eigenen Vorlagen wählen; der Entwurf
   zeigt wahrheitsgemäß nur die heute gemeinsame Vorlage.
2. **Verteiler:** Entschieden wird genau ein Verteiler. Beim Einstieg aus dem
   Verteilerdetail ist er bereits festgelegt, bleibt im dauerhaften
   Zuordnungskontext sowie in Schritt 2 nachlesbar und wird in der linearen
   Navigation sichtbar übersprungen. Die fremde Auswahl des Kulturamts ist
   sichtbar und gesperrt.
3. **Inhalt und Empfänger:** Entschieden werden Betreff und Inhalt. Angezeigt
   werden der Prüfbestand, namentliche Ausschlüsse samt Grund, die tatsächliche
   Empfängermenge und die empfängerweise Vorschau. Die doppelte E-Mail-Adresse
   von Nora Ebert ist als Dublette benannt. Ravi Menon bleibt als vorhandene
   Person in Verteilern zweier Ämter sichtbar; eine ämterübergreifende
   Unterdrückung wird nicht behauptet.
4. **Testversand:** Angezeigt werden Testadresse und der wahrheitsgemäß fehlende
   Testnachweis. Der Schritt ist optional. Sowohl „Test senden und
   dokumentieren“ als auch der tatsächliche Versand enden an der
   Entwurfsgrenze; „Weiter ohne Testversand“ erreicht unabhängig davon Schritt
   5.
5. **Echtversand:** Angezeigt werden Vorlage, Verteiler, tatsächliche
   Empfänger, Ausschlüsse und der fehlende Testnachweis. Die Bestätigung macht
   die unwiderrufliche Aktion bedienbar, führt aber keinen Versand aus und
   erzeugt weder positiven Testnachweis noch Beleg.

Ein begonnenes Mailing aus der Übersicht öffnete in der Prüfung seinen
gespeicherten Schritt 4 und ließ Schritt 5 ohne Test erreichen. Ein
abgeschlossenes Mailing öffnete die Leseansicht. Ein offenes Mailing des
Kulturamts öffnete ebenfalls eine Leseansicht mit ausgeschriebener Sperre. Die
Sichtbarkeit fremder Verteiler und Mailings ist dabei eine Testannahme, keine
fachliche Rechteentscheidung.

„Teilnehmende anschreiben“ im Veranstaltungsdetail bleibt bewusst sichtbar,
navigiert aber nicht in den Verteiler-Mailingprozess und meldet die
Entwurfsgrenze. Das ist ein Beobachtungspunkt für den Usertest und kein
vergessener Mailing-Link.

## System und Tragfähigkeit

Listenanatomie, Prozessschritte, Formularfelder, Karten, Tabellen, Zähler,
Statusmarken, Vorschau, Schutzabschnitt, Zuordnungskontext und Toasts kamen aus
dem Bestand. Es entstand keine neue Komponente und kein Token. Ergänzt wurde
der vorhandene Zustand von `.assignment-target`: Hover, Fokus, Auswahl und ein
lesbarer gesperrter Zustand sind jetzt als Systemvertrag und im Styleguide
dokumentiert. Standardtext auf der gesperrten Fläche erreicht gemessen
14,45:1.

Übersicht, Prozess, Leseansicht und globale Suche lesen dieselbe
`CrmShell.getMailingFixture()`. Eine lokale Datenpflege je Screen wäre zwar
naheliegend gewesen, hätte aber unmittelbar neue Abweichungen erzeugt. Die
Fixture ist deshalb zentral, bleibt jedoch bewusst nur mailingbezogen. Die
Konsolidierung muss anschließend folgende Verträge mit Verteilerübersicht und
Verteilerdetail zusammenführen:

- Kreativwirtschaft Heidelberg: 68 Mitglieder, 4 ausgeschlossen, 64
  tatsächliche Empfänger;
- Verteiler Umweltwirtschaft: 25 Mitglieder, 2 ausgeschlossen, 23
  tatsächliche Empfänger;
- Branchentreffen Kultur: 41 Mitglieder, 2 ausgeschlossen, 39 tatsächliche
  Empfänger;
- den vorhandenen abweichenden Detailwert von 53 Mitgliedern sowie den alten
  Mehrverteilerstand 102 eindeutig, 6 ausgeschlossen und 96 tatsächlich.

Die beim ersten Klickdurchgang nur in Schritt 2 sichtbare Festlegung aus dem
Verteilerdetail verfehlte das Ziel „sichtbar bleiben“. Der wiederholte
Durchgang erfolgte erst nach Ergänzung des dauerhaften, vorhandenen
Zuordnungskontexts und erreichte den Zielwert.

## Prüfung

`./system/pruefung.sh` und `git diff --check` liefen ohne Befund. Die drei
statischen Screenprüfungen auf `<style>`, `style=` und Farbwerte ergaben jeweils
null; die JavaScript-Syntax von Hülle, Übersicht und Prozess war gültig.

Im lokalen Firefox 154.0.1 über `file://` wurden die exakten Inhaltsgrößen
1024×720, 1024×600, 1280×720 und 1920×1080 geprüft. Übersicht, Leseansicht,
fortgesetzter Prozess und Verteilereinstieg hatten keinen horizontalen
Seitenüberlauf. Noto Sans wurde lokal geladen, es gab keine Netzressourcen und
alle Lucide-Symbole wurden aus dem lokalen Bestand gerendert.

Die Schaltflächen der neuen Ansichten wurden mit nativen Zeigeraktionen
durchlaufen: gefüllt/lädt/leer/Fehler samt Rücksetz- und Wiederholungsweg,
Prozessfilter, Vorlagen- und Verteilerwahl, alle fünf Prozessschritte,
Vor-/Zurückwege, Personalisierungsbausteine, Vorschauwege, Test überspringen,
Bestätigung und beide Versandgrenzen. Die Tabellenzeilen besitzen sechs
Datenzellen zu sechs Kopfzellen. Die Prüfung ist auf Firefox beschränkt.
Tastaturwege und ARIA-Semantik bleiben ausdrücklich ausstehend.
