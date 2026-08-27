# Routen- und Screen-Inventar des Klickprototyps

Stand: 26.08.2026. Quelle ist ausschließlich der statische Klickprototyp in
`frontend/prototype/`. Dieses Inventar beschreibt keine Produkt- oder
BFF-Routen.

## Aufruf und Konventionen

Der Prototyp verwendet Hash-Routing. Nach `npm run prototype:serve` ist der
Einstieg beispielsweise
`http://localhost:4174/#/arbeitsstart`. Fehlt der Hash, wird
`#/arbeitsstart` angezeigt.

`{uuid}` bezeichnet eine synthetische UUID aus den Prototyp-Fixtures,
`{nummer}` eine Fachfragen-Nummer von 1 bis 16. Query-Parameter wählen nur
einen dargestellten Zustand; sie sind keine eigenständigen Ressourcen.

## Globale Screens

| Kennung | Hash-Route | Zweck |
|---|---|---|
| R01 | `#/uebersicht` | Gesamte Bildschirmübersicht für Abnahmerunden. |
| S01 | `#/arbeitsstart` | Einstieg mit direkter Suche, zuletzt verwendeten Kontakten, Veranstaltungen und Arbeitsstand. |
| F01 | `#/fachfragen` | Druckbare Übersicht aller offenen Fachfragen. |
| F02–F17 | `#/fachfragen/{nummer}` | Detail und Varianten einer Fachfrage (`{nummer}` = 1–16). |

## Kontakte

| Kennung | Hash-Route | Zustände bzw. Inhalt |
|---|---|---|
| K01 | `#/kontakte` | Zuletzt verwendete Kontakte (Einstieg). |
| K01 | `#/kontakte?state=success` | Suchergebnisse. `q` darf den sichtbaren Suchbegriff setzen; `cursor` steht für den weiteren Ergebnisabschnitt. |
| K01b | `#/kontakte?state=empty` | Keine Treffer. |
| K01c | `#/kontakte?state=loading` | Ladezustand. |
| K01d | `#/kontakte?state=error` | Fehlerzustand. |
| K01e / V04 | `#/kontakte?state=selection` | Auswahl mehrerer Kontakte und Sammelaktion „Zu Verteiler hinzufügen“. |
| K02 | `#/kontakte/person/{uuid}` | Detail einer Person, Register „Übersicht“. |
| K02b | `#/kontakte/person/{uuid}/stammdaten` | Person: Stammdaten. |
| K02c | `#/kontakte/person/{uuid}/akte` | Person: Akte. |
| K02d | `#/kontakte/person/{uuid}/datenschutz` | Person: Datenschutz. |
| K03 | `#/kontakte/institution/{uuid}` | Detail einer Institution, Register „Übersicht“. |
| K03 | `#/kontakte/institution/{uuid}/stammdaten` | Institution: Stammdaten. |
| K03 | `#/kontakte/institution/{uuid}/akte` | Institution: Akte. |
| K03 | `#/kontakte/institution/{uuid}/datenschutz` | Institution: Datenschutz. |
| K04 | `#/kontakte/{uuid}/bearbeiten` | Kontakt bearbeiten. |
| K05.1 | `#/kontakte/neu?state=start` | Anlage: Name erfassen. |
| K05.2 | `#/kontakte/neu?state=checking` | Anlage: Dublettenprüfung läuft. |
| K05.3 | `#/kontakte/neu?state=check-error` | Anlage: Prüfungsfehler. |
| K05.4 | `#/kontakte/neu?state=no-duplicates` | Anlage: keine Dubletten. |
| K05.5 | `#/kontakte/neu?state=duplicate` | Anlage: mögliche Dublette. |
| K05.6 | `#/kontakte/neu?state=acknowledged` | Anlage: Kenntnisnahme. |
| K06 | `#/kontakte/{uuid}/kontakterlaubnis` | Kontakterlaubnis bearbeiten. |
| K07 | `#/kontakte/deaktiviert` | Deaktivierte Kontakte. |

