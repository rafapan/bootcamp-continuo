var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,' ";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm ";

var myArray =
  "b': yqg ,:agr(hue:) shrerg jq,u'qf q !hg ,:psqñrf:g rg,fuwurae: s:f r' ,yq!x mbg:z 'q 'r,yrn !hfua( t'usqfuq ,:apu(:)m z q ,:a!uahq,u:a rajuq ha pragqir ,utfqe:n br' dhr !h dhurfqg)";


// La busca en un array y devuelve su posición.
var searchFirstCode = (codeA, target) => {
  for (let i = 0; i < codeA.length; i++) {
    if (codeA[i] === target) return i;
  }
  return -1;
};

// Traductor

var translate = (message, codeA, codeB) => {
  message = message.toLowerCase();
  let newArray = "";
  for (let i = 0; i < message.length; i++) {
    var letter = message[i]; // Almacena la letra que hay que traducir
    var positionA = searchFirstCode(codeA, letter); // Traduce la letra
    newArray += codeB[positionA]; 
    // Va añadiendo una letra traducida a cada posicion dentro del nuevo array
  }
  return newArray;
};

var toEncrypt = () => {
  let textToEncrypt = document.getElementById("text1").value;
  let textEncrypted = translate(textToEncrypt, plainAlphabet, encryptedAlphabet);
  document.getElementById("text2").value = textEncrypted;
}
var toDecrypt = () => {
  let textToEncrypt = document.getElementById("text1").value;
  let textEncrypted = translate(textToEncrypt, encryptedAlphabet, plainAlphabet);
  document.getElementById("text2").value = textEncrypted;
}

document.getElementById("btn-encrypt").addEventListener("click", toEncrypt);
document.getElementById("btn-decrypt").addEventListener("click", toDecrypt);