// Definimos el objeto "hotel" y todas su propiedades.

var hotel = {
  Royal: {
    img: "https://www.viajessrilanka.es/wp-content/uploads/2018/03/6-FourSeason.jpg",
    nombre: "Royal Al-Andalus",
    localizacion: "Torremolinos (Málaga)",
  },
  Oasis: {
    img: "https://cdn1.intriper.com/wp-content/uploads/2022/01/12094557/hoteles-de-lujo-soneva-javi-maldivas-1024x768.jpg",
    nombre: "Oasis Plaza",
    localizacion: "Benidorm (Alicante)",
  },
  puntuacion: {
    1: '<i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>',
    2: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>',
    3: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>',
    4: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>',
    5: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
  },
  firma: "",
};

// Preguntamos al usuario qué hotel quiere valorar. Para ello creamos una variable cuyo valor pa a definir el usuario.

var hotelseleccionado = prompt(
  'Indica el hotel sobre el que quieres hacer la reseña: "Royal" o "Oasis"'
);

// Para las estrellas nuevamente creamos otra variable para obtener el valor de la puntuacion.
var estrellaspuntuacion = prompt(
  "Indica una puntuación del 1 al 5. Siendo 5 la puntuacion más favorable"
);

// Para indicar si la reseña será anónima o no le preguntamos al usuario a través la funcion confirm para obtener una respuesta "true" o "false"

hotel.firma = confirm("¿Quiere que la reseña sea anónima?");

//  La var hotelseleccionado nos indica a que propiedad objeto del objeto hotel acceder para cargar sus propiedades.

document.getElementById("img-hotel").src = hotel[hotelseleccionado].img;
document.getElementById("nombre-hotel").innerHTML =
  "Hotel " + hotel[hotelseleccionado].nombre;
document.getElementById("localizacion-hotel").innerHTML =
  hotel[hotelseleccionado].localizacion;

// El valor que nos haya proporcionado el usuario nos indicará la propiedad a la que debemos acceder de hotel.puntuacion, pintando así su valor.
document.getElementById("puntuacion-hotel").innerHTML =
  hotel.puntuacion[estrellaspuntuacion];

// Accedemos al atributo checked del input checkbox. Si el usuario nos devuelve "true" se marcará, si es "false" no.
document.getElementById("sign-hotel").checked = hotel.firma;
