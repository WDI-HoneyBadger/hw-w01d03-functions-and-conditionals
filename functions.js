function maxOfTwoNumbers (num1,num2){
    if ((num1) > (num2))
    console.log(num1);
 else 
    if ((num1) < (num2))
    console.log(num2);
  else
    if ((num1)===(num2))
    console.log('both numbers the same');
}
maxOfTwoNumbers(34,26);
maxOfTwoNumbers(110,110);
maxOfTwoNumbers(2,67);
maxOfTwoNumbers(84,48);

function maxOfThree (num1,num2, num3){
    if ((num1) > (num2) && (num1)>(num3))
    console.log(num1);
 else 
    if ((num1) < (num2) && (num2)>(num3))
    console.log(num2);
  else
    if (((num1)<(num3) && (num2)<(num3)) || ((num1)>(num2) && (num1)<(num3)))
    console.log(num3);
 else 
    if ((num1)===(num2)&&(num2)>(num3))
    console.log((num1) || (num2));
    else
    if((num1)===(num2) && (num2)===(num3))
    console.log('all three numbers = '+ (num1));
   
}
maxOfThree(16,6,15);
maxOfThree(6,7,30);
maxOfThree(89,90,11);
maxOfThree(23,23,23); 
//function myLanguage()

/// Biggest Numbers//

/* function myLanguage(){
    if (Japanese)
    console.log('こんにちは世界');
}{
    if (Spanish)
    console.log('¡Hola mundo!');
}
{
    if (English)
    console.log('Hello World');
    }

var English = 'Hello World';
var Japanese = 'こんにちは世界';
var Spanish = '¡Hola mundo!';
myLanguage(Spanish) */
 

/*  function printLanguage(English,Spanish,Japanese){
   var English = "Hello World";
   var Spanish = "¡Hola mundo!";
   var Japanese = "こんにちは世界";
   
    if (English)
return ('Hello World');
else if (Spanish)
return ('¡Hola mundo!');
else if (Japanese)
return('こんにちは世界');
}


printLanguage('English');

 */



function myGrade( grade ){
    if (grade >= 90) 
    console.log('A');
    else
    if (grade >= 80)
    console.log('B');
    else
    if (grade >= 70)
    console.log('C');
    else
    if (grade >= 60)
    console.log('D');
    else
    console.log('F');
    }
    myGrade(59);
    myGrade(73);
    myGrade(82);
    myGrade(68);
    myGrade(92); 
    //The Grade Assigner

    /*var noun=['sheeps','geese','fish','octopi','cacti','sheep','goose','fish','octopus','cactus'];
     function pluralize( noun, num){
        
        var noun=['sheeps','geese','fish','octopi','cacti','sheep','goose','fish','octopus','cactus'];

        if (num > 1){
        console.log(num + noun);
        }else{
            console.log(num + noun)
        }

    }
    pluralize( noun, 4);*/
