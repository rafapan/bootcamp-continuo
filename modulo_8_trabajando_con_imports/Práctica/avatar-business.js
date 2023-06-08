
// user es el objeto que recibe. Es cada uno de los elementos del Array de getUsers
function getAvatar(user) {
 const img = document.createElement("img"); // creamos el elemento <img>
 img.src = user.avatar; // y le decimos que su src es el avatar de user.

 return img;
}