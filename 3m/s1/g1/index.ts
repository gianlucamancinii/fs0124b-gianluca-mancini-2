interface Smartphone {
    credito: number;
    numeroChiamate: number;

    effettuaChiamata(minuti: number): void;
    ricarica(ammontare: number): void;
}

class CellulareRicaricabile implements Smartphone {
    credito: number;
    numeroChiamate: number;

    constructor(creditoIniziale: number) {
        this.credito = creditoIniziale;
        this.numeroChiamate = 0;
    }

    effettuaChiamata(minuti: number): void {
        const costoPerChiamata = 0.20; // costo in euro per minuto
        const costoTotale = costoPerChiamata * minuti;

        if (costoTotale <= this.credito) {
            this.credito -= costoTotale;
            this.numeroChiamate++;
            console.log(`Chiamata effettuata per ${minuti} minuti. Costo: €${costoTotale.toFixed(2)}`);
        } else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }

    ricarica(ammontare: number): void {
        this.credito += ammontare;
        console.log(`Ricarica effettuata. Nuovo credito: €${this.credito.toFixed(2)}`);
    }
}

class User implements Smartphone {
    nome: string;
    cognome: string;
    credito: number;
    numeroChiamate: number;

    constructor(nome: string, cognome: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
    }

    ricarica(ammontare: number): void {
        this.credito += ammontare;
        console.log(`Ricarica effettuata. Nuovo credito: €${this.credito.toFixed(2)}`);
    }

    effettuaChiamata(minuti: number): void {
        const costoPerChiamata = 0.20; // costo in euro per minuto
        const costoTotale = costoPerChiamata * minuti;

        if (costoTotale <= this.credito) {
            this.credito -= costoTotale;
            this.numeroChiamate++;
            console.log(`Chiamata effettuata per ${minuti} minuti. Costo: €${costoTotale.toFixed(2)}`);
        } else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }

    chiama404(): number {
        console.log(`Credito disponibile: €${this.credito.toFixed(2)}`);
        return this.credito;
    }

    getNumeroChiamate(): number {
        console.log(`Numero di chiamate effettuate: ${this.numeroChiamate}`);
        return this.numeroChiamate;
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
        console.log("Numero di chiamate azzerato.");
    }
}

// Creo due utenti standard
let utente1: User = new User("Gianluca", "Mancini");
let utente2: User = new User("Michele", "Tedesco");

// Ricarico i telefoni
utente1.ricarica(20);
utente2.ricarica(15);

// Effettuo chiamate
utente1.effettuaChiamata(5);
utente2.effettuaChiamata(10);
utente1.effettuaChiamata(3);

// Il credito residuo e il numero di chiamate
utente1.chiama404();
utente2.chiama404();

utente1.getNumeroChiamate();
utente2.getNumeroChiamate();

// Azzero le chiamate per il primo utente e verifico
utente1.azzeraChiamate();
utente1.getNumeroChiamate();
