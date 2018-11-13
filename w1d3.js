// 1. Biggest Numbers.
// 1.1 Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

function maxOfTwoNumbers (num1, num2){
    if (num1 > num2){
        console.log("The first number is largest for the second number = ", num1);
    } else {
        console.log("The second number is largest for the first number = ", num2)
    }
};

maxOfTwoNumbers(61, 98);
maxOfTwoNumbers(108, 13);

// 1.2 Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

function maxOfThree(num1, num2, num3){
    console.log("The largest number is = ", Math.max(num1, num2, num3));
}

maxOfThree(12, 45, 78);
maxOfThree(111, 88, 97);
maxOfThree(91, 123, 116);


// 2. The World Translator.

function helloWorld(language){
    if (language === "English"){
        console.log("Hello World");
    } else if (language === "Arabic"){
        console.log("مرحبا بالعالم");
    } else if (language === "French") {
        console.log("Bonjour le monde");
    } else {
        console.log("The language is not found");
    }
}

helloWorld("English");
helloWorld("Arabic");
helloWorld("French");
helloWorld("Chin");

// 3. The Grade Assigner.

function assignGrade(numberScore){
    if (numberScore >= 90){
        console.log("Grade for the score is : A");
    } else if (numberScore >= 80){
        console.log("Grade for the score is : B");
    } else if (numberScore >= 70){
        console.log("Grade for the score is : C");
    } else if (numberScore >= 60){
        console.log("Grade for the score is : D");
    } else {
        console.log("Grade for the score is : F");
    }
}

assignGrade(98);
assignGrade(83);
assignGrade(79);
assignGrade(61);
assignGrade(45);


// 4. The Pluralizer, With Bonus.

function pluralize(string, num){
    if (num > 1 && string !== "sheep" && string !== "geese" && string !== "fruit" && string !== "jewelry"){
        console.log(`${num} ${string}s`);
    } else {
        console.log(`${num} ${string}`);
    }
};
pluralize ('home', 10);
pluralize('giraffe', 5);
pluralize('door', 1);
pluralize ('sheep', 3);
pluralize ('geese', 7);
pluralize ('fruit', 9);
pluralize ('jewelry', 2);
