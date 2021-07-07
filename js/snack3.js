/*
 Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

// PASSAGGI
/*
1- definisci array nomi;
2- definisci array cognomi;
3- definire array invitati vuota;
3- genera "contatore" random;
4- targettizza array attraverso "contatore" random;
5- somma le due stringhe di nome e cognome;
6- finchè la lunghezza della lista è inferiore a 4 posso procedere
7- se la lista di invitati non include il fullname generato dalla somma di nome+cognome 
8- allora pusho;
*/


var listInvitations = [""];

var names = ["Francesco", "Luigi", "Andrea"];
console.table(names);
var surnames = ["Cina", "Rossi", "Bianchi"];
console.table(surnames);

while (listInvitations.length <= 3) {

    var numb1 = Math.floor(Math.random() * names.length);
    var numb2 = Math.floor(Math.random() * surnames.length);

    var randomName = names[numb1];
    var randomSurname = surnames[numb2];

    var fullname = randomName + " " + randomSurname;

    if (!listInvitations.includes(fullname)) {
        listInvitations.push(fullname);
    }
}
console.table(listInvitations);