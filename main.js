// Biggest Numbers

function maxOfTwoNumbers(num1, num2){
if (num1 > num2){
    console.log(num1);
} else {
    console.log(num2);
}
}


function maxOfThree(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        console.log(num1);
    } else if (num2 > num1 && num2 > num3)  {
        console.log(num2);
    } else {
        console.log(num3);
    }
}

maxOfTwoNumbers(11,1);

maxOfThree(4,7,14);


// The World Translator

function helloWorld(language){
    if (language == 'english'){
        console.log("Hello, World");
    } else if (language == 'arabic'){
        console.log(" مرحبا بالعالم ");
    } else {
        console.log("Bonjour le monde");
    }}

    helloWorld('arabic');


// The Grade Assigner

    function assignGrade(score){
        if (score >= 90){
            console.log('A');
        } else if (score >= 80){
            console.log('B');
        } else if (score >= 70){
            console.log('C');
        } else if (score >= 60) {
            console.log('D');
        } else {
            console.log('F');
        }
    }

    assignGrade(30);
    assignGrade(98);
    assignGrade(83);
    assignGrade(70);
   

// The Pluralizer

    function pulralize(number, noun){
        if (number >= 1){
            console.log(number, noun);
        } else {
            console.log(number + 's', noun);
        }
    }

    pulralize('door', 1);
    pulralize('door', 1);

// function addNumber(num1, num2){

// var result = num1 + num2;
// return result;

// }



// console.log(addNumber(1, 7));

