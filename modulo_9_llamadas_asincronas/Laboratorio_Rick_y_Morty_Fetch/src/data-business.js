function getCharacter() {
  return fetch("https://rickandmortyapi.com/api/character").then((response) => {
    return response.json();
  }).then(response => {
    console.log(response.results);
    return response.results;
  });
}

function getCharacterByIdid(id) {
  return fetch("https://rickandmortyapi.com/api/character/" + id).then((response) => {
    return response.json();
  }).then(data => {
    return data;
  });
}

export { getCharacter, getCharacterByIdid };
