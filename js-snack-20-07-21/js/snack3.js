/*
SNACK: Creiamo un array di oggetti contenente 3 squadre di calcio con proprietà "nome", "città" "punti";
Stampiamo le squadre in pagina, all'interno di una tabella HTML
*/


var displayTable = document.getElementById("table");


var teams = [
    {
        name: "AS Roma",
        city: "Rome",
        points: 50,
    },
    {
        name: "Torino FC",
        city: "Torino",
        points: 48,
    },
    {
        name: "SS Lazio",
        city: "Frosinone",
        points: 25,
    }
]

console.table(teams);

for (var i = 0; i < teams.length; i++) {
    var currentObject = teams[i];
    var currentProp = "";
    currentProp += "<tr>";
    currentProp += "<td>" + currentObject.name + "</td>";
    currentProp += "<td>" + currentObject.city + "</td>";
    currentProp += "<td>" + currentObject.points + "</td>";
    currentProp += "</tr>"
    console.log(currentProp);
    displayTable.innerHTML += currentProp;
}
