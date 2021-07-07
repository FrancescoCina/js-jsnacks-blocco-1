/*
Chiedi un numero all'utente, se è pari stampa il numero,
se è dispari stampa il numero successivo.
*/


/*
1- fai prompt per l'utente in cui si chiede un numero;
2- if pari, stampa;
3- if dispari (%2 !== 0), stampa numero +1;
4- inserisci validazione a monte;
*/


var displayNumber = document.getElementById("number");

do {
    var userNumber = parseInt(prompt("Scegli un numero"));
} while (isNaN(userNumber));


if (userNumber % 2 === 0) {
    console.log(userNumber);
    displayNumber.innerHTML = userNumber;
} else {
    console.log(userNumber + 1);
    displayNumber.innerHTML = userNumber + 1;
}