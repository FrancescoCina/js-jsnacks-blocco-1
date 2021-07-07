console.log("JS Ok");


/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

/*

1- ciclo for con all'interno il prompt per il numero che deve fornire l'utente;
2- console.log sommando i risultati;
3- stampo in HTML la somma dei numeri;
4- traduci con while;
*/

var displaySum = document.getElementById("sum");

sum = 0;

// CICLO CON FOR

/* for (i = 0; i < 5; i++) {
    var userNumber = parseInt(prompt("Scegli un numero"));
    sum += userNumber;
} */

// CICLO CON WHILE

var i = 0;
while (i < 5) {
    var userNumber = parseInt(prompt("Scegli un numero"));
    sum += userNumber;
    i++;
}



console.log(sum);
displaySum.innerHTML = sum;