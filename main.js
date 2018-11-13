

var maxOfTwoNumbers = function(num1,num2){
   if (num1 === num2) {
         console.log("numbers are equal");
   }
    else {
          if (num1 > num2)
        {
          console.log("The greater number is ", num1 );
        }
         else 
         {
            console.log("The greater number is ", num2 );
          }
    }
}

maxOfTwoNumbers(8,9);


var maxOfThree = function (num1,num2,num3) {
if ((num1 === num2) && (num2 === num3)) {
        console.log("numbers are equal");
  }
   else {
    if (num1 > num2 && num1 > num3)
  {
    console.log("The greater number is ", num1 );
}

else if (num2 > num1 && num2 > num3){
    console.log("The greater number is ", num2 );
}

else{
    console.log("The greater number is ", num3 );
}}
}

maxOfThree(77,77,77);


var  helloWorld = function (language){

    if (language == "English") {
        console.log("Hello, World");
    }
    else if (language == "Arabic") {
        console.log("مرحبا بالعالم");
    }
    else if (language == "French") {
        console.log("Bonjour le monde");
    }
    else {
        console.log("Please choose between English, Arabic or French");
    }
}

helloWorld("English");
helloWorld("Arabic");
helloWorld("French");
helloWorld("chinees");

var assignGrade = function(score){

    if(score >= 90){
        console.log("You scored A")
     }
    else if(score >= 80){
        console.log("You scored B")
     }
     else if(score >= 70){
        console.log("You scored C")
     }
     else if(score >= 60){
        console.log("You scored D")
     }
     else
     console.log("You scored F")
}
assignGrade(81);
assignGrade(95);
assignGrade(66);

var pluralize = function(noun,numb){
    if (numb == 1){
        console.log((numb + " "  + noun));
    }
    else if(noun === 'octopus'){
        console.log((numb + " octopi"));
    }
    else if(noun === 'cactus'){
        console.log((numb + " cacti"));
    }
    else if((noun === 'fish') || (noun === 'sheep')){
        console.log((numb + " "  + noun));
    }
    else{
        console.log((numb + " "  + noun + "s"));
    }
}
pluralize("cactus",1); 
pluralize("cactus",7); 
pluralize("sheep",8); 
pluralize("fish",7); 

