//Selection Practice Problems with if & else

//Program to read 5 random 3 digit values and then outputs the minimum and the maximum value
let number=[];
const LOWER_BOUND=100;
const UPPER_BOUND=999;
//putting values in array
for(let i=0;i<5;i++){
    number[i]=Math.floor(Math.random()*((UPPER_BOUND-LOWER_BOUND)+1) + LOWER_BOUND);
    console.log("Number "+i+": "+number[i]);
}
let max=number[0];
let min=number[0];

//getting maximum number from five 3 digit random numbers
for(let index=0;index<5;index++){
    if(max<number[index]){
        max=number[index];
    }
    if(min>number[index]){
        min=number[index];
    }
}
console.log("maximum number: "+max);
console.log("minimum number: "+min);

//Program that takes day and month from command line and determines if it is in a given range
const prompt=require('prompt-sync')();
let userDay=prompt("Enter day");
console.log("Entered date is",userDay);
let userMonth=prompt("Enter Month");
console.log("Entered month is",userMonth);
if(((userDay>=20 && userDay<=31) && userMonth==3) || 
                    ((userDay>=1 && userDay<=30)&& userMonth==4)|| 
                    ((userDay>=1 && userDay<=31) && userMonth==5) ||
                    ((userDay>=1 && userDay<=20) && userMonth==6)) {
    console.log(true);
}
else{
    console.log(false);
}

//program that takes a year as input and outputs the Year is a Leap Year or not a Leap Year
{
    let year = prompt("Enter the year :")
    if (year >= 1000 && year < 10000) {
        if (year % 4 == 0 ) {
            if (year % 100 == 0) {
                if (year % 400 == 0)
                    console.log("Leap Year");
                else
                    console.log("Not a leap year");
            }
            else
                console.log("Leap Year");
        }
        else
            console.log("Not a leap year");
    }
    console.log("Year",year);
}

//program to simulate a coin flip and print out "Heads" or "Tails"
{
    const HEAD = 0;
    let toss = Math.floor(Math.random() * 10) % 2;
    if (toss == HEAD)
        console.log("Heads");
    else
        console.log("Tails");
}

