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

function getEpisodes() {
  return fetch("https://rickandmortyapi.com/api/episode/").then((response) => {
    return response.json();
  }).then(data => {
    return data.results;
  });
};

function getLocation() {
  return fetch("https://rickandmortyapi.com/api/location/").then((response) => {
    return response.json();
  }).then(data => {
    console.log(data)
    return data.results;
  });
}

export { getCharacter, getCharacterByIdid, getEpisodes, getLocation };
