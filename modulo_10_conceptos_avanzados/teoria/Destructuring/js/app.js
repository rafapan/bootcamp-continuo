/**
 *  DESTRUCTURING
 */

const teachers = ["Javi", "Lissette", "Jaime", "Victor", "Dani"];
// const primero = teachers[0];
// const segundo = teachers[1];
// const tercero = teachers[2];

const [primero, segundo, tercero] = teachers; //Esto es quiero hacer destrcuturing del array teachers y me lo almacenas en una variable que se llame primero, segundo y tercero

const [first, , third] = teachers;

console.log(primero, segundo, tercero);
console.log(first, third);
const teachers2 = ["Javi", "Lissette", "Jaime", "Victor", "Dani"];
const getSecondTeacher = ([, second]) => second;
console.log(getSecondTeacher(teachers2));

//  DESTRUCTURING SOBRE OBJETOS
const user = {
  id: 4451234,
  name: "Javi",
  surname: "Calzado",
  age: 36,
};

// const id = user.id;
// const name = user.name;
// const age = user.age;

const { id, name, age } = user;

console.log(id, name, age);

// aPlicarlo en los argumentos de una funcionç

const userSample = {
  id: 4451234,
  name: "Javi",
  surname: "Calzado",
  age: 36,
};

// manera cláseica
// const getUserFullName = user => user.name + " " + user.name;

// console.log(getUserFullName(userSample))

// CON DESTRUCTURING
const getUserFullName = ({ name, surname }) => name + " " + surname;
console.log(getUserFullName(userSample));

// SE PUEDE CAMBIAR EL NOMBRE DE LA PROPIEDAD

const { id: userID } = user;
console.log(userID);

const user2 = {
  id: 4451234,
  name: "Javi",
  surname: "Calzado",
  age: 36,
  location: {
    country: "spain",
  },
};

// const getUserSurnameAndCountry = (user2) => user2.surname + " from " + user2.location.country;

// console.log(getUserSurnameAndCountry(user2));

const getUserSurnameAndCountry = ({
  surname,
  location: { country: userCountry },
}) => surname + " from " + userCountry;

console.log(getUserSurnameAndCountry(user2));

// COMBINANDO DESTRUCTURING DE ARRAYS Y OBJETOS
const classes = [
  { teacher: "Javi", subject: "Destructuring", duration: 3 },
  { teacher: "Lissette", subject: "Rest/Spred", duration: 2 },
];
const secondClassDuration = ([, { duration }]) => duration;
console.log(secondClassDuration(classes));

const lemoncode = {
  teachers: ["Javi", "Lissette", "Jaime"],
  type: "Company",
  foundation: 2015,
};
const getFirstTeacher = ({ teachers: [first] }) => first;
console.log(getFirstTeacher(lemoncode));

// COMBINANDO DESTRCUTURING Y REST
const sampleArray = ["uno", 2, true];
const [firstItem, ...restItems] = sampleArray; //Voy a capturar el primer elemento con firstItem y que el resto de elementos de ese array me los agrupas y me lo das como un array nuevo
console.log(firstItem, restItems);

// con objetos
const sampleObject = {
  id2: 43,
  name: "Javi",
  age: 36,
};
const { id2, ...rest } = sampleObject;
console.log(rest);
