// var getTypeRoom = () => document.getElementById("type-room").selectedIndex;
var getTypeRoom = () => document.getElementById("type-room").value;

var getSpa = () => document.getElementById("add-spa").checked;
// Nos devuelve true o false

var getEmplacement = () => document.getElementById("emplacement-room").value;

var getNights = () => parseInt(document.getElementById("numberNight").value);
var getParking = () => parseInt(document.getElementById("numberParking").value);


var resultado;
var valueRoom;
var priceTotal;
var priceParking;

// console.log("El tipo de habitación seleccionado es", getTypeRoom());
// console.log(typeof(getTypeRoom()));
// console.log("¿El cliente quiere Spa?", getSpa());
// console.log("La ocupación es:", getEmplacement());
// console.log("El número de noches es:", getNights());
// console.log(typeof(getNights()));
// console.log("El número de días de parking es:", getParking());
// console.log(typeof(getParking()));



if (getTypeRoom() == "junior") {
    valueRoom = 120;
} else if (getTypeRoom() == "suite") {
    valueRoom = 150;
} else {
    valueRoom = 100;
}

if (getSpa() == true) {
    valueRoom = valueRoom + 20;
} else {
    valueRoom = valueRoom;
}

if (getEmplacement() == "triple") {
    valueRoom = valueRoom + (valueRoom * 0.25);
} else if (getEmplacement() == "individual") {
    valueRoom = valueRoom - (valueRoom * 0.25);
}

function calcParking() {
    getParking();
     priceParking = getParking() * 10;
    return priceParking;
}

console.log(priceParking);

function resultTotal() {
    getTypeRoom();
    console.log("La habitación sin spa es:", valueRoom);
    getSpa();
    console.log("¿Spa? la hab. se queda en:", valueRoom);
    getEmplacement();
    console.log("Por ocupación se queda la habitación en", valueRoom);


    valueRoom = valueRoom * getNights();
    console.log("multiplicado por las noches seleccionadas", valueRoom);
    priceTotal = valueRoom;

    calcParking();
    priceTotal = valueRoom + priceParking;
    console.log("Sumandole el parking el total es:", priceTotal);
    
}


// console.log("El valor de la habitación es", valueRoom);
// console.log(typeof(valueRoom));

document.getElementById("getResult").addEventListener("click", resultTotal);
