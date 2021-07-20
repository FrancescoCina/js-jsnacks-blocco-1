/* 

SNACK : Invece di modificare il peso con un prompt, proviamo a farlo con un input. Avremo bisogno di un bottone...
*/


// Prendo elementi HTML dalla pagina

var displayObject = document.getElementById("display");
var inputWeight = document.getElementById("change-weight");
var buttonWeight = document.getElementById("submit-weight");
var displayWeightChanged = document.getElementById("weight-changed");

// Dichiaro oggetto 

var ball = {
    nome: "palla",
    peso: 10,
}


// Stampo in HTML

printObjectinHTML(ball, displayObject);


buttonWeight.addEventListener("click", function () {


    var weightValue = inputWeight.value;

    if (!weightValue || isNaN(weightValue) || weightValue.trim() === "") {
        alert("I dati inseriti non sono validi");
        return;
    }

    // modifico la proprietà peso all'interno dell'oggetto
    ball.peso = weightValue;
    console.log(ball.peso);

    // Stampo in HTML dopo modifica peso dell'utente

    printObjectinHTML(ball, displayWeightChanged);

    displayObject.classList.add("d-none");

})



// FUNCTION DECLARATION

function printObjectinHTML(object, displayElement) {
    var currentElement = "";
    for (var key in object) {
        currentElement += key + " " + object[key] + "<br>";
    }
    displayElement.innerHTML = currentElement
}


