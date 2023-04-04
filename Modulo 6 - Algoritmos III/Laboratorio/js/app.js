console.log("----");
console.log("%cCUADRADO", "color: red; font-weight: bold");

// time: 22:00

var square = (n, char) => {
  for (let i = 0; i < n; i++) {
    let columns = 0;
    let colCha = "";
    while (columns < n) {
      colCha += char;
      columns++;
    }
    console.log(i + 1 + "    " + colCha);
  }
};

square(5, "*");

console.log("----");
console.log(
  "%cCUADRADO con BORDE",
  "color: red; font-weight: bold; text-transform: uppercase"
);

var squareWithBorder = (n, charBorder, charInner) => {
  for (let i = 0; i < n; i++) {
    let columns = 0;
    let colCha = "";
    while (columns < n) {
      if (i === 0 || i === n - 1 || columns === 0 || columns === n - 1) {
        colCha += charBorder;
      } else {
        colCha += charInner;
      }
      columns++;
    }
    console.log(i + 1 + "    " + colCha);
  }
};
squareWithBorder(5, "B", "*");

console.log("----");
console.log(
  "%cCuadrado Diagonal Left-Right",
  "color: red; font-weight: bold; text-transform: uppercase"
);

var squareDiagonalLR = (n, charDiagonal, charUp, charDown) => {
  for (let i = 0; i < n; i++) {
    let columns = 0;
    let colCha = "";
    while (columns < n) {
      if (columns === i) {
        colCha += charDiagonal;
      } else if (columns < i) {
        colCha += charDown;
      } else {
        colCha += charUp;
      }
      columns++;
    }
    console.log(colCha);
  }
};

squareDiagonalLR(5, "\\", "A", "B");

console.log("----");
console.log(
  "%cCuadrado Diagonal Right-Left",
  "color: red; font-weight: bold; text-transform: uppercase"
);

var squareDiagonalRL = (n, charDiagonal, charUp, charDown) => {
  for (let i = n - 1; i >= 0; i--) {
    let columns = 0;
    let colCha = "";
    while (columns < n) {
      if (columns === i) {
        colCha += charDiagonal;
      } else if (columns < i) {
        colCha += charUp;
      } else {
        colCha += charDown;
      }
      columns++;
    }
    console.log(colCha);
  }
};

squareDiagonalRL(5, "/", "A", "B");

console.log("----");
console.log(
  "%cMedio Diamante",
  "color: red; font-weight: bold; text-transform: uppercase"
);

var halfDiamond = (n, char) => {
  for (let i = 0; i < n; i++) {
    let columns = 0;
    let colCha = "";
    while (columns < i + 1) {
      colCha += char;
      columns++;
    }
    console.log(colCha);
  }
  for (let down = 0; down < n - 1; down++) {
    let columns = n;
    let colCha = "";
    while (columns > down + 1) {
      colCha += char;
      columns--;
    }
    console.log(colCha);
  }
};

halfDiamond(3, "*");

console.log("----");
console.log(
  "%cPirámide",
  "color: red; font-weight: bold; text-transform: uppercase"
);

var pyramid = (n, char) => {
  let space = " ";

  for (let i = n - 1; i >= 0; i--) {
    let width = n + n - 1;
    let columns = 0;
    let colCha = "";
    let rightStars = n + i;
    while (columns < n) {
      if (columns < i) {
        colCha += space;
      } else {
        colCha += char;
      }
      columns++;
    }
    while (rightStars < width) {
      colCha += char;
      rightStars++;
    }
    console.log(colCha);
  }
};

pyramid(5, "*");

console.log("----");
console.log(
  "%cDiamante",
  "color: red; font-weight: bold; text-transform: uppercase"
);

var diamond = (n, char) => {
  let space = " ";

  for (let i = n - 1; i >= 0; i--) {
    let width = n + n - 1;
    let columns = 0;
    let colCha = "";
    let rightStars = n + i;
    while (columns < n) {
      if (columns < i) {
        colCha += space;
      } else {
        colCha += char;
      }
      columns++;
    }
    while (rightStars < width) {
      colCha += char;
      rightStars++;
    }
    console.log(colCha);
  }
  for (let i = 0; i < n - 1; i++) {
    let columns = 0;
    let colCha = "";
    let rightStars = 0;
    let width = n - (i + 2);
    while (columns < n) {
      if (columns < i + 1){
        colCha += space;
      } else {
        colCha += char;
      }
      columns++;
    }
    while (rightStars < width) {
      colCha += char;
      rightStars++;
    }
    console.log(colCha)
  }
};

diamond(5, "*");
