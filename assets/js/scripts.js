var currentNumberWrapper = document.getElementById ("currentNumber")
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        document.getElementById("currentNumber").style.color = "red";
    } else {
        document.getElementById("currentNumber").style.color = "white";
    }
    if  (currentNumber >=20){
        currentNumber = 19;
    }
}

function decrement() {
    currentNumber = currentNumber - 1
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        document.getElementById("currentNumber").style.color = "red";
    } else {
        document.getElementById("currentNumber").style.color = "white";
    }
}