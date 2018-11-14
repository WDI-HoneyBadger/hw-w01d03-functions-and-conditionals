.
///////////////////////////////1/////////////////////////////////////////

function maxOfTwoNumbers (num1 , num2) {
    if (num1>num2) {
        console.log("first number is larger = " ,num1);
    }
    else  
        console.log(" second number is larger = " ,num2);
    
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

function scores (num){

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
scores(92);
scores(82);
scores(70);
scores(63);
scores(50);
  //////////////////////// 5 /////////////////////////////////////


function pluralize(str, number){
if (number > 1 && str !== "sheep" && str !== "geese" && str !== "pencil" && str !== "Mobile"){
        console.log(`${number} ${str}s`);
    } 
    else {
        console.log(`${number} ${str}`);
    } };


pluralize ('book', 13);
pluralize('giraffe', 5);
pluralize('door', 1);
pluralize ('sheep', 2);
pluralize ('geese', 8);
pluralize ('pencil', 10);
pluralize ('Mobile', 2);
