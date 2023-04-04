var results = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6];
var rollDice = () => Math.floor(Math.random() * 6) + 1;
var rollDice50 = () => results[Math.floor(Math.random() * 10)];
console.log(rollDice());
console.log(rollDice50());

var diceProbs = [5, 5, 5, 10, 10, 65]; // DEBEN SUMAR 100
var calcAccumulatedProbs = (prob) => {
  var accProb = [];
  for (var i = 0, acc = 0; i < prob.length; i++) {
    acc += prob[i];
    accProb.push(acc);
  }
  return accProb;
};
var accProbs = calcAccumulatedProbs(diceProbs);
console.log(accProbs); // [5, 10, 15, 25, 35, 100]
var rollDice = () => {
  var rnd = Math.random() * 100; // [0, 100);
  for (var i = 0; i < accProbs.length; i++) {
    if (rnd <= accProbs[i]) return i + 1;
  }
};
setInterval(() => {
  console.log(`${Date.now()} |`, rollDice());
}, 400);
