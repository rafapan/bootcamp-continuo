// createCharacterRow: debemos utilizar esta función para que nos devuelva un elemento HTML con la fila del personaje que recibe por parámetro. showCharacter: debemos utilizarla para que nos muestre el detalle del personaje que recibe por parámetro.

import "./styles.css";

import * as ExternUtils from "./utils.js";
import * as DataBusiness from "./data-business";

DataBusiness.getCharacter().then((data) => {
  document.getElementById("root").innerText = ""; // Para limpiar lo que ya hay en el html

  const character = data;
  const nodes = [];

  for (item of character) {
    const node = ExternUtils.createCharacterRow(item);

    const char_id = DataBusiness.getCharacterByIdid(item.id);
    node.onclick = function () {
      char_id.then(data => {
        ExternUtils.showCharacter(data);
      })
    };


    nodes.push(node);
  }
  for (let node of nodes) {
    document.getElementById("root").append(node);
  }
});

DataBusiness.getEpisodes().then((data) => {
  document.getElementById("episodes").innerText = ""; // Para limpiar lo que ya hay en el html

  console.log(data);

  // const episode = data;
  const nodes = [];

  for (item of data) {
    const node = ExternUtils.createEpisodeRow(item);
    // console.log(node);
    nodes.push(node);
  }
  for (let node of nodes) {
    document.getElementById("episodes").append(node);
  }
});


DataBusiness.getLocation().then((data) => {
  document.getElementById("location").innerText = ""; // Para limpiar lo que ya hay en el html

  const nodes = [];

  for (item of data) {
    const node = ExternUtils.createLocationRow(item);
    nodes.push(node);
  }
  for (let node of nodes) {
    document.getElementById("location").append(node);
  }
});