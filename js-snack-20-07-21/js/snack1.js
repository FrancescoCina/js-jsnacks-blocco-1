/* 
SNACK 1: /
1. Creare un oggetto palla che abbia le seguenti proprietà.
  Nome = palla
  Peso = 10
2. stampare la palla in pagina*
3. Attraverso un prompt dare la possibilità all’utente di modificare il peso
della palla., poi stampare la palla con il peso modificato
BONUS: stampare la palla tramite una funzione
*/


// Prendo elemento HTML dalla pagina

var displayObject = document.getElementById("display");

// Dichiaro oggetto 

var ball = {
    nome: "palla",
    peso: 10,
}
console.log(ball.nome);

// Stampo in HTML

printObjectinHTML(ball, displayObject);


// Chiedo con prompt modifica del peso

var userWeight = parseInt(prompt("Inserisci il peso modificato della palla.."));



// modifico la proprietà peso all'interno dell'oggetto
ball.peso = userWeight;
console.log(ball.peso);




// Stampo in HTML dopo modifica peso dell'utente

printObjectinHTML(ball, displayObject);



// FUNCTION DECLARATION

function printObjectinHTML(object, displayElement) {
    var currentElement = "";
    for (var key in object) {
        currentElement += key + " " + object[key] + "<br>";
    }
    displayElement.innerHTML = currentElement
}


