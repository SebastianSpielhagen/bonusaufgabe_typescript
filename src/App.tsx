
import './App.css'

function App() {
    class Schueler {
        constructor(
            public vorname: string,
            public nachname: string,
            public alter: number,
            public noten: (number | string | undefined)[]
        ) {}

        noten_ausgeben(): void {
            const nameLength = this.vorname.length + this.nachname.length + this.alter.toString().length + 4;
            const separator = "=".repeat(nameLength);

            console.log(`${this.vorname} ${this.nachname} (${this.alter})`);
            console.log(separator);
            console.log("Grades: " + this.noten.map(n => (n === undefined ? "*" : n)).join(", "));
            console.log();
        }

        static schueler_liste_ausgeben(schuelerListe: Schueler[]): void {
            for (const schueler of schuelerListe) {
                schueler.noten_ausgeben();
            }
        }
    }

    const schuelerListe = [
        new Schueler("Anton", "Meier", 16, [1, 4, 3, 1, "A", undefined, 1, 2]),
        new Schueler("Berta", "Müller", 17, ["A", undefined, 1]),
        new Schueler("Cäsar", "Schmidt", 17, ["A", 1, undefined, 3, 2, 4, 5])
    ];

    Schueler.schueler_liste_ausgeben(schuelerListe);
}

export default App
