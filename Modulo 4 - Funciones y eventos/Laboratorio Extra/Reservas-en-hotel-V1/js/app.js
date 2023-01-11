// var getTypeRoom = () => document.getElementById("type-room").selectedIndex;
var getTypeRoom = () => document.getElementById("type-room").value;
var getSpa = () => document.getElementById("add-spa").checked;
var getEmplacement = () => document.getElementById("emplacement-room").value;
var getNights = () => parseInt(document.getElementById("numberNight").value);
var getParking = () => parseInt(document.getElementById("numberParking").value);


var resultado;
var valueRoom;
var priceTotal;
var priceParking = 0;

switch(getTypeRoom()) {
    case "junior": valueRoom = 120; break;
    case "suite": valueRoom = 150; break;
    default: valueRoom = 100; break;
}

var valueRoom =  getSpa() == true ? valueRoom + 20 : valueRoom;
var valueSpa = valueRoom;

switch(getEmplacement()) {
    case "triple": valueRoom = valueRoom + (valueRoom * 0.25); break;
    case "individual": valueRoom = valueRoom - (valueRoom * 0.25); break;
    default: valueRoom = valueRoom; break;
}

// if (getEmplacement() == "triple") {
//     valueRoom = valueRoom + (valueRoom * 0.25);
// } else if (getEmplacement() == "individual") {
//     valueRoom = valueRoom - (valueRoom * 0.25);
// }

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
    document.getElementById("printResult").innerText = priceTotal;
}


// console.log("El valor de la habitación es", valueRoom);
// console.log(typeof(valueRoom));

document.getElementById("getResult").addEventListener("click", resultTotal);
