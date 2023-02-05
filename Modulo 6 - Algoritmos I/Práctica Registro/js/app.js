//  1. Full name validation
//  - el nombre no esté vacío, que no sea null, que no se undefined
//  - Debe tener una longitud mínima de 5 caracteres.

var isValidFullName = fullname => fullname && (fullname.length >= 5);


// Obtener el nombre que ha introducido el usuario
// Validar ese nombre
// Si es inválido aplicamos una regla de css al input, añadiríamos la clase .error
// Si es válido no eliminamos esa regla

var validateFullName = () => {
    var fullNameField = document.getElementById("fullName");
    var valid = isValidFullName(fullNameField.value);

    if (valid) {
        fullNameField.classList.remove("error"); //classList = La lista de clases que tiene el atributo class
    } else {
        fullNameField.classList.add("error");
    }

    return valid;
}
 


//  2. Birthdate validation
// - Year. Mayor que 1850. Menos o igual que el año actual.
// - Month. Ente 1 y 12.
// - Días. Máximo 30 ó 32 según el mes, con la excepción de febrero que será 28 o 29 (año bisiesto)

var isValidYear = year => year && year >= 1850 && year <= new Date().getFullYear(); //Date() es una clase, para crear una clase se utiliza el operador "new". Crea una nueva fecha, función constructora. Nos va a coger la fecha actual.
var isValidMonth = month => (month >=1) && (month <= 12);
// Necesitamos saber si el año es bisiesto
var isLeapYear = year => year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
var isValidDay = (day, month, year) => {
    var leapYear = isLeapYear(year);
    var februaryLength = leapYear ? 29 : 28;
    var monthLength = [31, februaryLength, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return day > 0 && day <= monthLength[month - 1]; // restamos uno porque un array la primera posición es 0
}


var splitDateInParts = date => {
    var parts = date.split("/") // usamos la función split que divide un array en función del caracter que indique y me lo devuelve en un array de strings - parts => ["00", "00", "0000"];

    return [parseInt(parts[0]), parseInt(parts[1]), parseInt(parts[2])];
}
//  el usuario va a meter un string tipo 00/00/000 tengo que romperlo en funcion de las barras.

//  vamos a ver que las fechas tenga una longitud mínima de 8 caracteres y una máxima de 10.

var isValidDate = date => {
    if (date.length < 8 || date.length > 10) return false;
    var parts = splitDateInParts(date);
    var validYear = isValidYear(parts[2]);
    var validMonth = isValidMonth(parts[1]);
    var validDay = isValidDay(parts[0], parts[1], parts[3]);

    return validYear && validMonth && validDay;
}

var validateBirthdate = () => {
    var birthdayField = document.getElementById("birthday");
    var valid = isValidDate(birthdayField.value);

    if (valid) {
        birthdayField.classList.remove("error"); //classList = La lista de clases que tiene el atributo class
    } else {
        birthdayField.classList.add("error");
    }

    return valid;
}


//  3. DNI validation
var DNI_LETTERS = "TRWAGMYFPDXBNJZSQVHLCKET"; // Los string funcionan como un array y cada letra tiene su posicion. Se dicen que son itinerantes.
var isValidDNILetter = (dniLetter, dniNumber) => DNI_LETTERS[dniNumber % 23] === dniLetter;
var isValidDNINumber = number => number >= 0 && number <= 99999999;

// Se ha comprobado la letra y el número. Ahora hay que comprobarlo completo
var isValidDNI = dni => {
    if (dni.length !== 9) return false;
    // cortamos el string introducido por el usuario a partir del 8º caracter.
    var dniNumber = dni.slice(0, 8);
    var dniLetter = dni.slice(8, 9);
    return isValidDNINumber(dniNumber) && isValidDNILetter(dniLetter, dniNumber);
}

var validateDNI = () => {
    var dniField = document.getElementById("dni");
    var valid = isValidDNI(dniField.value);

    if (valid) {
        dniField.classList.remove("error"); //classList = La lista de clases que tiene el atributo class
    } else {
        dniField.classList.add("error");
    }

    return valid;
}

// 4. Mobile Validation

var isValidMobile = mobile => {

    return (
        mobile && // que me devuelva un booleano
        parseInt(mobile) &&   //voy a convertirlo en numero. Me devolvería un NaN en el caso de que no fuera un número y me devolvería un false.
        mobile.length === 9 &&
        (mobile.startsWith(9) || mobile.startsWith(8) || mobile.startsWith(7) || mobile.startsWith(6)) //otro método de los string que le pregunta si comienza por algún caracter. startsWith
    );
}

var validateMobile = () => {
    var mobileField = document.getElementById("mobile");
    var valid = isValidMobile(mobileField.value);

    if (valid) {
        mobileField.classList.remove("error"); //classList = La lista de clases que tiene el atributo class
    } else {
        mobileField.classList.add("error");
    }

    return valid;
}



//  5. Genaral Algorithm


var validateForm = (event) => {
    event.preventDefault(); // No hagas lo que suponías que ibas a hacer. Evita que el boton submit envíe datos al servidor

    validateFullName();
    validateBirthdate();
    validateDNI();
    validateMobile();
};


//  Events

document.getElementById("register").addEventListener("submit", validateForm);