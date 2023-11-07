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

//Comparison with the Inequality Operator

// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);

//Comparison with the Strict Inequality Operator

function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);

//Comparison with the Greater Than Or Equal To Operator

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }

    if (val >= 10) {  // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);

//Comparisons with the Logical And Operator

function testLogicalAnd(val) {
    // Only change code below this line

    if (val<= 50 && val >= 25) {
        return "Yes";
    }

    // Only change code above this line
    return "No";
}

testLogicalAnd(10);

//Comparisons with the Logical Or Operator
// The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.
//
// The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.
//
// The pattern below should look familiar from prior waypoints.
//
// if (num > 10) {
//   return "No";
// }
// if (num < 5) {
//   return "No";
// }
// return "Yes";
// This code will return Yes if num is between 5 and 10 (5 and 10 included). The same logic can be written with the logical or operator.
//
// if (num > 10 || num < 5) {
//   return "No";
// }
// return "Yes";

function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        return "Outside";
    }

    // Only change code above this line
    return "Inside";
}

testLogicalOr(15);

//Introducing Else Statements

function testElse(val) {
    let result = "";
    // Only change code below this line

    if (val > 5) {
        return "Bigger than 5";

    } else { (val <= 5)
        return "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

testElse(4);

//Introducing Else If Statements
//If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

testElseIf(7);

//Logical Order in If Else Statements

function orderMyLogic(val) {
    if (val < 10) {
        return "Less than 10";
    } else if (val < 5) {
        return "Less than 5";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);

//Logical Order in If Else Statements
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);

//Chaining If Else Statements
function testSize(num) {
    if (num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else if (num >= 20)
        return "Huge"
    return "Change Me";
}

//Golf Code

testSize(7);

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes === 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes === par - 1) {
        return names[2]
    } else if (strokes === par) {
        return names[3]
    } else if (strokes === par + 1) {
        return names[4]
    } else if (strokes === par + 2) {
        return names[5]
    } else if (strokes >= par + 3) {
        return names[6]
    }

    return "Change Me";
}

golfScore(5, 4);