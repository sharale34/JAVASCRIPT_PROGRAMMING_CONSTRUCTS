//Repetition Practice Problems with for loop

//print table of the powers of 2 that are less than or equal to 2^n.
{
    const prompt = require('prompt-sync')();
    let userInput = prompt("Enter the value of n for generation of table of powers of 2 : ");
    for (let index = 0; index <= userInput; index++) {
        let powerValue = Math.pow(2, index);
        console.log("2^" + index + " -", powerValue);
    }
}

//prints the nth harmonic number.
{
    const prompt = require('prompt-sync')();
    let series = 1;
    let userInput = prompt("Enter the value of n to generate the nth harmonic number : ");
    for (let index = 2; index <= userInput; index++) {
        series += "+(1/" + index + ")";
    }
    console.log("The nth harmonic number H =", series);
}

//program that takes a input and determines if the number is a prime
{
    const prompt = require('prompt-sync')();
    let flag = 0;
    let userInput = prompt("Enter a number to check whether prime or not : ");
    for (let index = 2; index <= userInput / 2; index++) {
        if (userInput % index == 0) {
            console.log(userInput + " not is a prime number.");
            flag = 1;
            break;
        }
    }
    if (flag == 0 || userInput == 0 || userInput == 1) {
        console.log(userInput + " is a prime number.");
    }
}

//program to take a range of number as input and output the Prime Numbers in that range
{
    const prompt = require('prompt-sync')();
    //taking input from the user
    const lowerNumber = parseInt(prompt('Enter lower number: '));
    const higherNumber = parseInt(prompt('Enter higher number: '));
    console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

    // looping from lowerNumber to higherNumber
    for (let i = lowerNumber; i <= higherNumber; i++) {
        let flag = 0;
        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}

// program that computes a factorial of a number taken as input
{
    const prompt = require('prompt-sync')();
    function factorial(n) {
        if (n == 0 || n == 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
    let factorialOfNumber = prompt("Enter the number to compute factorial ");
    let fact = factorial(factorialOfNumber);
    console.log("Factorial of Number " + factorialOfNumber + " is " + fact);
}

// program to compute Factors of a number N using prime factorization method.
{
    {
        const prompt = require('prompt-sync')();
        let number = prompt("Enter the number to compute prime factors of a number :");
        console.log("Prime Factors are:");
        for (let i = 2; i < number; i++) {
            while (number % i == 0) {
                console.log(i + " ");
                number = number / i;
            }
        }
        if (number > 2) {
            console.log(number);
        }
    }
}