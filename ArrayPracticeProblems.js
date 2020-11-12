// Array Practice Problems

{
    let randomNum = []; // array to store the random numbers
    const LOWER_BOUND = 100;
    const UPPER_BOUND = 999;
    for (let i = 0; i < 10; i++) {
        // Generates 10 Random 3 Digit number
        randomNum[i] = LOWER_BOUND + Math.floor(Math.random() * ((UPPER_BOUND - LOWER_BOUND) + 1));
        console.log("Number " + i + ": " + randomNum[i]);
    }

    //finding the 2nd largest and the 2nd smallest element without sorting the array
    let largest = randomNum[0];
    let secondLargest = randomNum[0];
    let minimum = randomNum[0];
    let secondMinimum = randomNum[0];

    //code to get 2nd maximum and minimum number from ten 3 digit random number
    for (let i = 0; i < randomNum.length; i++) {
        if (randomNum[i] > largest) {
            secondLargest = largest;
            largest = randomNum[i];
        } else if (randomNum[i] > secondLargest) {
            secondLargest = randomNum[i];
        }
        if (randomNum[i] < minimum) {
            secondMinimum = minimum;
            minimum = randomNum[i];
        } else if (randomNum[i] < secondMinimum) {
            secondMinimum = randomNum[i];
        }
    }

    // program to sort the array and then find the 2nd largest and the 2nd smallest element
    let sortedArray = randomNum.sort();
    console.log("Second Largest number: " + sortedArray[sortedArray.length - 2]);
    console.log("Second minimum number: " + sortedArray[1]);
}

// Program to store all the Prime Factors of a number n into an array and finally display the output
{
    const prompt = require('prompt-sync')();
    let number = prompt("Enter the number to compute prime factors of a number :");
    let arrayOfPrimeFactors = [];
    for (let i = 2; i < number; i++) {
        while (number % i == 0) {
            arrayOfPrimeFactors.push(i);
            number = number / i;
        }
    }
    if (number > 2) {
        arrayOfPrimeFactors.push(number);
    }
    //displaying prime factors
    for (let index = 0; index < arrayOfPrimeFactors.length; index++) {
        console.log(arrayOfPrimeFactors[index]);
    }
}

//find the digits that are repeated twice like 33, 77, etc and store them in an array
{
    let repeatedArray = [];
    function range(start, end) {
        for (let i = start; i < end; i++) {
            getRepeatedDigits(i);
        }
    }
    function getRepeatedDigits(number) {
        let originalNumber = number;
        if (number % 10 == (Math.floor(number / 10) % 10) && number % 10 != 0) {
            repeatedArray.push(originalNumber);
        }
    }
    let start = 0;
    let end = 100;
    range(start, end);
    for (let i = 0; i < repeatedArray.length; i++) {
        console.log(repeatedArray[i]);
    }
}