var balls = [];

var generateUnsortedBalls = (array) => {
  while (array.length < 15) {
    var newBall = Math.floor(Math.random() * 15) + 1;
    if (array.indexOf(newBall) === -1) {
      array.push(newBall);
    }
  }
  return array;
};

console.log("**** Array de bolas desordenadas: ", generateUnsortedBalls(balls));

var printTriangle = (array) => {
  for (var row = 1, index = 0; index < array.length; row++) {
    var show = "";
    for (var ballToShow = 1; ballToShow <= row; ballToShow++) {
      show += ` ${array[index++]}`;
    }
    console.log(show);
  }
};

printTriangle(balls);

var swap = (array, a, b) => {
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
};
var bubbleSort = (array) => {
  var size = array.length;
  for (var temp = 1; temp < size; temp++) {
    for (var left = 0; left < size - temp; left++) {
      var right = left + 1;
      if (array[left] > array[right]) {
        swap(array, left, right);
      }
    }
  }
  return array;
};

printTriangle(bubbleSort(balls));
