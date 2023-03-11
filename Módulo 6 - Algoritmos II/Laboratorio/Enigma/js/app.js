var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var text =
  "b': yqg ,:agr(hue:) shrerg jq,u'qf q !hg ,:psqñrf:g rg,fuwurae: s:f r' ,yq!x mbg:z 'q 'r,yrn !hfua( t'usqfuq ,:apu(:)m z q ,:a!uahq,u:a rajuq ha pragqir ,utfqe:n br' dhr !h dhurfqg)";

// La busca en un array y devuelve su posición.
var searchFirstCode = (codeA, target) => {
  for (let i = 0; i < codeA.length; i++) {
    if (codeA[i] === target) return i;
  }
  return -1;
};

var swap = (array, a, b) => {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  };

// Traductor

var Translate = (message, codeA, codeB) => {
  for (let i = 0; i < message.length; i++) {
    var letter = message[i];
    var positionA = searchFirstCode(codeA, letter);
    console.log(codeB[positionA]);
  }
};

console.log(Translate(text, encryptedAlphabet, plainAlphabet));
