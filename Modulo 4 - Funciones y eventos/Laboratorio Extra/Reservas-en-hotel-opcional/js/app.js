// var getTypeRoom = () => document.getElementById("type-room").selectedIndex;
var getTypeRoom = () => document.getElementById("type-room").value;
var getSpa = () => document.getElementById("add-spa").checked;
var getEmplacement = () => document.getElementById("emplacement-room").value;
var getNights = () => parseInt(document.getElementById("numberNight").value);
var getParking = () => parseInt(document.getElementById("numberParking").value);

// var priceParking = 0;
var valueRoom;
var ocupacion;

// Averiguamos el valor de la habitacion por noche según el tipo de habitación;
function typeRoom () {
    // getTypeRoom();
    switch(getTypeRoom()) {
        case "junior": valueRoom = 120; break;
        case "suite": valueRoom = 150; break;
        default: valueRoom = 100; break;
    }
    addSpa();
    return valueRoom;
}

function addSpa () {
    // getSpa();
    valueRoom = getSpa() == true ? valueRoom + 20 : valueRoom;
    return valueRoom;
}


// Ya sabemos el valor de la habitación y vamos a incrementarle el precio o abaratarlo según la ocupación

function emplacementRoom () {
    // getEmplacement();
    switch(getEmplacement()) {
        case "triple": ocupacion = 1.25; break;
        case "individual": ocupacion = 0.75; break;
        default: ocupacion = 1; break;
    }
    return ocupacion;
}


// vamos a comprobar si hay reservas para el parking y cada dia vale 10 €
var calcParking = () => getParking() * 10;

// var priceTotal = () => (((typeRoom() * emplacementRoom()) * getNights()) + calcParking());

var priceTotal = () => ((typeRoom() * emplacementRoom()) * getNights()) + calcParking();

function resultTotal() {
    if (isNaN(priceTotal())) {
        document.getElementById("printResult").innerText = "Completa correctamente los campos";
    } else {
        document.getElementById("printResult").innerText = priceTotal();
    }
}

resultTotal();
document.getElementById("type-room").addEventListener("change", resultTotal);
document.getElementById("add-spa").addEventListener("change", resultTotal);
document.getElementById("emplacement-room").addEventListener("change", resultTotal);
document.getElementById("numberNight").addEventListener("change", resultTotal);
document.getElementById("numberParking").addEventListener("change", resultTotal);