# Briefing – CRM Stadt Heidelberg

Abgeleitet aus der Nutzersession zum Altsystem CAS genesisWorld
(Wirtschaftsförderung, OB-Referat, Kulturamt).

Dieses Dokument beschreibt **Nutzende, Aufgaben und Schmerzpunkte** –
bewusst keine Lösungen. Navigation, Informationsarchitektur, Seitenaufbau
und Interaktionsmuster sind ausdrücklich **nicht** vorgegeben und Teil
des Entwurfs.

> **Wichtig für Codex:** Abschnitt 5 beschreibt das Altsystem. Er ist als
> Problembeschreibung zu lesen, nicht als Vorlage. Ein Entwurf, der die
> Struktur von CAS nachbaut, verfehlt den Auftrag.

---

## 1. Kontext
Die Stadt Heidelberg löst gewachsene, ämterspezifische Kontaktverwaltung
durch ein gemeinsames CRM ab. Heute arbeiten mehrere Ämter in einem
CAS-genesisWorld-Mandanten mit teils denselben Kontakten, aber
unterschiedlichen Fachaufgaben und Berechtigungen. Daneben laufen Aufgaben
in Fremdsystemen, weil das CRM sie nicht abdeckt (Newsletterversand über
KommOne, Unternehmensbefragung über einen externen Dienstleister mit
LimeSurvey).

Beteiligte Ämter in dieser Session:
- **Wirtschaftsförderung** – Unternehmenskontakte, Branchentreffen,
  Netzwerkveranstaltungen, Unternehmensbefragung
- **OB-Referat** – eigene Kontakte, teils dieselben Firmen
- **Kulturamt** – Kulturschaffende, Kult:Karte, Zuschüsse und Fördertöpfe

## 2. Nutzende und ihre Arbeitsrealität
Sachbearbeitende und Referatsmitarbeitende der Fachämter. Kein IT-Personal,
sehr unterschiedliche Digitalaffinität, keine nennenswerte Schulungszeit.
Das System ist Arbeitsmittel, nicht Spezialwerkzeug.

Beobachtete Realität, die das Design tragen muss:
- **Telefonate sind ein Kernkanal.** Während des Gesprächs wird gesucht,
  nachgelesen und notiert. Heute erscheint der Kontakt erst *nach* Annahme
  des Anrufs – der Name ist beim Klingeln unbekannt.
- **Notizen sind das Gedächtnis der Abteilung.** Was im Telefonat entschieden
  wurde und Persönliches zur Kontaktperson werden dort für Kolleginnen und
  Kollegen festgehalten, datiert und mit Kürzel. Dieses Feld ist heute ein
  unstrukturierter Textblock am Seitenende – und trotzdem eines der
  wichtigsten Elemente des Systems.
- **Ämterübergreifende Sichtbarkeit ist erwünscht, aber nicht total.**
  Kontakte oder *Teile* von Kontakten sollen gezielt mit anderen Ämtern
  geteilt werden können.


## 3. Die Top-Aufgaben
Als Nutzerziele formuliert, nach Bedeutung aus der Session:

1. **Während eines Telefonats den richtigen Kontakt in Sekunden finden** –
   auch bei unklarer Schreibweise und ohne zu wissen, ob die Person als
   Einzelkontakt oder unter einer Firma erfasst wurde.
2. **In einem Blick verstehen, wo dieser Kontakt steht**: wer zuständig ist,
   was zuletzt besprochen wurde, in welchen Verteilern und Veranstaltungen
   er steckt, welche Zuschüsse laufen, welches Amt ihn noch betreut.
3. **Nach dem Gespräch eine Notiz hinterlassen**, die Kolleginnen und
   Kollegen später wiederfinden und einordnen können.
4. **Einen Kontakt anlegen, ohne eine Dublette zu erzeugen** – siehe 5.1.
5. **Eine Veranstaltung durchführen**: Einladung an einen oder mehrere
   Verteiler, Anmeldungen entgegennehmen, Anmeldestatus überblicken
   (offen, bestätigt, Warteliste, abgelehnt, storniert), Warteliste
   nachrücken lassen, alle Angemeldeten anschreiben.
6. **Zuschüsse pro Kontakt führen und auswerten**: Betrag pro Jahr und
   Fördertopf plus Gesamtübersicht (Kulturamt).
7. **Den Unternehmensbestand auswerten**: wie viele Unternehmen pro Branche,
   wann zuletzt aktualisiert, wer sollte zur Datenaktualisierung
   angeschrieben werden.
8. **Eine Firma pflegen** mit Ansprechpersonen, Branche, Konzernstruktur,
   Schlagworten und der Frage, welches Amt zuständig ist.

## 4. Fachliche Besonderheiten
- **Kontakttypen**: Personen, Firmen und Personen *an* Firmen. Beziehungen
  sind mehrstufig (Ansprechperson → Firma → Konzernstruktur; Kulturschaffende
  → Sparte → Kult:Karten-Kategorie).
- **Erlaubte Kontaktkanäle** pro Kontakt (E-Mail, Post, Telefon, SMS) und
  Datenschutzstatus (Hinweis erfolgt ja/nein) sind pflegepflichtige,
  handlungsleitende Information – kein Nebenfeld.
- **Zuständigkeit**: jeder Kontakt hat ein verantwortliches Amt und eine
  verantwortliche Person.
