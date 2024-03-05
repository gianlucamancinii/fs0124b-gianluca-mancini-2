/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* function trovaNumeroMaggiore(numero1, numero2) {
    let numeroMaggiore;

    if (numero1 > numero2) {
        numeroMaggiore = numero1;
    } else {
        numeroMaggiore = numero2;
    }

    console.log("Il numero più grande è: " + numeroMaggiore);
}

// Esempio di utilizzo
var primoNumero = 5;
var secondoNumero = 10;

trovaNumeroMaggiore(primoNumero, secondoNumero);
*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* function confrontaCon5(numero) {
    if (numero !== 5) {
        console.log("not equal");
    } else {
        console.log("equal to 5");
    }
}

// Esempio di utilizzo 
let numeroDaConfrontare = 7;
confrontaCon5(numeroDaConfrontare);
 */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* 
// Verifica se il numero è divisibile per 5 utilizzando l'operatore modulo 
if numero % 5 == 0:
    console.log(f"Il numero {numero} è divisibile per 5.")
else:
    console.log(f"Il numero {numero} non è divisibile per 5.")
 */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* // Funzione che verifica la condizione
function verificaCondizione(num1, num2) {
    // Verifica se uno dei numeri è 8
    if (num1 === 8 || num2 === 8) {
        console.log("Una delle condizioni è vera.");
    } else {
        // Verifica se l'addizione o la sottrazione è uguale a 8
        if (num1 + num2 === 8 || num1 - num2 === 8 || num2 - num1 === 8) {
            console.log("Una delle condizioni è vera.");
        } else {
            console.log("Nessuna delle condizioni è vera.");
        }
    }
}
 */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* // Saldo totale del carrello dell'utente
let saldoDelCarrello = 65; 

// Costo fisso di spedizione
let costoFissoSpedizione = 10;

// vedere se l'utente ha diritto alla spedizione gratuita
let dirittoSpedizioneGratuita = saldoDelCarrello > 50;

// Calcola l'ammontare totale da addebitare all'utente 
let ammontareDelTotale = dirittoSpedizioneGratuita ? saldoDelCarrello : saldoDelCarrello + costoFissoSpedizione;

// verifica in console
console.log("Totale carrello:", saldoDelCarrello);
console.log("Spedizione gratuita:", dirittoSpedizioneGratuita);
console.log("Ammontare totale da addebitare all'utente:", ammontareDelTotale);
 */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*  */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* 
// Valore fornito
let valoreFornito = "42"; 
// Verifichiamo se è un numero
if (typeof valoreFornito === 'number') {
    console.log("Il valore fornito è un numero.");
} else {
    console.log("Il valore fornito non è un numero.");
}

 */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

//  proprietà "city" con il valore "Toronto"
me.city = 'Toronto';

// oggetto aggiornato
console.log(me);
 */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto',
}

// Rimuovi "lastName"
delete me.lastName;

// oggetto aggiornato
console.log(me);
 */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto',
}

// Rimuovi l'ultimo elemento dall'array nella proprietà "skills"
if (me.skills.length > 0) // lo verifichiamo cosi {
  me.skills.pop();
}

//oggetto aggiornato
console.log(me);
 */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
