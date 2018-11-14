//  ##Biggest Numbers 1
function maxOfTwoNumbers (num1 , num2){

    if ( num1 > num2){
    console.log(num1)

    } else {
        console.log(num2)
    }
}
maxOfTwoNumbers( -1 , 1) ;

//  ##Biggest Numbers 2
function maxOfThree(num1,num2,num3){

    if ( num1 > num2 && num1 > num3){
    console.log(num1);

    } else if (num2 > num1 && num2 > num3){
        console.log(num2);

    } else  {
        console.log(num3);
    }
}

maxOfThree(4,5,3);

// ## The World Translator 1

function helloWorld(language){

    if (language == "English"){
    console.log("Hello World");

    }else if (language == "Arabic"){
        console.log("مرحبا بالعالم");

    }else if (language == "French"){
        console.log("Bonjour le monde");
    } 
}

helloWorld("English");
helloWorld("Arabic");
helloWorld("French"); 

// ## The Grade Assigner // typeof(num)

function assignGrade(num){
    if (num > 90){
        console.log("A");
    } else if(num > 80){
        console.log("B");
    }else if(num > 70){
        console.log("C");
    }else if( num > 60){
        console.log("D");
    }else if(num  < 60){
        console.log("F");
    }
}
    assignGrade(100);
    assignGrade(55);

// ## The Pluralizer
 function pluralize(noun , number){
if (number != 1 && noun != 'sheep' && noun != 'geese' && noun != 'fish') {
    console.log(number +" "+ noun+"s");
    
} else {
    console.log(number +" " + noun);
}
}
pluralize('giraffe', 0);
pluralize('dog', 1);
pluralize('fish', 5);
pluralize('cat',4)



