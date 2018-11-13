// Biggest Numbers
function maxOfTwoNumbers(num1, num2) {
    if (num1>num2) {
        console.log(`${num1} is the biggest`);
    } else if (num1<num2) {
        console.log(`${num2} is the biggest`);
    } else {
        console.log(`It's equal!`);
    }
}

console.log('Test the maxOfTwoNumbers function');
maxOfTwoNumbers(11,11);
maxOfTwoNumbers(10,11);
maxOfTwoNumbers(12,11);

function maxOfThree(num1, num2, num3) {
    if (num1>num2) {
        if (num3>num1) {
            console.log(`${num3} is the biggest`);
        } else {
            console.log(`${num1} is the biggest`);
        }
    } else if (num2>num3) {
        if (num1>num2) {
            console.log(`${num1} is the biggest`);
        } else {
            console.log(`${num2} is the biggest`);
        }
    } else {
        console.log(`${num3} is the biggest`);
    }
}

console.log('Test the maxOfThree function');
maxOfThree(5,1,3);
maxOfThree(3,1,5);
maxOfThree(1,3,5);
maxOfThree(5,3,1);
maxOfThree(3,5,1);
maxOfThree(1,5,3);
maxOfThree(1,-5,3);


// The World Translator
function helloWorld(language) {
    if (language == 'arabic') {
        console.log('مرحبا بالعالم');
    } else if (language == 'english') {
        console.log('Hello World');
    } else {
        console.log('Bonjour le monde');
    }
}

console.log('Test the helloWorld function');
helloWorld('arabic');
helloWorld('french');


// The Grade Assigner
function assignGrade(score) {
    if (score >= 90) {
        console.log('You Got Grade: A');
    } else if (score >= 80) {
        console.log('You Got Grade: B');
    } else if (score >= 70) {
        console.log('You Got Grade: C');
    } else if (score >= 60) {
        console.log('You Got Grade: D');
    } else {
        console.log('Unfortunately:), you Got Grade: F');
    }
}

console.log('Test the assignGrade function');
assignGrade(91);
assignGrade(59);
assignGrade(75);


// The Pluralizer
function pluralize(noun, number) {
    if ((noun == 'sheep' || noun == 'geese' || noun == 'pants' || noun == 'cactus') && number>1) {
        if (noun == 'geese') {
            console.log(`${number} goose`);
        } else if (noun == 'cactus') {
            console.log(`${number} cacti`)
        } 
        else {
            console.log(`${number} ${noun}`);
        }

    } else if (number > 1) {
        console.log(`${number} ${noun}s`);
    } else {
        console.log(`${number} ${noun}`);
    }
}

console.log('Test the pluralize function');
pluralize('giraffe', 5);
pluralize('door', 1);
pluralize('geese', 2);
pluralize('cactus', 1);
pluralize('sheep', 5);