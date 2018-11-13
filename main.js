//Biggest Numbers 1

function maxOfTwoNumbers (number1 , number2) {
    if(number1 > number2){
        console.log('the maximam number is ' , number1);
    } else {
        console.log('the maximam number is ' , number2)
    }
}
maxOfTwoNumbers(6,7);

//Biggest Numbers 2 

function maxOfThree(number1 , number2 , number3){
    console.log('the max numof three is ',Math.max(number1, number2, number3));
}
maxOfThree(7,9,12);

//The World Translator
function languageCode(laCode){
    if(laCode ==='arabic'){
        console.log('مرحبا بالعالم');
    } if(laCode === 'english'){
        console.log('Hello World');
    } else if(laCode == 'french') {
        console.log('Bonjour le monde');
    }

}
languageCode('arabic');
languageCode('english');
languageCode('french');

//The Grade Assigner
function assignGrade(score){
    if( score >= 90){
        console.log('A');
    }else if(score >= 80){
        console.log('B'); 
    }else if(score >= 70){
        console.log('C');
    }else if(score >= 60){
        console.log('F');
    }
    
}
assignGrade(78);

//The Pluralizer
function pluralize(noun,number){
    if(number > 1){ 
    console.log(`${number} ${noun}s`);
    }else  {
        console.log(`${number} ${noun}`);
    }
}
pluralize('dog',4);
pluralize('giraffe', 5); 
pluralize('door', 1); 
