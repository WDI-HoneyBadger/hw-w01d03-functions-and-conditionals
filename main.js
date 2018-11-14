//Biggest Numbers

//Q1

var maxOfTwoNumbers = function(num1, num2 ){

    if(num1>num2){

        console.log(num1);
    }else{

        console.log(num2);
    }
}

maxOfTwoNumbers(113,5);


//Q2

var maxOfThree = function(num1, num2, num3){

    if(num1 > num2){
        console.log(num1);
    }else if (num2 > num3){

        console.log(num2);
    }else{

        console.log(num3);
    }
}

maxOfThree(3011,622,10);


//The World Translator

var helloWorld = function(words){

    if(words == "English"){

        console.log("Hellow World!");
    }else if (words == "Arabic"){

        console.log("مرحباً بالعالم!");
    }else if (words == "Franch") {

        console.log("Bonjour le monde");
    }
}

helloWorld("Franch");


//The Grade Assigner

var assignGrade = function(grade){

    if(grade > 90){
    console.log("A Grade");
    }else if (grade >80){
        console.log("B Grade");
    }else if (grade >70 ){

        console.log("C Grade");
    }else if(grade >60){

        console.log("D Grade");
    }else if(grade < 60){

        console.log("F Grade");
    }
}

assignGrade(91);


//The Pluralizer

var pluralize = function(noun, num){

    if (num > 1){

        console.log("You have " + num + " " + noun+"s.");

    
    }else{

        console.log("You have "+ num + " " + noun+".");
    }
}

pluralize("dog", 0);
