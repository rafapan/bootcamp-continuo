var getFirstNumber = () => parseInt(document.getElementById("input-number1").value);
var getSecondtNumber = () => parseInt(document.getElementById("input-number2").value);

// var toAdd = () => document.getElementById("result").innerText = getFirstNumber() + getSecondtNumber();
var toSubtract = () => document.getElementById("result").innerText = getFirstNumber() - getSecondtNumber();
var toMultiply = () => document.getElementById("result").innerText = getFirstNumber() * getSecondtNumber();
var toDivide = () => document.getElementById("result").innerText = getFirstNumber() / getSecondtNumber();

document.getElementById("btn-add").addEventListener("click", verificationAdd);
document.getElementById("btn-subtract").addEventListener("click", toSubtract);
document.getElementById("btn-multiply").addEventListener("click", toMultiply);
document.getElementById("btn-divide").addEventListener("click", toDivide);

function verificationAdd() {
    if (isNaN(getFirstNumber()) || isNaN(getSecondtNumber())) {
        document.getElementById("result").innerText = "Joder";
    } else {
        document.getElementById("result").innerText = getFirstNumber() + getSecondtNumber();
    }
}