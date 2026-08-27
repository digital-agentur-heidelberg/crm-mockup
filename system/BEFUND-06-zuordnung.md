# Befund 06 – Kontakte zu Verteilern zuordnen

Stand: 27. August 2026.

## Umfang und Entscheidung

Die fachliche Handlung „Kontakte einem Verteiler hinzufügen“ ist aus beiden
Richtungen umgesetzt: In der Kontaktliste stehen die Kontakte fest und der
Verteiler wird gewählt; im Verteilerdetail steht der Verteiler fest und Kontakte
werden gesucht. Beide Einstiege verwenden denselben Systemvertrag, dieselbe
Ausführungszusammenfassung und dieselbe Rückmeldung.

Die Zuordnung bleibt ein modaler Arbeitsdialog. Sie erhält damit den Kontext
der Ausgangsliste und erzeugt keinen zweiten Navigations- oder Sprachpfad. Die
Funktionsdichte wird nicht durch ein kleines Popover, sondern durch einen
großen nativen `dialog` mit Anfangsfokus, Fokusfang, Escape, Fokusrückgabe und
genau einer vertikalen Scrollfläche getragen.

## Aus dem Bestand übernommen

- lokale Suche, Filter-Chips, mehrwertige Amtsauswahl und Filterreset aus der
  Kontaktliste
- Datentabelle, Auswahlcheckboxen, Statusmarken und paginierte Listenansicht
- Popover-Menü als Atom für mehrere kleine Sammelhandlungen
- geschützter, aber lesbarer Definitionsabschnitt des Managed-Verteilers
- Toast und dauerhafte kontextuelle Rückmeldungen
- vorhandene Heidelberger Kontakte, Organisationen, Ämter und Verteiler; der
  gemeinsame feste Kontaktkatalog erweitert den Prüfbestand deterministisch
  auf 205 Datensätze

## Ergänzungen am System

`.bulk-action` verbindet eine sichtbare Auswahlzahl und einen erweiterbaren
Menüauslöser. Ohne Auswahl bleibt der Auslöser mit stabiler Beschriftung
ausgegraut; die Ursache ist in seiner zugänglichen Beschriftung enthalten.
Kontakt-, Teilnehmenden- und Mitgliederliste verwenden denselben Baustein; die
Menüeinträge bleiben fachlich verschieden.

`.selection-scope` trennt die aktuelle Seite von allen Treffern der aktuellen
Filterung. `CrmShell.createListSelection` kennt nun explizite Zeilenwahl und den
Zustand `all-matches`, erhält Treffer- und Seitenmenge aus
`CrmShell.createListView` und liefert ausgewählte, hinzufügbare und bereits
enthaltene Mengen getrennt. Ein Filterwechsel hebt `all-matches` vollständig
und sichtbar begründet auf.

`CrmShell.createDialog` kapselt Fokusführung und Schließverhalten.
`CrmShell.createDistributionAssignment` komponiert darauf beide
Zuordnungsrichtungen, die gemeinsame Bestätigung, Pagination und
Ergebnisrückmeldung. Der Vertrag nimmt festen Quell- oder Zielkontext als
Option entgegen und ist nicht an IDs eines Fachscreens gekoppelt.

## Was die Mengenanforderung am Auswahlvertrag verändert hat

Der ursprüngliche Vertrag entstand aus drei kleinen Listen. Er konnte nur
geprüfte DOM-Zeilen zählen und „alle sichtbaren“ auswählen. Sichtbarkeit war
dabei hinreichend, solange eine Liste vollständig auf einer Seite stand. Mit
205 oder 1000 Kontakten sind jedoch drei Mengen fachlich verschieden:

1. einzeln gewählte Kontakte, auch auf mehreren Seiten,
2. alle Kontakte der aktuellen Seite,
3. alle Treffer der aktuellen Suche und Filterung.

