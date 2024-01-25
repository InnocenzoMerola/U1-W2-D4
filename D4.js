/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function (l1, l2) {
  let rectangleArea = l1 * l2;
  return rectangleArea;
};

const result = area(4, 6);
console.log("Es. 1: ", result);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
};

const sumValue = crazySum(2, 20);
console.log("Es. 2: ", sumValue);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (number) {
  if (number > 19) {
    return Math.abs((number - 19) * 3);
  } else if (number <= 19) {
    return Math.abs(number - 19);
  }
};

const differenceValue = crazyDiff(21);
console.log("Es. 3: ", differenceValue);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  if (n >= 20 && n <= 100) {
    return true;
  } else if (n === 400) {
    return true;
  } else {
    return false;
  }
};
const resultBou = boundary(45);
console.log("Es. 4: ", resultBou);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (string) {
  if (string.startsWith("EPICODE")) {
    return string;
  } else {
    return "EPICODE " + string;
  }
};
const firstWord = epify("il covo dei developer");
console.log("Es. 5: ", firstWord);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (n) {
  if ((n > 0 && n % 3 === 0) || (n > 0 && n % 7 === 0)) {
    return true;
  } else {
    return false;
  }
};
const multiple3And7 = check3and7(63);
console.log("Es. 6: ", multiple3And7);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (newString) {
  return newString.split("").reverse().join("");
};

const reverseResult = reverseString("BUONGIORNO");
console.log("Es. 7: ", reverseResult);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (stringCut) {
  return stringCut.slice(1, stringCut.length - 1);
};
console.log("Es. 9: ", cutString("Developer"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (n) {
  const myArray = [];
  for (let i = 0; i < n; i++) {
    myArray.push(Math.floor(Math.random() * 10));
  }
  return myArray;
};

const relRandNum = giveMeRandom(15);
console.log("Es. 10: ", relRandNum);
