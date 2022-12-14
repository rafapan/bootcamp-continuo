var getFirstNumber = () => parseInt(document.getElementById("input-number1").value);
var getSecondtNumber = () => parseInt(document.getElementById("input-number2").value);

var toAdd = () => getFirstNumber() + getSecondtNumber();
var toSubtract = () => getFirstNumber() - getSecondtNumber();
var toMultiply = () => getFirstNumber() * getSecondtNumber();
var toDivide = () => getFirstNumber() / getSecondtNumber();

var toError = () => document.getElementById("result").innerText = "Error, rellena ambos campos con un número";

var finalResult = (result) => document.getElementById("result").innerText = result;

function verificationAdd() {
    if (isNaN(finalResult(toAdd()))) {
        toError();
    } else {
        finalResult(toAdd());
    }
}

function verificationSubtract() {
    if (isNaN(finalResult(toSubtract()))) {
        toError();
        } else {
            finalResult(toSubtract());
    }
}

function verificationMultiply() {
    if (isNaN(finalResult(toMultiply()))) {
        toError();
        } else {
            finalResult(toMultiply());
    }
}

function verificationDivide() {
    if (isNaN(finalResult(toDivide()))) {
        toError();
        } else {
            finalResult(toDivide());
    }
}

document.getElementById("btn-add").addEventListener("click", verificationAdd);
document.getElementById("btn-subtract").addEventListener("click", verificationSubtract);
document.getElementById("btn-multiply").addEventListener("click", verificationMultiply);
document.getElementById("btn-divide").addEventListener("click", verificationDivide);