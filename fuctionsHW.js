

//## Biggest Numbers

//1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. 
  
var num1 = 7
var num2 = 15

var maxOfTwoNumbers = function(num){
    if (num > 8){ 
    console.log(" Number is the largest");}

else 
{
    console.log (" Number is not the largest");}

}
maxOfTwoNumbers(num1);
maxOfTwoNumbers(num2);


//2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

var number1 = 2;
var number2 = 12;
var number3 = 60;

var maxOfThree = function(number){
    if (number >= 60){
        console.log("Number is the largest");
    } else {
    console.log("Number is not the largest");
}
}
maxOfThree(number1);
maxOfThree(number2);
maxOfThree(number3);

//## The World Translator

//Write a function named helloWorld that

//- takes 1 argument, a language code (for example "english", "arabic", "french")
//- returns "Hello, World" for the given language, for atleast 3 languages. (i.e. if the language is English, print `"Hello World"`, if the language is Arabic write something `"مرحبا بالعالم"`, if the language is French print `Bonjour le monde`)
//- Call that function for each of the supported languages and log the result to make sure it works.

var langCodeArabic = 'Arabic';
var langCodeEnglish = 'English';
var langCodeFrench = 'French';

var helloWorld = function(langCode){
        if (langCode == 'English'){
        console.log( "Hello World"); }
    
        else if (langCode == 'Arabic'){
            console.log (" مرحبا بالعالم");
        }
        else if (langCode =='French'){
            console.log("Bonjour le monde");
        }
    }

    helloWorld(langCodeArabic);
    helloWorld(langCodeEnglish);
    helloWorld(langCodeFrench);
    



//## The Grade Assigner

/*Write a function named assignGrade that
- takes 1 argument, a number score.
- returns a grade for the score, either "A", "B", "C", "D", or "F"., where anything over 90 gets an A, anything over 80 gets a B, anything over 70 gets a C, anything over 60 gets a D, and anything lower than 60 gets an F.
- Call that function for a few different scores and log the result to make sure it works. */

var studentGrade1 = 70;
var studentGrade2 = 85;
var studentGrade3 = 50;
var studentGrade4 = 95;

var assignGrade = function(studentGrade) {
    if (studentGrade >= 90 ){
        console.log("Students received an A. ");
    }
    else if (studentGrade >= 80) {
        console.log("Student received an B.");
    }
    else if (studentGrade>= 70){
        console.log("Student recevied an C.");
        
    }
    else if (studentGrade >= 60){
        console.log("Student recevied an D.");
    }
    else if (studentGrade < 60) 
        console.log("Student get an F.");
    }

assignGrade(studentGrade1);
assignGrade(studentGrade2);
assignGrade(studentGrade3);
assignGrade(studentGrade4);


/*## The Pluralizer

Write a function named pluralize that
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".
- Call that function for a few different scores and log the result to make sure it works. 
*/





var pluralize = function(name, num){
    if ( num >= 2 ){
        console.log(`${name}s`)
    }
    else { console.log(name)}
}

pluralize('dog' , 2);
pluralize('cat', 5);
pluralize('panda', 1);
pluralize('monkey', 3);




/*for example
```javascript
pluralize('giraffe', 5);  // returns "5 giraffes"
pluralize('door', 1); // returns "1 door"
``` */