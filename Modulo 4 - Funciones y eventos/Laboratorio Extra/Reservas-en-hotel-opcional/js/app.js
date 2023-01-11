// var getTypeRoom = () => document.getElementById("type-room").selectedIndex;
var getTypeRoom = () => document.getElementById("type-room").value;
var getSpa = () => document.getElementById("add-spa").checked;
var getEmplacement = () => document.getElementById("emplacement-room").value;
var getNights = () => parseInt(document.getElementById("numberNight").value);
var getParking = () => parseInt(document.getElementById("numberParking").value);

var priceParking = 0;

// Averiguamos el valor de la habitacion por noche según el tipo de habitación;
switch(getTypeRoom()) {
    case "junior": valueRoom = 120; break;
    case "suite": valueRoom = 150; break;
    default: valueRoom = 100; break;
}

// Si hay Spa el valor de la habitación incrementa en 20 €
var valueRoom = getSpa() == true ? valueRoom + 20 : valueRoom;;

// Ya sabemos el valor de la habitación y vamos a incrementarle el precio o abaratarlo según la ocupación
switch(getEmplacement()) {
    case "triple": valueRoom = valueRoom + (valueRoom * 0.25); break;
    case "individual": valueRoom = valueRoom - (valueRoom * 0.25); break;
    default: valueRoom = valueRoom; break;
}

// vamos a comprobar si hay reservas para el parking y cada dia vale 10 €
var calcParking = () => getParking() * 10;

var priceTotal = () => (valueRoom * getNights()) + calcParking();


function resultTotal() {
    priceTotal(); 
    document.getElementById("printResult").innerText = priceTotal();
}


document.getElementById("getResult").addEventListener("click", resultTotal);
