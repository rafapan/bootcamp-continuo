var hotel = {
    Royal : {
        img : "https://www.viajessrilanka.es/wp-content/uploads/2018/03/6-FourSeason.jpg",
        nombre : "Royal Al-Andalus",
        localizacion : "Torremolinos (Málaga)",
    },
    Oasis : {
        img : "https://cdn1.intriper.com/wp-content/uploads/2022/01/12094557/hoteles-de-lujo-soneva-javi-maldivas-1024x768.jpg",
        nombre : "Oasis Plaza",
        localizacion : "Benidorm (Alicante)",
    },
    puntuacion : estrellas,
    firma: "",
} 

var estrellas = {
    1 : '<i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>',
    2 : '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>',
    3 : '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>',
    4 : '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>',
    5 : '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
}

var hotelseleccionado = prompt('Indica el hotel sobre el que quieres hacer la reseña: \"Royal"\ o \"Oasis\"');

var estrellasNumber = prompt("Indica una puntuación del 1 al 5. Siendo 5 la puntuacion más favorable");

// hotel.puntuacion = prompt("Indica una puntuación del 1 al 5. Siendo 5 la puntuacion más favorable");
hotel.firma = confirm("¿Quiere que la reseña sea anónima?")

document.getElementById("img-hotel").src = hotel[hotelseleccionado].img;
document.getElementById("nombre-hotel").innerHTML = "Hotel " + hotel[hotelseleccionado].nombre;
document.getElementById("localizacion-hotel").innerHTML = hotel[hotelseleccionado].localizacion;
// document.getElementById("puntuacion-hotel").innerHTML = hotel.puntuacion;

document.getElementById("puntuacion-hotel").innerHTML = estrellas[estrellasNumber];


document.getElementById("sign-hotel").checked = hotel.firma;