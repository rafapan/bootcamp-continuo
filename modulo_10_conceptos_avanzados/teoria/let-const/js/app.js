// Var características

var teacher;

// 1. Reasignables: la podemos cambiar el valor tantas veces queramos

console.log(teacher);
teacher = "Javi";
console.log(teacher)

// 2. Redeclarble: se pueden declarar otras variables con el mismo nombre

var teacher = "Lissete";
console.log(teacher);

// 3. Su ámbito es de función y no de bloque: no podemos usar una variable de tipo var fuera de su ámbito. {} las llaves simbolizan un bloque. La variable morirá en cuanto la función se ejecute

function whoisTeachingToday() {
    var teacher = "Javi";
    console.log(teacher);
}

whoisTeachingToday();

if (true) {
    var teacher = "Lola";
    console.log(teacher);
}

console.log(teacher);

// 4. Declaración global (objeto window) en el ámbito superior / fichero
var teacher ="Javi"; // realemnte estoy creando una variable dentro de mi objeto window
console.log(window.teacher) //Lo que hemos hecho realmente es almacenar la variable teacher dentro de la propiedad 'teacher' del objeto window


// ==========

// LET y CONST características

// LET es reasignable pero hay que declararla antes de llamarle porque no hace hosting. CONST siempre tendrá el mismo valor. No se puede reasignar

let pupil;
console.log(pupil);

// No son redeclarables
// su ámbito es de bloque. Si lo meto dentro de un if, un switch...  solo va a existir dentro de esa linea de códigos

if (true) {
    const blablabla = "hola"
    console.log(blablabla)
}

console.log(blablabla)