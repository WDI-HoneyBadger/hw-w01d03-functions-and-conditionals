
//1- Biggest Numbers

//1-1 
function maxOfTwoNumbers(num1, num2) {

    if (num1 > num2) {

        console.log(`${num1} is large than ${num2}`)

    } else {

        console.log(`${num1} is not large than ${num2}`)

    }
}

maxOfTwoNumbers(5, 7);

//1-2
function maxOfThreeNumbers(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {

        console.log(`${num1} is the largest number!!`);

    } else if (num2 > num1 && num2 > num3) {

        console.log(`${num2} is the largest number!!`);

    } else {

        console.log(`${num3} is the largest number!!`);
    }
}

maxOfThreeNumbers(11, 25, 9);


//2- The World Translator

function helloWorld(typeOfLan) {



    if (typeOfLan == "english") {

        console.log("Hello World");

    } else if (typeOfLan == "arabic") {

        console.log("مرحبا بالعالم");

    } else if (typeOfLan == "french") {

        console.log("Bonjour le monde");

    } else {

        console.log("Please Enter a valid input!!");
    }
}

helloWorld("english");
helloWorld("arabic");
helloWorld("french");
helloWorld("hello");


//3- The Grade Assigner

function assignGrade(score) {

    var grade = "";

    if (score >= 0 && score <= 100) {
        switch (true) {
            case score >= 90:

                grade = "A";

                console.log(grade)

                break;

            case score >= 80:

                grade = "B";

                console.log(grade)

                break;
            case score >= 70:

                grade = "C";

                console.log(grade)

                break;

            case score >= 60:

                grade = "D";

                console.log(grade)

                break;

            case score < 60:

                grade = "F";

                console.log(grade)

                break;



        }

    } else {

        console.log("Invalid input!! Please write a valid inpt!!!");
    }

}

assignGrade(90);
assignGrade(85);
assignGrade(71);
assignGrade(60);
assignGrade(30);
assignGrade(-10);

//4- The Pluralizer

function pluralize(animal, numberOfAnimal) {

    if (numberOfAnimal == 1 || animal == "sheep") {

        console.log(`${numberOfAnimal}  ${animal}`);

    } else if (numberOfAnimal > 1 && animal != "geese" && animal != "cactus" && animal != "octopus") {

        console.log(`${numberOfAnimal}  ${animal}s`);

    } else if (numberOfAnimal > 1 && animal == "geese") {

        console.log(`${numberOfAnimal} goose`);
    } else if (numberOfAnimal > 1 && animal == "cactus" || animal == "octopus")

        if (animal == "cactus") {
            animal = "cacti";
            console.log(`${numberOfAnimal}  ${animal}`);

        } else {

            animal = "octpi";
            console.log(`${numberOfAnimal}  ${animal}`);
        }
}

pluralize("cat", 1);
pluralize("dog", 7);
pluralize("sheep", 5);
pluralize("sheep", 1);
pluralize("lion", 11);
pluralize("octopus", 9);
pluralize("octopus", 1);
pluralize("cactus", 6);
pluralize("cactus", 1);
pluralize("geese", 1);
pluralize("geese", 3);


