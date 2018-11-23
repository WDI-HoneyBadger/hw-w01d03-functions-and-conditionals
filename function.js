
//Part //
// 1
function maxOfTwoNumbers(num1, num2){

    if ( num1 > num2 ){
        return num1;
    } else {
        return num2;
    }
};
console.log(maxOfTwoNumbers(23, 50));


// 2
function maxOfThree (num1, num2, num3) {     
        return Math.max (num1, num2, num3); 
    }
console.log (maxOfThree (15,24,55));


//-------------PART Two ---------------//
function helloWorld (languge){
    if(languge == 'english'){
        return "Hello World";
    } else if(languge == 'arabic'){
        return "مرحبا بالعالم";
    } else{
        return "Bonjour le monde";
    }
};

console.log (helloWorld('arabic'));
console.log (helloWorld('english'));
console.log (helloWorld('frensh'));


//-------------PART Three ---------------//

function assignGrade(score){
    if(score > 90){
        return 'you get A';
    } else if(score > 80){
        return 'you get B';
    } else if(score > 70){
        return 'you get C';
    } else{
        return 'you get D';
    }
};
console.log(assignGrade(77));
//-------------PART Three ---------------//

// I could not solve it.






