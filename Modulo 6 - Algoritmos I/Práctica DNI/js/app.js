var number;

do {
  var rest;
  var letter;

  //  Paso 1: pedir datos al usuario
  number = prompt("introduce número de DNI");

  // Necesitamos convertir el string que introduce el usuario a tipo number.

  // Paso 2: comproar que es un número
  // La funcion Number intenta convertir la variable en un número y si no puede te devuelve un NaN

  if (parseInt(number) == Number(number)) {
    //NaN
    console.log("Es un número", number);
    number = Number(number);

    // Paso 3: comprobar que es un número válido
    if (number >= 0 && number <= 99999999) {
      console.log("El número es válido", number);

      //paso 4: obetener el resto y la letra correspondiente
      rest = number % 23;

      switch (rest) {
        case 0:
          letter = "T";
          break;
        case 1:
          letter = "R";
          break;
        case 2:
          letter = "W";
          break;
        case 3:
          letter = "A";
          break;
        case 4:
          letter = "G";
          break;
        case 5:
          letter = "M";
          break;
        case 6:
          letter = "Y";
          break;
        case 7:
          letter = "F";
          break;
        case 8:
          letter = "P";
          break;
        case 9:
          letter = "D";
          break;
        case 10:
          letter = "X";
          break;
        case 11:
          letter = "B";
          break;
        case 12:
          letter = "N";
          break;
        case 13:
          letter = "J";
          break;
        case 14:
          letter = "Z";
          break;
        case 15:
          letter = "S";
          break;
        case 16:
          letter = "Q";
          break;
        case 17:
          letter = "V";
          break;
        case 18:
          letter = "H";
          break;
        case 19:
          letter = "L";
          break;
        case 20:
          letter = "C";
          break;
        case 21:
          letter = "K";
          break;
        case 22:
          letter = "E";
          break;
      }

      // En este momento letter ya tiene el valor. letter = digito de control (rest)
      alert("Número: " + number + ", Letra: " + letter);
      number = null; // para que ya salga del bucle do while
    } else {
      alert("El número de DNI introducido es erróneo");
    }
  } else {
    if (number != null) { 
      alert(number + " No es un número");
    }
  }
} while (number != null); // el prompt al darle a cancelar devuelve "null"




// Primer requisito: la entrada debe ser un número.
// Segundio requisito: La entrada deber ser un número entre 0 y 99999999
// Tercer requisito: Si lo introducido no es un número deberá indicarse con un "alert"
//Cuarto requisito: DEberá repetrise el proceso hasta que el usuario pulse "cancelar".