Die vier Detail-Register existieren für beide Kontaktarten. Der
Klickprototyp kennt dazu die Typsegmente `person` und `institution`; andere
Typwerte sowie unbekannte UUIDs werden nicht als separate Route validiert.

## Verteiler

| Kennung | Hash-Route | Zustände bzw. Inhalt |
|---|---|---|
| V01 | `#/verteiler` oder `#/verteiler?state=success` | Gefüllte Verteilerübersicht. |
| V01a | `#/verteiler?state=loading` | Ladezustand. |
| V01b | `#/verteiler?state=empty` | Leere Übersicht. |
| V01c | `#/verteiler?state=error` | Fehlerzustand. |
| V02 | `#/verteiler/{uuid}` | Detail eines Arbeitsverteilers. |
| V03 | `#/verteiler/{uuid}` | Detail eines Managed-Verteilers. |
| V05 | `#/verteiler/neu` | Arbeitsverteiler anlegen. |

Die Sammelaktion V04 ist die Kontakt-Route
`#/kontakte?state=selection`. Ein Verteilerdetail kann mit
`#/mailing?step=1&distribution={uuid}` in das Mailing übergeben werden.

## Veranstaltungen

| Kennung | Hash-Route | Zustände bzw. Inhalt |
|---|---|---|
| E01 | `#/veranstaltungen` oder `#/veranstaltungen?state=success` | Gefüllte Veranstaltungsübersicht. |
| E01a | `#/veranstaltungen?state=loading` | Ladezustand. |
| E01b | `#/veranstaltungen?state=empty` | Leere Übersicht. |
| E01c | `#/veranstaltungen?state=error` | Fehlerzustand. |
| E02 / E03 | `#/veranstaltungen/{uuid}` | Veranstaltungsdetail mit Teilnehmenden. |
| E02e | `#/veranstaltungen/{uuid}` | Veranstaltungsdetail ohne Teilnehmende. |
| E04 | `#/veranstaltungen/{uuid}/bearbeiten` | Veranstaltung bearbeiten. |
| E05 | `#/veranstaltungen/neu` | Fachlich blockierter Anlegeentwurf, ohne Erfolgspfad. |

`page=2` ist ein im Prototyp verlinkter Darstellungsparameter der Übersicht;
er ändert derzeit nicht die angezeigten Fixtures.

## Mailing

| Kennung | Hash-Route | Zustände bzw. Inhalt |
|---|---|---|
| M01 | `#/mailing`, `#/mailing?step=1` | Vorlage und Empfängerkreis. Optional: `distribution={uuid}`, `template={uuid}`. |
| M01a | `#/mailing?state=loading` | Grundlagen laden. |
| M01b | `#/mailing?state=empty` | Keine Vorlagen. |
| M01c | `#/mailing?state=error` | Fehler beim Laden der Grundlagen. |
| M02 | `#/mailing?step=2` | Inhalt bearbeiten und ausgeschlossene Empfänger prüfen. |
| M03 | `#/mailing?step=3` | Testversand als Diskussionsansicht. |
| M04 | `#/mailing?step=4` | Testnachweis als Diskussionsansicht. |
| M05 | `#/mailing?step=5` | Echtversand bestätigen. |
| M06 | `#/mailing?step=6` | Abhängiger Versandbeleg; kein realer Versand. |

## Auflösung außerhalb des Inventars

Nicht zugeordnete Pfade führen auf „Seite nicht gefunden“. Die dynamischen
Matcher validieren die synthetischen IDs jedoch nicht: unbekannte UUIDs werden
mit Fixture-Fallbacks dargestellt, und eine unbekannte Fachfragen-Nummer zeigt
Fachfrage 1. Diese tolerante Auflösung ist nur Verhalten des statischen
Entwurfs, keine zusätzliche fachliche Route.

Der Prototyp hat keine Login-, API- oder Produkt-Routen; Rollen und
Versandberechtigung werden ausschließlich über Bedienelemente im Prototyp
simuliert, nicht über die URL.
