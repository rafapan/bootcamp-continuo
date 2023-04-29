// Constantes
var WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
];

// console.log(WORK_HOURS);

// Datos
var myTeam = [
  {
    name: "María",
    availability: new Array(8).fill(true),
  },
  {
    name: "Pedro",
    availability: new Array(8).fill(true),
  },
  {
    name: "Esther",
    availability: new Array(8).fill(true),
  },
  {
    name: "Marcos",
    availability: new Array(8).fill(true),
  },
];

//   1. Generación aleatoria de la disponibilidad
// Como primer apartado, vamos a generar aleatoriamente la disponibilidad para todos los miembros del equipo. Se trata de recorrer todos los miembros del equipo, y a su vez, para cada miembro, todas las franjas horarias de su disponibilidad, e ir asignando aleatoriamente si está disponible o no en dicha franja.

var getRandom = () => Math.random() < 0.5;

var generateAvailability = (team) => {
  for (member of team) {
    for (let i = 0; i < member.availability.length; i++) {
      member.availability[i] = getRandom();
    }
  }
  return team;
};

let myTeamSchedule = generateAvailability(myTeam);
// De esta forma generamos un equipo con una agenda completamente aleatoria.

// Una vez hayas generado tu agenda aleatoria, muestrala por consola. Un ejemplo de salida por consola podría ser este:

var printAvailability = (availabilityTeam, schedule) => {
  for (member of availabilityTeam) {
    console.log("Disponibilidad de " + member.name);
    for (let i = 0; i < member.availability.length; i++) {
      // console.log(member.availability[i]);
      if (member.availability[i] === true) {
        console.log(schedule[i] + ": Libre");
      }
      else {
        console.log(schedule[i] + ": Ocupado");
      }
    }
  }
};

printAvailability(myTeamSchedule, WORK_HOURS);
// console.log(myTeamSchedule)
// 2. Buscar hueco libre

// Para buscar el primer hueco libre habrá que comprobar la primera franja horaria en la que todos los miembros del equipo están disponibles.

// Voy a generar un calendario y en cada hora voy a añadir la situacion de cada uno a esa hora
var getComunTeam = (availabilityTeam, schedule) => {
  let comunAvailability = [];
  let getCompare = 0;
  let availability = [];

  while (getCompare < schedule.length) {
    var element = getCompare;
    comunAvailability[element] = availability;
    getCompare++;
  }

  for (let i = 0; i < comunAvailability.length; i++) {
    let newArray = [];
    comunAvailability[i] = newArray;
    for (let x = 0; x < availabilityTeam.length; x++) {
      newArray.push(availabilityTeam[x].availability[i]);
    }
  }
  //  ya tengo agrupados las disponibilidades
  return comunAvailability;
  // console.log(comunAvailability);
};

let comunTime = getComunTeam(myTeamSchedule, WORK_HOURS);
// console.log(comunTime)

// Despues de tener agrupados todas las situaciones de cada uno voy a comparar si todos son true o si nninguno coincide con todos con true

var getTimeAvailable = (comunTime, schedule) => {
  let repetido = false;
  let horario = "";
  var tempFreeComun = new Array(myTeam.length).fill(true);

  for (let i = 0; i < comunTime.length; i++) {
    for (let x = 0; x < comunTime[i].length; x++) {
      const elemento1 = comunTime[i];
      if (elemento1.toString() === tempFreeComun.toString()) {
        // convierto los dos objetos en string para poder compararlos o si no siempre me dirán que son distintos.
        repetido = true;
        horario = schedule[i];
      }
    }
  }

  if (repetido === true) {
    console.log("Hueco encontrado en el horario " + horario)
  } else {
    console.log("Lo siento. No hay hueco disponible en el equipo.")
  }
  return repetido;
}

getTimeAvailable(comunTime, WORK_HOURS);