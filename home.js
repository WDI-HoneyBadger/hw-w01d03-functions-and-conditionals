function maxOfTwoNumbers(num1, num2){
    if (num1 > num2)
    {
        console.log("This is the largest number");
    }else if (num2 > num1){
        console.log("This is not the largest number");
    }
}

maxOfTwoNumbers(7 ,6);




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
    
    maxOfThree(3,2,1);





    function helloWorld(langCode){

        if (langCode=='English'){
            console.log('Hello world');
        }else if(langCode=='Arabic'){
            console.log('مرحبا بالعالم');}
        else {
     
     console.log('Bonjour le monde');
        }}
        //helloWorld('English');
       //helloWorld('Arabic');
        helloWorld('Fransh');



        function assignGrade(numScore){
            if (numScore >= 90) {
                console.log("A");
              } else if (numScore>= 80) {
                console.log("B");
              } else if (numScore >= 70) {
                console.log("C");
              } else if (numScore >= 60) {
                console.log("D");
              } else {
                console.log("F");
              }
         
         }
         
         assignGrade(99);
         assignGrade(87);
         assignGrade(79);
         assignGrade(67);
         assignGrade(50);
         
         
         //The Pluralizer
         
         

         function pluralizer(noun,number){
         if (number==1){
         console.log('"',number,' ',noun,'"');
         }else
         {
            console.log('"',number,' ',noun+'s','"');
         }
         }
         
         pluralizer('giraffe',1);
         pluralizer('door',2);
         pluralizer('cat',5);
         pluralizer('dog',1);
         
         
         