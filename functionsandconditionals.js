//Biggest Numbers
//1
function maxOfTwoNumbers(num1 , num2){
   if( num1 > num2){
        console.log('num1 is larger than num2');
    } else{
       console.log('num2 is larger than num1');
    }
}
maxOfTwoNumbers( 578 , 587 );

//2
function maxOfThree( num1 , num2 , num3 ){
   console.log(Math.max(num1 , num2 , num3));
}
maxOfThree ( 145 , 164 , 136);


//The world translator

var language1 = 'English';
var language2 = 'Arabic';
var language3 = 'French';

function helloWorld(language){
    if(language.language1 === 'English'){
        console.log('Hello World');
    }else if( language.language2 === 'Arabic'){
        console.log('مرحبا بالعالم');
    }else if( language.language3 === 'French'){
        console.log('Bonjour le monde');
    }
}
helloWorld(English);
helloWorld(Arabic);
helloWorld(French);


//The Grade Assigner

function assignGrade (grade){
if( grade >90){
    console.log('A');
}else if( grade > 80){
    console.log('B');
}else if( grade > 70){
    console.log('C');
}else if( grade > 60){
    console.log('D');
}else if( grade < 60){
    console.log('F');
}
}
assignGrade( 85);
assignGrade(62);
assignGrade( 50);

// pluralize


function pluralize ( animal , num ){ 
    if( num > 1){
        console.log('')
    }

}