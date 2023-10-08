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

lastNameLength = lastName.length;

const lastName = "Lovelace";

const thirdLetterOfLastName = lastName[2];

const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1];

const myArray = [["Lakers", 50],["Bulls", 76]];

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

//push,pop,shift,unshift

.push = "adds to end of array";

.pop = "removes from end of the array";

.shift = "removed from the beginning of the array";

.unshift = "adds to the beginning of the array";

let sum = 0;

function addThree() {
    sum = sum + 3;
}

// Only change code below this line
function addFive() {
    sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    return arr.shift();
    return item;
    // Only change code above this line
}
//Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
//
// Add the number to the end of the array, then remove the first element of the array.
//
// The nextInLine function should then return the element that was removed.

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Comparison with the Equality Operator

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true

function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);