//Repetition Practice Problems with While loop

//program that prints a table of the powers of 2 that are less than or equal to 2^n
{
    const prompt = require('prompt-sync')();
    let userInput = prompt("Enter the value of n for generation of table of powers of 2 : ");
    let index = 0;
    while (index <= userInput) {
        let powerValue = Math.pow(2, index);
        console.log("2^" + index + " -", powerValue);
        index++;
        if (index > 8) {
            console.log("The powers of 2 that are less than or equal to 2^n till 256 is reached");
            break;
        }
    }
}

// Extend the Flip Coin problem till either Heads or Tails wins 11 times
{
    const HEAD = 0;
    const TAIL = 1;
    let headCount = 0;
    let tailCount = 0;
    while (headCount != 11 && tailCount != 11) {
        let tossCoin = Math.floor(Math.random() * 10) % 2;
        switch (tossCoin) {
            case HEAD:
                headCount++;
                break;
            case TAIL:
                tailCount++;
                break;
        }
    }
    console.log("Head Count = " + headCount);
    console.log("Tail Count = " + tailCount);
}

//a Program where a gambler starts with Rs 100 and places Re 1 bet until he/she goes broke
{
    const WON = 0;
    const LOST = 1;
    let Money = 100;
    let wonCount = 0;
    let noOfBets = 0;
    while (Money > 0 && Money < 200) {
        let bet = Math.floor(Math.random() * 10) % 2;
        switch (bet) {
            case WON:
                Money += 1;
                wonCount++;
                break;
            case LOST:
                Money -= 1;
                break;
        }
        noOfBets++;
    }
    console.log("No of times bet won = " + wonCount);
    console.log("Total No of bets = " + noOfBets);
    console.log("Final balance = " + Money);
}