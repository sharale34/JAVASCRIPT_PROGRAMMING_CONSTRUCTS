//Selection Practice Problems with Case Statements

//Progarm to read a single digit and write userInput in word using case statement
const prompt=require('prompt-sync')();
let userInputDigit=prompt("Enter a single digit userInput :");
switch(userInputDigit)
{
    case '0':
        console.log("Entered digit in words is Zero");
        break;
    case '1':
        console.log("Entered digit in words is One");
        break;
    case '2':
        console.log("Entered digit in words is two");
        break;
    case '3':
        console.log("Entered digit in words is three");
        break;
    case '4':
        console.log("Entered digit in words is four");
        break;
    case '5':
        console.log("Entered digit in words is five");
        break;
    case '6':
        console.log("Entered digit in words is six");
        break;
    case '7':
        console.log("Entered digit in words is seven");
        break;
    case '8':
        console.log("Entered digit in words is eight");
        break;
    case '9':
        console.log("Entered digit in words is nine");
        break;
    default:
        console.log(" ");
}

//Read a Number and Display the week day 
{
    const prompt = require('prompt-sync')();
    let userInputDate = prompt("Enter the date in yyyy-mm-dd format :");
    let date = new Date(userInputDate);
    //getDay()-Gets the day of the week, using local time.
    switch (date.getDay()) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 0:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
    }
}

//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
{
const prompt = require('prompt-sync')();
let userNumber=prompt("Enter the number 1, 10, 100, 1000, 10000, 100000 :");
console.log("Entered number is :",userNumber);
switch(userNumber)
{
    case '1':
        console.log("unit");
        break;
    case '10':
        console.log("tens");
        break;
    case '100':
        console.log("hundred");
        break;
    case '1000':
        console.log("thousand");
        break;
    case '10000':
        console.log("tens of thousand");
        break;
    case '100000':
        console.log("lacs");
        break;
    default:
        console.log("Invalid Input")
}
}

//program that takes User Inputs and does Unit Conversion of different Length units
{
const prompt=require('prompt-sync')();
var userInputNumber=prompt("Enter the number :");
let conversionType=Math.floor(Math.random()*10) % 4+1;
let convertedValue=0;
switch(conversionType){
    case 1: 
        console.log("Feet to Inch");
        convertedValue=12 * userInputNumber;
        console.log("Value in Inch is: "+convertedValue);
        break;
    case 2:
        console.log("Feet to Meter");
        convertedValue=0.3048 * userInputNumber;
        console.log("Value in meters is: "+convertedValue);
        break;
    case 3:
        console.log("Inch to Feet");
        convertedValue=userInputNumber/12;
        console.log("Value in feet is: "+convertedValue);
        break;
    case 4:
        console.log("Meter to Feet");
        convertedValue=userInputNumber/0.3048;
        console.log("Value in meters is: "+convertedValue);
        break;
    default:
        console.log("Invalid Type");
}
}