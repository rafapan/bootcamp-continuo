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





//  3. DNI validation






// 4. Mobile Validation






//  5. Genaral Algorithm


var validateForm = (event) => {
    event.preventDefault(); // No hagas lo que suponías que ibas a hacer. Evita que el boton submit envíe datos al servidor

    validateFullName();
    /* validateFullName
       validateBirthday
       validateDNI
       validateMobile
    */ 
};


//  Events

document.getElementById("register").addEventListener("submit", validateForm);