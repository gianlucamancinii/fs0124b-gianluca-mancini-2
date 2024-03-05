/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Number: rappresenta numeri interi o decimali,
si distingue poichè vengono rappresentati numeri e non sono all'interno di apostrofi o virgolette;
es: let numerointero = 3;
    let numerodecimale = 3.5;
    
    String: rappresenta sequenze di caratteri, testi,
    si distingue poichè la parolao il testo è definito all'interno di apostrofi o virgolette;
es: let nome = "Mario";
    let testo = 'Ciao, come stai?';
    
    Boolean: Rappresenta valori di verità, ovvero 'True' o 'False',
    utilizzato per creare meccanismo on/off, si distingue poichè non e compreso tra apostrofi o virgolette
    es: let vero = true;
        let falso = false; 
        
    Array: rappresenta una lista di elementi come numeri, per salvare dati e circoscriverli all'interno delle caratteristiche parentesi quadre;
    es: let numeri =[1,2,3,4,5];
        let frutta = ["Mela","Banana","Arancia"];
        
    Object:rappresenta una lista di coppie chiavi e valori, caratterizzate dalla circoscrizione all'interno di parentesi graffe;
    es: let persona = {
        nome: "Mario",
        eta: 30,
        lavoro: "meccanico"
};
 */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* let myName = "Gianluca";
 */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* let addizione = 12 + 20;

console.log(addizione);  // per il risultato sulla console
 */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x = 12;
 */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*// Dichiarazione di una variabile con let
let myName = "Gianluca";
console.log(Gianluca); 

// Riassegnazione di un nuovo valore alla variabile 
myName = "NewName";
console.log(myName);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* let x = 12;
let sottrazione = 4 - x;

console.log(sottrazione); // uscirà -8 
 */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* 
let name1 = "john";
let name2 = "John";

// Verifichiamo che name1 sia diverso da name2
let diverse = name1 !== name2;

console.log("diverse:", diverse);  // uscirà fuori: true

// Verifica che l'uguaglianza diventi true se entrambe vengono trasformate in lowercase
let UgualiDopoLowercase = name1.toLowerCase() === name2.toLowerCase();

console.log("Uguali dopo lowercase:", ugualiDopoLowercase);  // uscirà: true

// Verifica che name2 sia rimasto inalterato
console.log("name2 originale:", name2); // apparirà lo stesso nome invariato
 */
