# Offene Befunde aus der Klickprüfung

Geprüft wurden die sieben Fachscreens und eine frische Kopie von
`screens/_vorlage.html`. Die gemeinsame Hülle, ihre Suche, Navigation, Hilfe,
Toasts und Icon-Nachzeichnung wurden in dieser Runde repariert. Die folgenden
Punkte sind fachlich oder screenspezifisch und wurden bewusst nicht erfunden.

## Umsetzung

1. **Veranstaltung / Absagen und Löschen:** Offen ist, was beim Löschen oder
   Absagen einer Veranstaltung mit Teilnahmen, Anmeldelink und bereits
   versendeten Bestätigungen geschehen soll.
2. **Kontakte / Exportieren — keine Reaktion:** „Auswahl exportieren“ wird nach einer Auswahl
   aktiv, und „Alle Treffer exportieren“ ist immer aktiv; beide Schaltflächen
   lösen noch keinen Export oder eine Rückmeldung aus.
3. **Kontakte / Kontakt erfassen — keine Reaktion:** Die Schaltfläche öffnet noch keine
   Erfassung und gibt keine Rückmeldung.
4. **Kontakte / Weitere Filter — keine erkennbare Wirkung:** Die Amtsauswahl lässt sich verändern, aber
   „Übernehmen“ schließt das Menü nicht und filtert die Liste nicht.
5. **Kontakte / Kontaktvorschau — falsch/ohne Wirkung:** Die Vorschau-Schaltflächen ab dem zweiten
   Eintrag reagieren nicht. Ein Klick auf eine Tabellenzeile wählt ebenfalls
   keine Vorschau; Leertaste und Enter ändern nur die Zeilenmarkierung, nicht
   den angezeigten Kontakt.
6. **Kontakt-Detail / Verlauf — keine Reaktion:** „Ältere Einträge anzeigen“ hat noch keine
   erkennbare Wirkung.
7. **Veranstaltung / Teilnehmende — keine Reaktion:** „Auswahl anschreiben“ wird nach einer
   Auswahl aktiv, führt aber noch nicht in einen Versandprozess und gibt keine
   Rückmeldung.
8. **Veranstaltung / Warteliste — keine Reaktion:** Die drei Schaltflächen „Platz anbieten“
   haben noch keine Wirkung. Regeln, Frist und Nachricht des Angebots sind
   fachlich nicht festgelegt.
9. **Veranstaltungsübersicht / Detailziele — falsches Ziel:** Alle Veranstaltungstitel führen
   auf dieselbe Detailseite „Branchendialog Kreativwirtschaft“, auch wenn eine
   andere Veranstaltung gewählt wurde.
10. **Mailing / Empfängerkreis — keine erkennbare Wirkung:** Das Abwählen eines Verteilers verändert weder
    eindeutige noch tatsächliche Empfängerzahl und wirkt sich nicht auf die
    folgenden Prozessschritte aus.
11. **Mailing / Versandbeleg — keine Reaktion:** „Beleg herunterladen“ löst noch keinen Download
    oder eine Rückmeldung aus.
12. **Mailing / Anmeldelink — keine Reaktion:** „Persönliche Anmeldung öffnen“ hat in der
    Empfängervorschau noch keine Wirkung.
13. **Globale Suche / Trefferziele — falsches Ziel:** Mehrere konkrete Treffer, darunter
    „Dr. Aylin Yılmaz“ und einzelne Veranstaltungen, führen nur zur jeweiligen
    Übersicht statt zum gewählten Datensatz.

## Design

1. **Mailing / Empfängervorschau — falsche Positionsangabe:** Vor und zurück durchläuft fünf
   Beispielpersonen, die Positionsanzeige behauptet jedoch einen Bestand von
   96 Personen und springt nach „5 von 96“ wieder auf „1 von 96“.
2. **Veranstaltung anlegen / Entwurfsübersicht — keine erkennbare Wirkung:** Änderungen an Titel, Termin,
   Ort, Kapazität und Amt erscheinen nicht in „Entwurf im Überblick“. Es ist
   nicht festgelegt, ob die Zusammenfassung live oder erst nach dem Speichern
   aktualisiert werden soll.
3. **Veranstaltungsübersicht / Belegung — widersprüchliche Farbgebung:** Bei
   einer grünen Belegungsanzeige erscheint der zugehörige Text rot. Die
   Textfarbe muss an den grünen Belegungszustand angeglichen werden, damit
   Anzeige und Beschriftung dieselbe Bedeutung vermitteln.

## Testblocker

Keine offenen Testblocker aus dieser Runde. Die oben genannten fachlichen und
screenspezifischen Lücken sind sichtbar, verhindern aber nicht die Prüfung der
gemeinsamen Hülle.
