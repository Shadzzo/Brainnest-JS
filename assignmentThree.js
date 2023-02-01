function isBigger(number1, number2) {
    if(number1 > number2){
        console.log("The bigger number is: " + number1);
    } else if(number2 > number1) {
        console.log("The bigger number is: " + number2);
    } else if(number1 == number2) {
        console.log("These numbers are equal!");
    } else {
        console.log("Unknown error!");
    }
}

function oddEven(n) {
    if(n % 2 == 0){
        console.log("The number is even");
    } else if(Math.abs(n % 2) == 1){
        console.log("The number is odd");
    } else {
        console.log("Unknown error!");
    }
}

var number1 = "66";
var number2 = 13;
// Check if they are numbers and convert them to integer if they are
if(Number.isInteger(parseInt(number1)) && Number.isInteger(parseInt(number2))){
    console.log("The numbers are: " + number1 + ", " + number2);
    isBigger(number1, number2);
} else {
    //If not, throw an error
    console.log("Variable(s) are not number(s)!");
}

if(Number.isInteger(parseInt(number1))){
    console.log("The number for odd/even check: " + n);
    oddEven(n);
}

