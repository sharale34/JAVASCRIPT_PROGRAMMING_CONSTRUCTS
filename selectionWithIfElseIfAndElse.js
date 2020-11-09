//Selection Practice Problems with if else if and else

//Read a single digit number and write the number in word
{
const prompt = require('prompt-sync')();
let number = prompt("Enter the single digit number :");
if(number == 1)
     console.log("One");
else if(number == 2)
     console.log("Two");
else if(number == 3)
     console.log("Three");
else if(number == 4)
     console.log("Four");
else if(number == 5)
     console.log("Five");
else if(number == 6)
     console.log("Six");
else if(number == 7)
     console.log("Seven");
else if(number == 8)
     console.log("Eight"); 
else if(number == 9)
     console.log("Nine");
else if (number == 0)
        console.log("Zero");
}   

//Read a number and display the week day
{
    const prompt = require('prompt-sync')();
    let userInputDate = prompt("Enter the date in yyyy-mm-dd format: ");
    //date-string method, we create a date by passing a date-string into new Date.
    let date = new Date(userInputDate);
    let day = date.getDay();
    if (day == 0) {
        console.log("Sunday");
    } else if (day == 1) {
        console.log("Monday");
    } else if (day == 2) {
        console.log("Tuesday");
    } else if (day == 3) {
        console.log("Wednesday");
    } else if (day == 4) {
        console.log("Thursday");
    } else if (day == 5) {
        console.log("Friday");
    } else if (day == 6) {
        console.log("Saturday");
    }
}

//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
{
const prompt = require('prompt-sync')();
let userInput=prompt("Enter the number 1, 10, 100, 1000, 10000, 100000 ");
console.log("Entered number is ",userInput);
if (userInput==1){
    console.log("unit");
}else if (userInput==10){
    console.log("tens");
}else if (userInput==100){
    console.log("hundered");
}else if  (userInput==1000){
    console.log("thousand");
}else if (userInput==10000){
    console.log("tens of thousand")
}else if (userInput==100000){
    console.log("lacs")
}else{
    console.log("Invalid Number")
}
}

//Program to take 3 numbers and do following arithmetic operations and find min. & max.
{
let firstNumber=20;
let secondNumber=10;
let thirdNumber=40;
let arithematicOperation=[];
arithematicOperation[0]=firstNumber+(secondNumber*thirdNumber);
console.log(arithematicOperation[0]);
arithematicOperation[1]=(firstNumber%secondNumber)+thirdNumber;
console.log(arithematicOperation[1]);
arithematicOperation[2]=thirdNumber+(firstNumber/secondNumber);
console.log(arithematicOperation[2]);
arithematicOperation[3]=(firstNumber*secondNumber)+thirdNumber;
console.log(arithematicOperation[3]);
//determining the maximum and minimum value of opeartions
 let maxValue=arithematicOperation[0];
 let minValue=arithematicOperation[0];
for(let index=0;index<4;index++){
    if(minValue>arithematicOperation[index]){
        minValue=arithematicOperation[index];
    }
    if(maxValue<arithematicOperation[index]){
        maxValue=arithematicOperation[index];
    }
}
console.log("maximum value : "+maxValue);
console.log("minimum value : "+minValue);
}



