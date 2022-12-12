// function submitName() {
//   // obtener nombre
//   var name1 = document.getElementById("input-name").value;
//   fullName = name1;

//   // obtener apellido 1
//   var surname1 = document.getElementById("input-surname1").value;
//   fullName = fullName + " " + surname1;

//   // obtener apellido 2
//   var surname2 = document.getElementById("input-surname2").value;
//   fullName = fullName + " " + surname2;

//   // Pintamos nombre completo
//   document.getElementById("full-name").innerText = fullName;
// }

// // registrar la funcion submitName como event listener de el click del botón enviar

// document.getElementById("button-submit").addEventListener("click", submitName);

// ======
// abreviamos
// ======

// function getName() {
//     return document.getElementById("input-name").value;
// }

// function getSurname1() {
//     return document.getElementById("input-surname1").value;
// }

// function getSurname2() {
//     return document.getElementById("input-surname2").value;
// }

// function getFullname() {
//     return getName() + " " + getSurname1() + " " + getSurname2();
// }

// function submitName() {
//     document.getElementById("full-name").innerText = getFullname();
// }

// document.getElementById("button-submit").addEventListener("click", submitName);

var getName = () => document.getElementById("input-name").value;
var getSurname1 = () => document.getElementById("input-surname1").value;
var getSurname2 = () => document.getElementById("input-surname2").value;
var getFullname = () => getName() + " " + getSurname1() + " " + getSurname2();
var submitName = () => document.getElementById("full-name").innerText = getFullname();

document.getElementById("button-submit").addEventListener("click", submitName);