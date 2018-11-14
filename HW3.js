
///////////////////////////////1/////////////////////////////////////////

function maxOfTwoNumbers (num1 , num2) {
    if (num1>num2) {
        console.log(" first number is largest for the second number = " ,num1);
    }
    else  
        console.log(" second number is largest for the first number = " ,num2);
    
    };
    maxOfTwoNumbers (20, 60);
    maxOfTwoNumbers (300, 40);
///////////////////////////////2/////////////////////////////////////////
function maxOfThree(num1, num2, num3){
    console.log("The largest number is = ", Math.max(num1, num2, num3));
}

maxOfThree(3, 40, 93);
maxOfThree(211, 70, 88);
maxOfThree(10, 188, 90);

//or
///////////////////////////////2/////////////////////////////////////////

function maxOfThree2 (a, b, c) {
    if ((a >= b) && (a >= c)) { 
        return a;
    } else if ((b >= a) && (b >= c)) {
        return b;
    } else {
        return c;
    }
}

console.log(maxOfThree2(10,100,20))
//////////////////////// 3 /////////////////////////////////////


function hello(language){
    if (language=== "English") {
        console.log("Hello, World ");
      
    }
    else if (language==="arabic") {
        console.log("مرحبا بالعالم ");
    }
    
    else if (language === "French" ){
        console.log("Bonjour le monde ");
    }
    else{
     console.log("The language is not found");

    }

    };
    hello ("English");
    hello ("French");
    hello ("arabic");
  //////////////////////// 4 /////////////////////////////////////

function score (num){

    if (num >="90") {
        console.log("score is : A");
      
    }
    else if  (num >="80") {
        console.log("score is : B");
    }
    
    else if  (num >="70") {
        console.log("score is : C");
    }
    else if  (num >="60") {
        console.log("score is : D");
    }

    else{
        console.log("score is : F ");

    }
};
score(92);
score(82);
score(70);
score(63);
score(50);
  //////////////////////// 5 /////////////////////////////////////


function pluralize(str, number){
if (number > 1 && str !== "sheep" && str !== "geese" && str !== "fruit" && str !== "jewelry"){
        console.log(`${number} ${str}s`);
    } 
    else {
        console.log(`${number} ${str}`);
    } };


pluralize ('home', 13);
pluralize('giraffe', 5);
pluralize('door', 1);
pluralize ('sheep', 2);
pluralize ('geese', 8);
pluralize ('fruit', 10);
pluralize ('jewelry', 2);