- **Verteiler** sind langlebige Objekte mit eigenem Status
  („in Vorbereitung"), eigenen Zugriffsberechtigten und Mitgliedern.
- **Zuschüsse**: Kontakt × Jahr × Fördertopf, mit Summenbildung.
- **Nachvollziehbarkeit**: erzeugt am / von, geändert am / von.

## 5. Schmerzpunkte des Altsystems (Problembeschreibung, keine Vorlage)

**5.1 Dubletten durch Typentscheidung vorab.** Beim Anlegen muss zuerst
entschieden werden: Firma, Einzelkontakt oder Kontakt an einer Firma – bevor
klar ist, was schon existiert. Fachlich ist das gelöst; für
diese Entwürfe nur als Hintergrund relevant.

**5.2 Pflichtfelder fehlen.** Datensätze entstehen unvollständig; niemand
merkt es, bis der Serienbrief scheitert.

**5.3 Umwege für alltägliche Dinge.** Eine Mail an alle Angemeldeten einer
Veranstaltung ist nur über das Reportmodul möglich. Newsletter gehen gar
nicht und laufen deshalb außerhalb des Systems.

**5.4 Ein Template für alle.** Anmeldebestätigungen existieren nur einmal
für sämtliche Ämter – Kulturamt und Wirtschaftsförderung schreiben mit
derselben Stimme.

**5.5 Doppelte Adressen beim Mehrfachversand.** Beim Versand an mehrere
Verteiler entstehen Doppelungen, die Nutzende manuell auflösen müssen.

**5.6 Kein Kontext beim eingehenden Anruf.**

**5.7 Getrennte Passwörter.** Anmeldung soll über SSO laufen.

## 5b. Feeling – worauf es in dieser Runde ankommt

Diese Runde sucht keine Funktionslösung, sondern eine **Haltung**. Die Frage
ist nicht „kann man damit arbeiten", sondern: Wie fühlt es sich an, acht
Stunden am Tag darin zu arbeiten? Was denkt jemand in den ersten fünf
Sekunden? Wirkt es wie ein Werkzeug, das die eigene Arbeit ernst nimmt –
oder wie eine Fachanwendung, die man erträgt?

Anker für den Entwurf:
- Verwaltungssoftware ist berüchtigt dafür, sich billig, grau und
  gleichgültig anzufühlen. Genau das ist hier der Gegner.
- Gleichzeitig ist Verspieltheit fehl am Platz. Gesucht ist die Mitte:
  ruhig, präzise, wertig, erwachsen. Ein Werkzeug mit Selbstachtung.
- Die Stadt Heidelberg hat ein starkes CD. Es soll erkennbar sein, ohne
  dass die Oberfläche wie eine Broschüre wirkt.


Adjektive, die passen: natürlich, intuitiv, schnell
Adjektive, die es nicht sein darf: altbacken, überladen
Stimmungsanker: kompetent

Konkret bewertet wird in dieser Runde unter anderem:
Typografie und Lesbarkeit über lange Arbeitstage, Rhythmus und Dichte,
Umgang mit langen Listen, Übergänge zwischen Screens, Zustände (leer, lädt,
kein Zugriff), Mikrointeraktionen, Fokus- und Hoverzustände, die Frage wie
eine Notiz aussieht, die jemand in drei Sekunden im Telefonat tippt.

## 6. Zu entwerfende Screens

Umfang, Inhalte und Begriffe stehen in `input/SCREEN-INVENTAR.md` – abgeleitet
aus dem bestehenden klickbaren Prototypen. Der Prototyp klärt, *was* es gibt.
Dieser Entwurf klärt, *wie es sich anfühlt*.

Für alle Varianten identisch, damit sie vergleichbar bleiben:

1. **Einstieg / Arbeitsbereich** – der erste Moment nach dem Anmelden.
   Was sieht jemand, der gerade das Telefon abgenommen hat oder aus einer
   Besprechung kommt?
2. **Kontaktliste** – der meistbenutzte Screen. Suche, Filter, Treffer,
   Übergang ins Detail.
3. **Kontakt-Detail (360°)** – der inhaltlich dichteste Screen: Stammdaten,
   Zuständigkeit, Beziehungen, Notizverlauf, Teilnahmen, Zuschüsse.
   Hier entscheidet sich, ob ein Entwurf trägt.
4. **Veranstaltung mit Anmeldungen** – Statusverteilung, Warteliste,
   Teilnehmende.
5. **Mailing an Verteiler** – Empfänger, Personalisierung, Vorschau.

Dazu drei Zustände, verteilt über die Screens (nicht als eigene Seiten):
leeres Ergebnis, Ladezustand, kein Zugriff (Kontakt gehört einem anderen Amt).

**Formulare und Sonderfälle sind hier bewusst nachrangig.** Die
Dublettenprüfung, die Kontaktanlage und die Berechtigungslogik sind fachlich
gelöst und im Prototypen abgebildet – sie müssen in diesen Entwürfen nicht
durchdekliniert werden. Wenn ein Entwurf dazu eine bessere Idee hat, gern
als Skizze; Pflicht ist es nicht.

## 7. Harte Randbedingungen
- CD-Farben aus `input/tokens.css` (Ableitungen erlaubt, siehe dort)
- Typografie: noto sans ist die zu verwendende Hausschrift.
- BITV 2.0 / WCAG 2.1 AA
- Deutsch, Sie-Form, Verwaltungskontext
- Primär Desktop, ab 1280px optimal, ab 1024px nutzbar

## 8. Explizit NICHT vorgegeben

 Spacing-System, Navigationsmuster, Informationsarchitektur,
Komponentenstil, Dichte, Dark Mode, Iconografie, Interaktionsmuster,
Reihenfolge und Gruppierung der Inhalte im Detailscreen, Umgang mit
Kontakttypen.
