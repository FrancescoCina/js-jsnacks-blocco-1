/*
 Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
*/

// PASSAGGI
/*
1- crea primo array 5 numeri;
2- crea secondo array 7 numeri;
3- crea elementi random;
4- pusha elementi random nell'array che ha meno elementi;
*/


var firstArr = [3, 65, 76, 23, 98];
var secondArr = [1, 45, 76, 88, 22, 43, 63];

while (firstArr.length !== secondArr.length) {
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    if (firstArr.length > secondArr.length) {
        secondArr.push(randomNumber);
    } else {
        firstArr.push(randomNumber);
    }
}

console.table(firstArr);
console.table(secondArr);


// STAMPA HTML 
// Primo Array

var displayFirstList = document.getElementById("first-list-numbers");

var listItem = "";

for (i = 0; i < firstArr.length; i++) {
    listItem += "<li>" + firstArr[i] + "</li>";
}

displayFirstList.innerHTML = listItem;

// Secondo Array
var displaySecondList = document.getElementById("second-list-numbers");


var listItem = "";

for (i = 0; i < secondArr.length; i++) {
    listItem += "<li>" + secondArr[i] + "</li>";
}

displaySecondList.innerHTML = listItem;