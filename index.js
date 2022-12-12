/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  return l1 * l2;
}

let result = area(5, 4);
console.log(result);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(x, y) {
  if (x != y) {
    return x + y;
  } else if (x === y) {
    return (x + y) * 3;
  }
}

let risultato = crazySum(10, 10);
console.log(risultato);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(x) {
  if (x < 19) {
    return Math.abs(x - 19);
  } else if (x > 19) {
    return Math.abs(x - 19) * 3;
  }
}

let risultato3 = crazyDiff(14);
console.log(risultato3);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è c
 ompreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(x) {
  if ((x >= 20 && x <= 100) || x === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(15));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(str) {
  if (str.startsWith("EPICODE")) {
    return str;
  } else {
    return "EPICODE " + str;
  }
}

let frase = epify("EPICODE dove vai");
console.log(frase);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(x) {
  return x % 3 || x % 7;
}

console.log(check3and7(3));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(invertimi) {
  return invertimi.split("").reverse().join("");
}

let inverso = reverseString("EPICODE");
console.log(inverso);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str) {
  let separateWord = str.toLowerCase().split(" ");
  for (let i = 0; i < separateWord.length; i++) {
    separateWord[i] =
      separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
  }
  return separateWord.join(" ");
}

console.log(upperFirst("ciao mi chiamo marco"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {
  let withoutFirstAndLast = str.slice(1, -1);
  return withoutFirstAndLast;
}

withoutFirstAndLast = cutString("EPICODE");
console.log(withoutFirstAndLast);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n,
e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
  if (typeof n !== "number") {
    return "nessun numero";
  }
}

let arrayNumbers = giveMeRandom(6);
console.log(arrayNumbers);
