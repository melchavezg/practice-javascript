//quoting strings with single quote strings
//ex1.
    constmyStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
//combining functions
    function isEven(x) {
        if (x % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    console.log(isEven(10));
    console.log(isEven(9));

    let number = 10;
    if (isEven(10)) {
        console.log(number + ' is even');
} else {
        console.log(number + ' not even');
    }

function sumTwo(num1, num2) {
    return num1 + num2;
}
    console.log(sumTwo(9,2));

function getSalesTax(cost, state) {
    if(state === 'NY') {
        multiplier = 1.04
    } else if (state === 'CA')
    {
        multiplier = 1.0725
    }
    return cost * multiplier;
}
console.log(getSalesTax('5', 'NY'));

function mnemonicMachine(str1, str2, str3, str4) {
}
new javascript

function getSalesTax(cost, state) {
    if(state === 'NY') {
        multiplier = 1.04
    } else if (state === 'CA')
    {
        multiplier = 1.0725
    }
    return cost * multiplier;
}
console.log(getSalesTax('5', 'NY'));

function golfScore(strokes, par) {

    let golfResult = '';

    if(strokes += par) {
        return 'Bogey!';
    }
    if(stokes -= par) {
        return 'Birdie!';
    }
    if(strokes === par - 2) {
        return 'Eagle!'
    }
    if(strokes === par) {
        return 'Hole-in-one!'
    }
    return golfResult;
}

const golfScoreResult = golfScore('4,2');
console.log(golfScoreResult);

const anAdjective = "awesome!";mm
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;


const someAdjective = "so much fun!";
let myStr = "Learning to code is ";
myStr += someAdjective;

let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName;