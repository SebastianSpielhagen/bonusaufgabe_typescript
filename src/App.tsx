
import './App.css'

function App() {
    class Schueler {
        noten: { [fach: string]: (number | string | undefined)[] };

        constructor(
            public vorname: string,
            public nachname: string,
            public alter: number,
            noten: { [fach: string]: (number | string | undefined)[] }
        ) {
            this.noten = noten;
        }

        noten_ausgeben(): void {
            const nameLength = this.vorname.length + this.nachname.length + this.alter.toString().length + 4;
            const separator = "=".repeat(nameLength);

            console.log(`${this.vorname} ${this.nachname} (${this.alter})`);
            console.log(separator);

            for (const fach in this.noten) {
                console.log(`${fach}: ${this.noten[fach].map(n => (n === undefined ? "*" : n)).join(", ")}`);
            }

            console.log();
        }

        durchschnittsnote_berechnen(): number {
            let summe = 0;
            let anzahlNoten = 0;

            for (const fach in this.noten) {
                for (const note of this.noten[fach]) {
                    if (typeof note === "number") {
                        summe += note;
                        anzahlNoten++;
                    }
                }
            }

            if (anzahlNoten === 0) {
                return 0;
            }

            return summe / anzahlNoten;
        }

        static schueler_liste_ausgeben(schuelerListe: Schueler[]): void {
            for (const schueler of schuelerListe) {
                schueler.noten_ausgeben();
                const durchschnittsnote = schueler.durchschnittsnote_berechnen();
                console.log(`Durchschnittsnote: ${durchschnittsnote.toFixed(2)}`);
                console.log();
            }

            const gesamtDurchschnittsnote = Schueler.gesamt_durchschnittsnote_berechnen(schuelerListe);
            console.log(`Gesamtdurchschnittsnote: ${gesamtDurchschnittsnote.toFixed(2)}`);
        }

        static gesamt_durchschnittsnote_berechnen(schuelerListe: Schueler[]): number {
            let summe = 0;
            let anzahlNoten = 0;

            for (const schueler of schuelerListe) {
                for (const fach in schueler.noten) {
                    for (const note of schueler.noten[fach]) {
                        if (typeof note === "number") {
                            summe += note;
                            anzahlNoten++;
                        }
                    }
                }
            }

            if (anzahlNoten === 0) {
                return 0;
            }

            return summe / anzahlNoten;
        }
    }

    const schuelerListe = [
        new Schueler("Anton", "Meier", 16, {
            Sport: [1, 4, 3, 1, "A", undefined, 1, 2],
            Kunst: ["A", undefined, 1],
            Mathe: ["A", 1, undefined, 3, 2, 4, 5]
        }),
        new Schueler("Berta", "Müller", 17, {
            Sport: ["A", undefined, 1],
            Kunst: [3, 2, 4, 5],
            Mathe: [1, 2, "A"]
        }),
        new Schueler("Cäsar", "Schmidt", 17, {
            Sport: ["A", 1, undefined, 3, 2, 4, 5],
            Kunst: [3, 2, 4, 5],
            Mathe: [1, 2, "A"]
        })
    ];

    Schueler.schueler_liste_ausgeben(schuelerListe);
}

export default App
