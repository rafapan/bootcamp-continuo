// var hotelSelected = hotel1, hotel2; 

// var hotel1 = {
//     img : "https://okdiario.com/img/viajes/2016/10/16/hoteles-de-lujo-mancora-5920.jpg",
//     nombre : "Alay",
//     localizacion : "Torremolinos (Málaga)",
//     puntuacion : "",
//     firma: "",
// };

var hotel = {
    img : "https://www.viajessrilanka.es/wp-content/uploads/2018/03/6-FourSeason.jpg",
    nombre : "Kristal",
    localizacion : "Valencia",
    puntuacion : "",
    firma: "",
};

// hotelSelected = prompt('Indica el hotel sobre el que quieres hacer la reseña: \"Alay"\ o \"Kristal\"');
hotel.puntuacion = prompt("Indica una puntuación del 1 al 5. Siendo 5 la puntuacion más favorable");
hotel.firma = confirm("¿Quiere que la reseña sea anónima?")

document.getElementById("img-hotel").src = hotel.img;
document.getElementById("nombre-hotel").innerHTML = "Hotel " + hotel.nombre;
document.getElementById("localizacion-hotel").innerHTML = hotel.localizacion;
document.getElementById("puntuacion-hotel").innerHTML = hotel.puntuacion;
document.getElementById("sign-hotel").checked = hotel.firma;

console.log(hotel);