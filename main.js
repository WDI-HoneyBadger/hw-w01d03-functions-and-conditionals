//Biggest Numbers

//1.
var maxOfTwoNumbers = function (num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else return num2;
}

//2.
var maxOfThreeNumbers = function (num1, num2, num3) {
    return (maxOfTwoNumbers(maxOfTwoNumbers(num1, num2), num3));
}


//The World Translator

var helloWorld = function (language) {
    language = language[0].toUpperCase() + language.substring(1);
    switch (language) {
        case "English":
            return "Hello, World";
            break;
        case "Arabic":
            return "مرحبا بالعالم"
            break;

        case "French":
            return "Bonjour le monde"
            break;
    }
}

//The Grade Assigner

var assignGrade = function (score) {
    if (score > 90) {
        return "A";
    }
    else if (score > 80) {
        return "B";
    }
    else if (score > 70) {
        return "C";
    }
    else if (score > 60) {
        return "D";
    }
    else {
        return "F";
    }
}

// console.log(assignGrade(101));
// console.log(assignGrade(90.01));
// console.log(assignGrade(90));
// console.log(assignGrade(75));
// console.log(assignGrade(61));
// console.log(assignGrade(60));
// console.log(assignGrade(59));
// console.log(assignGrade(-1000));


// The Pluralizer
var pluralize = function (noun, num) {
    if (num <= 0) {
        return "please enter a positive, non-zero number."
    }
    else if (num === 1) {
        return (`${num} ${noun}`)
    }
    else {
        return (`${num} ${noun}s`)
    }
}

console.log(pluralize("deadly sin", 7));

//Bonus:
//Coding all the possible irregular plural nouns is out of the scope of the course at this point.
//Not to mention it would be too stenuous and would take too much time.
//However, it's possible to use available libraries to pluralize all the words in the English language.
//For example: https://github.com/blakeembrey/pluralize created by blakeembrey.