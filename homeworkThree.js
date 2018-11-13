// yahya's work 

console.log('Biggest Numbers'); 
console.log('---------------')
console.log(' ');

function maxOfTwoNumbers(num1,num2){
    if(num1 > num2){
        console.log('the max number of the two numbers is ', num1);
    } else{
        console.log('the max number of the two numbers is ', num2);
     }
    }

    maxOfTwoNumbers(2,3);

    function maxOfThree(num1,num2,num3){
        if((num1 > num2)&&(num1 > num3)){
            console.log('the largest number of the three numbers is ', num1);
        } else if((num2 > num1) && (num2 > num3)){
            console.log('the largest number of the three numbers is ', num2);
        } else if((num3 > num1) && (num3 > num2)){
            console.log('the largest number of the three numbers is', num3);
        }
    }

maxOfThree(1,2,3);

console.log(' ');
console.log('The World Translator'); 
console.log('--------------------')
console.log(' ')

    function helloWorld(language){
    if((language === 'english') || (language === 'English')){ // added a second condition to handle if the user enters a capital letter at first
        console.log('Hello, World!');
    } else if((language === 'arabic') || (language === 'Arabic')){ 
        console.log('ملاعلاب اَبحرم'); // i had to write it in reverse since it appears reversed if i write it properly 
    } else if((language === 'french') || (language === 'French')){
        console.log('Bonjour, le monde');
    }

}  
helloWorld('English');
helloWorld('arabic');
helloWorld('French');

console.log(' ');
console.log('The Grade Assigner'); 
console.log('------------------')
console.log(' ')

function assignGrade(grade){

        if(grade > 90) {
        console.log('A');
        }
        else if(grade > 80) {
        console.log('B');
        }
        else if(grade > 70) {
        console.log('C');
        }
        else if(grade >= 60) {
        console.log('D');
        }
        else if(grade < 60) {
        console.log('F');
        }
        else {
        console.log('invalid input, try again');
        }
}

assignGrade(60);
assignGrade(20);
assignGrade(62);
assignGrade(90);
assignGrade('a');

console.log(' ');
console.log('The Pluralizer'); 
console.log('------------------')
console.log(' ')

function pluralize(numberOfnoun,noun){ // the function will see if the number is greater than 1 it will add 's' to the end of the noun unless if the noun is "child" or "fish"
    if((numberOfnoun > 1) && (noun === 'child')){
        console.log(numberOfnoun,' children');
    }   else if((numberOfnoun == 1) && (noun === 'child')){
        console.log(numberOfnoun, ' child');
    }   else if(((numberOfnoun > 1) && (noun === 'fish')) || ((numberOfnoun == 1) && (noun === 'fish'))){
        console.log(numberOfnoun, ' fish')
    }   else if(numberOfnoun > 1){
        console.log(numberOfnoun, noun+'s');
    }   else{
        console.log(numberOfnoun, noun);
    }

}

pluralize(5,'child');
pluralize(1,'child');
pluralize(5,'fish');
pluralize(1,'fish');
pluralize(1,'door');
pluralize(5,'door');
