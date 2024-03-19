"use strict";
class CellulareRicaricabile {
    constructor(creditoIniziale) {
        this.credito = creditoIniziale;
        this.numeroChiamate = 0;
    }
    effettuaChiamata(minuti) {
        const costoPerChiamata = 0.20; // costo in euro per minuto
        const costoTotale = costoPerChiamata * minuti;
        if (costoTotale <= this.credito) {
            this.credito -= costoTotale;
            this.numeroChiamate++;
            console.log(`Chiamata effettuata per ${minuti} minuti. Costo: €${costoTotale.toFixed(2)}`);
        }
        else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }
    ricarica(ammontare) {
        this.credito += ammontare;
        console.log(`Ricarica effettuata. Nuovo credito: €${this.credito.toFixed(2)}`);
    }
    chiama404() {
        console.log(`Credito disponibile: €${this.credito.toFixed(2)}`);
        return this.credito;
    }
    getNumeroChiamate() {
        console.log(`Numero di chiamate effettuate: ${this.numeroChiamate}`);
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        console.log("Numero di chiamate azzerato.");
    }
}
// Creo due utenti standard
let utente1 = new CellulareRicaricabile(20);
let utente2 = new CellulareRicaricabile(15);
// Ricarico i telefoni
utente1.ricarica(20);
utente2.ricarica(15);
// Effettuo chiamate
utente1.effettuaChiamata(5);
utente2.effettuaChiamata(10);
utente1.effettuaChiamata(3);
//  il credito residuo e il numero di chiamate
utente1.chiama404();
utente2.chiama404();
utente1.getNumeroChiamate();
utente2.getNumeroChiamate();
// Azzero le chiamate per il primo utente e verifico
utente1.azzeraChiamate();
utente1.getNumeroChiamate();
