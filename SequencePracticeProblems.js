//Sequence Practice Problems

//To get a single digit number
{
let singleDigit=Math.floor(Math.random() * 10);
console.log("Single Digit Random Number : "+singleDigit);
}

//Use Random to get Dice Number between 1 to 6
{
let numberOnDice=Math.floor(Math.random() * 10) % 6 + 1;
console.log("Dice Number between 1 to 6 : "+numberOnDice);
}

//Add two Random Dice Number and Print the Result
{
let numberOnFirstDice=Math.floor(Math.random() * 10) % 6 + 1;
let numberOnSecondDice=Math.floor(Math.random() * 10) % 6 + 1;
let sumOfDiceNumbers=numberOnFirstDice + numberOnSecondDice;
console.log("Sum Of Random Dice Numbers : "+sumOfDiceNumbers);
}

//program that reads 5 Random 2 Digit values, then find their sum and the average
{
function randomNumberGenerator(){
    return (Math.floor(Math.random() * (99 - 10 + 1)) + 10);
}
let sum=0;
let average=0;
for(let count=0;count<5;count++){
    let number=randomNumberGenerator();
    console.log(number)
    sum+=number;
}
console.log("Sum of 2 digit random no. : "+sum);
average=sum/5;
console.log("Average of 5 numbers : "+average);
}

{
//Unit conversion 
let meters=42;
let metersToFeet=meters/12;
console.log("meters : "+meters+"m"+" metres to feet : "+metersToFeet+"ft");

//rectangular plot in meters
let plotLengthInFeet=60;
let plotBreadthInFeet=40;
let plotLengthInMeters=plotLengthInFeet * 12;
let plotBreadthInMeters=plotBreadthInFeet * 12;
console.log("Plot size in meters : "+plotLengthInMeters+"m"+" X "+plotBreadthInMeters+"m");

//calculating area of 25 plots in acres
const NUM_OF_PLOTS=25;
let plotArea=NUM_OF_PLOTS * plotLengthInMeters * plotBreadthInMeters;
console.log("Area of 25 Plots in meters : "+plotArea+"m^2");
console.log("Area of 25 plots in Acres : "+plotArea/4047+" acres");
}
