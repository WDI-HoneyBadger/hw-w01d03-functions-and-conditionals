// Biggest Numbers #1
function maxOfTwoNumbers(num1, num2){
    if (num1 > num2){
        console.log('the largest number is: ', num1);
    } else {
        console.log('the largest number is: ', num2);
    }
}
maxOfTwoNumbers(5, 1);


// Biggest Numbers #2
function maxOfThree(arg1, arg2, arg3){
    if (arg1 > arg2 && arg1 > arg3) {
        console.log('the largest number is: ', arg1);
    } else if (arg2 > arg1 && arg2 > arg3) {
        console.log('the largest number is: ', arg2);
    } else {
        console.log('the largest number is: ', arg3);
    }
}

maxOfThree(90, 4, 9);
maxOfThree(8, 14, 3);
maxOfThree(21, 40, 45);


// The World Translator
function helloWorld(language){
    if (language === 'English'){
        console.log('Hello, World');
    } else if (language === 'Arabic') {
        console.log('مرحبا بالعالم');
    } else if (language === 'French') {
        console.log('Bonjour le monde');
    } else {
        console.log('Invalid input!')
    }
}

helloWorld('English');
helloWorld('Arabic');
helloWorld('Italian');
helloWorld('French');


// The Grade Assigner
function assignGrade(score) {
    switch(true){
        case (score > 90):
            console.log('Your get: ', 'A');
            break;
        case (score > 80):
            console.log('Your get: ', 'B');
            break;
        case (score > 70):
            console.log('Your get: ', 'C');
            break;
        case (score > 60):
            console.log('Your get: ', 'D');
            break;
        default:
            console.log('Your get: ', 'F');
    }
}

assignGrade(94);
assignGrade(68);
assignGrade(43);
assignGrade(77);
assignGrade(89);

// The Pluralizer
function pluralize(noun, num){
    // var userInput = noun;
    switch(noun){
        case 'sheep':
        case 'geese':
            console.log(`${num} ${noun}`);
            break;
        case 'cactus':
            if (num > 1) {
                console.log(`${num} cacti`);
                break;
            }
        case 'octopus':
            if (num > 1) {
                console.log(`${num} octopi`);
                break;
            }
        case 'man':
            if (num > 1) {
                console.log(`${num} men`);
                break;
            }
        case 'company':
            if (num > 1) {
                console.log(`${num} companies`);
                break;
            }
        default:
            if (num > 1) {
                console.log(`${num} ${noun}s`);
            } else {
                console.log(`${num} ${noun}`);
            }
            break;
    };
}

pluralize('giraffe', 5);
pluralize('door', 1);
pluralize('sheep', 4);
pluralize('cactus', 3);
pluralize('octopus', 1);
pluralize('company', 1);
pluralize('company', 5);