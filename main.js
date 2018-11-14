
/*1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the 
largest of them. Use the if-then-else construct available in Javascript.*/ 

function mamaxOfTwoNumbers(firstNumber, secondNum){
  
    if (firstNumber > secondNumber) {
       console.log(firstNumber + " is larger than " + secondNumber);
    } else {
        console.log(firstNumber + " is less than " + secondNumber);
    }
    
}
mamaxOfTwoNumbers(33, 60);


//2. Define a function `maxOfThree` that takes 
//three numbers as arguments and returns the largest of them.


function maxOfThree(a, b, c) {
    if ((a >= b) && (a >= c)) { 
        return a;
    } else if ((b >= a) && (b >= c)) {
        return b;
    } else {
        return c;
    }
}

console.log(maxOfThree(10,40,100));

// ## The World Translator

// Write a function named helloWorld that:

// - takes 1 argument, a language code (for example "english", "arabic", "french")
// - returns "Hello, World" for the given language, for atleast 3 languages. 
//(i.e. if the language is English, print `"Hello World"`, if the language is Arabic write something 
//`"مرحبا بالعالم"`, if the language is French print `Bonjour le monde`)
// - Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(language) {
    if (language == 'Arabic') {
        return 'مرحبا بالعالم';
    } else if (language == 'espanniol') {
        return 'Hola, Mundo';
    } else {
        return 'Hello, World';
    }
}

console.log(helloWorld('Arabic'));
console.log(helloWorld('espanniol'));
console.log(helloWorld('english'));

/*## The Grade Assigner

Write a function named assignGrade that:
- takes 1 argument, a number score.
- returns a grade for the score, either "A", "B", "C", "D", or "F"., 
where anything over 90 gets an A, anything over 80 gets a B, anything over 70 gets a C, 
anything over 60 gets a D, and anything lower than 60 gets an F.
- Call that function for a few different scores and log the result to make sure it works.*/

function assignGrade(grade) {
    if (grade >=90){
        console.log( 'A')
        }
        else if (grade >=80 ){
            console.log( 'B')

        }
        else if (grade >= 70 ){
            console.log( 'C')


        }
        else if (grade >= 60 ){
                    console.log( 'D')

        }
        else {
            console.log( 'F')
            
        }
    }
    assignGrade(88);
    assignGrade(55);
    assignGrade(99);
    assignGrade(77);
    assignGrade(66);







