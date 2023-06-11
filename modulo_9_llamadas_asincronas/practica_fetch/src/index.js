import * as UserBusiness from "./user-business";
import * as DataBusiness from "./data-business";

// const users = DataBusiness.getUsers().then(data => {
DataBusiness.getUsers().then((data) => {
  const users = data; //Antes teniamos los directamente en users, pero ahora están en data. ASí que lo almacenamos en users ahora.
  const nodes = [];
  // Aquí nos devuelve ahora una promesa por lo que hay que añadirle el then y el catch

  for (let user of users) {
    const node = UserBusiness.getUserNode(user); // ahora nos está devolviendo muchos datos que ya no coinciden.
    nodes.push(node);
  }

  for (let node of nodes) {
    document.getElementById("root").append(node);
  }
});
