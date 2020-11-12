// Functions Practice Problems
const prompt = require('prompt-sync')();

//Program to convert temperature
{
    const toFahrenheit = 0;
    const toCelsius = 1;
    function convertTemperatureToFahrenheit(temperature) {
        return (temperature * (9 / 5)) + 32;
    }
    function convertTemperatureToCelsius(temperature) {
        return ((temperature - 32) * 5 / 9);
    }
    let userInput = Math.floor(Math.random() * 10) % 2 + 1;
    let convertedTemp = 0;
    switch (userInput) {
        case 1:
            console.log("celsius to fahrenheit conversion");
            let degC = prompt("Enter temperature in celsius")
            convertedTemp = convertTemperatureToFahrenheit(degC)
            console.log("Temperature in fahrenheit is: " + convertedTemp);
            break;
        case 2:
            console.log("fahrenheit to celsius conversion");
            let degF = prompt("Enter temperature in fahrenheit")
            convertedTemp = convertTemperatureToCelsius(degF)
            console.log("Temperature in celsius is: " + convertedTemp);
            break;
    }
}

{
    let number1 = prompt("Enter a number to check if it is a palindrome : ");
    let number2 = prompt("Enter a number to check if it is a palindrome : ");
    let isPalindrome = checkForPalindrome(number1, number2);
    if (isPalindrome)
        console.log(number1, "is Palindrome.");
    else
        console.log(number1, "is not Palindrome.");

    // function to check for palindrome
    function checkForPalindrome(number1, number2) {
        let reversedNumber = 0;
        while (number1 != 0) {
            let remainder = number1 % 10;
            reversedNumber = reversedNumber * 10 + remainder;
            number1 = Math.floor(number1 / 10);
        }
        if (reversedNumber == number2) {
            return true;
        } else {
            return false;
        }
    }
}


//check if the number is a Prime then show that its palindrome is also prime
{
    {
        function isPrime(number) {
            let flag = 0;
            if (number == 0 || number == 1) {
                return false;
            }
            else {
                for (let i = 2; i <= number / 2; i++) {
                    if (number % i == 0) {
                        flag = 1;
                        return false;
                    }
                }
                if (flag == 0) {
                    return true;
                }
            }
        }
        function isPalindrome(number) {
            let reversedNum = 0;
            let originalNumber = number;
            while (number != 0) {
                let remainder = number % 10;
                reversedNum = reversedNum * 10 + remainder;
                number = Math.floor(number / 10);
            }
            if (originalNumber == reversedNum) {
                return true;
            } else {
                return false;
            }
        }

        let number = prompt("Enter the number to check for prime and pallindrome :");
        let isPrimeNumber = isPrime(number);
        if (isPrimeNumber == false) {
            console.log("Number is not prime. Not checking for palindrome");
        }
        if (isPrimeNumber == true) {
            console.log("Number is prime. Checking for palindrome")
            let checkpalindrome = isPalindrome(number);
            if (checkpalindrome == true) {
                console.log("Number is prime and pallindrome");
            }
            else {
                console.log("Number is prime but not pallindrome");
            }
        }
    }
}