Der Vertrag musste deshalb die Listensicht kennen, ohne mit der Filterlogik zu
verschmelzen. `syncCollection(view)` ist die schmale Verbindung: Die
Listenansicht bleibt zuständig für Treffer und Pagination, die Auswahl bleibt
zuständig für Zustimmung, Mengenwechsel und Ausführungszähler. Eine
automatische Neubezifferung nach Filterwechsel wurde verworfen, weil dann eine
neue fachliche Menge ohne neue Handlung ausgewählt wäre.

## Managed-Verteiler und Rechte

Der Auslöser „Mitglieder hinzufügen“ liegt im gemeinsamen Mitgliederbereich
und bleibt im Arbeits- wie im Managed-Zustand verfügbar. Nur die Definition im
rechten Abschnitt bleibt geschützt und nennt weiterhin die Zentrale
CRM-Administration als ändernde Stelle. Suche, Auswahl, Zuordnung und
Rückmeldung berühren den geschützten Abschnitt nicht.

Berechtigungen für fremde Verteiler und Mengengrenzen wurden nicht erfunden.
Ebenso bleibt die Kontakterlaubnis sichtbar, sperrt die Mitgliedschaft aber
nicht, solange fachlich nur der spätere Versand ausschließt. Alle drei Punkte
sind in `BEFUNDE-offen.md` festgehalten.

## Weitere getragene Einstiege

Der feste Quellkontext kann später auch Ansprechpersonen einer Institution oder
Teilnehmende einer Veranstaltung liefern. Der feste Zielkontext trägt weitere
Mitgliederlisten. Diese Einstiege entstehen in diesem Bauabschnitt nicht; sie
benötigen aber weder eine neue Komponente noch andere Mengenbegriffe.

## Warum der Bedarf vorher nicht sichtbar war

Die Kontaktliste bot nur Export, die Teilnehmendenliste nur Anschreiben und das
Verteilerdetail nur drei feste Kontaktcheckboxen. Erst die gemeinsame
Zuordnungsaufgabe zeigte, dass das wiederkehrende Muster nicht die jeweilige
Fachhandlung, sondern eine bezifferte Sammelaktion mit nachfolgender Wahl ist.
Die kleinen Listen hatten außerdem keine Notwendigkeit, aktuelle Seite und
gesamte Filtermenge sprachlich zu trennen.

## Wo eine lokale Lösung verlockend war

Naheliegend wären ein zweiter Kontaktpicker nur im Verteilerdetail, ein
zusätzlicher Einzelknopf neben dem Export oder ein stilles „alle Treffer“ hinter
der Kopfcheckbox gewesen. Das hätte zwei Denkmodelle und eine gefährliche
Mengenmehrdeutigkeit erzeugt. Deshalb liegen Auswahlzustand, Dialogmechanik und
Zuordnungsablauf im System; die Screens liefern nur festen Kontext und die
anschließende Aktualisierung ihrer Tabelle.

## Zustände und Tragfähigkeit

Styleguide und Vertrag dokumentieren bereit, lädt, leer, technisch
fehlgeschlagen, keine Auswahl, bereits enthalten, wird ausgeführt und Erfolg.
Ein vollständig geschützter Zuordnungsfall wird wegen der offenen Rechtefrage
nicht simuliert. Bereits enthaltene Kontakte bleiben lesbar, dürfen Teil der
angeforderten Menge sein und werden vor und nach der Ausführung getrennt
ausgewiesen.

Die Komposition ist tragfähig, weil Datenmenge, Seitenmenge, feste Quelle und
festes Ziel unabhängige Vertragsteile sind. Ein dritter Sammelaktionseintrag,
ein institutioneller Einstieg oder eine andere Seitengröße erfordern kein
neues Interaktionsmuster.

## Prüfung

Die Ergebnisse der statischen, Offline-, Breiten-, Klick- und Tastaturprüfung
werden nach der abschließenden Runde hier festgehalten.
