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


var helloWorld = function(words){
    if (words == "Japanese"){ console.log("こんにちは世界")
    }else if(words =="Spanish"){ console.log("¡Hola mundo!")
    }else if (words == "English"){console.log("Hello World")
  }
}
helloWorld("Japanese")
helloWorld("Spanish")
helloWorld("English")




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
    
    

    function pluralize(noun,num ){
        if (num > 1){console.log(num + noun +"s");
       }else{console.log(num + noun);
     }
    }
    pluralize("dog",3)
