//Biggest Numbers of two

function maxOfTwoNumbers (num1, num2){
    if (num1 > num2){
        console.log('the biggest number is' + num1);

    } 
    else { 
        console.log('the biggest number is' + num2);

    }
    }
    maxOfTwoNumbers(10,20); 

//max of three
  function maxOfThree (num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        console.log('the largest number is' + num1);

    } else if (num2 > num1 && num2 > num3){
        console.log('the largest number is' + num2);}

        else if (num3 > num1 && num3 > num2){
            console.log('the largest number is' + num3)
        }

    }
    maxOfThree(10, 20, 30); 

//The World Translator
     function helloWorld (language){
        if (language == 'English'){
            console.log('Hello World')
        }
        else if (language == 'Arabic'){
            console.log('مرحبا بالعالم')

        } else if (language == 'French'){
            console.log('Bonjour le monde')
        }

    }
    helloWorld('English');
    helloWorld('Arabic');
    helloWorld('French'); 
    
//The Grade Assigner

       function assignGrade (score){
        if (score >= 90) {
            console.log('you grade is A')
        } else if (score >= 80){
            console.log('you grade is B')
        } else if (score >= 70){
            console.log('your grade is C')
        } else if (score >= 60){
            console.log('your grade is D')
        } else if (score < 60){
            console.log('your grade is F')
        }

    }

    assignGrade(90);
    assignGrade(66);
    assignGrade(77);
    assignGrade(55);
    assignGrade(44); 

//The Pluralizer
    function pluralize (num, noun); {
        if(num > 1 || noun == 'giraffe'){
            console.log(num,' giraffe');

        }   else if(num == 1 || noun == 'giraffe'){
            console.log(num + ' giraffe'); 

        }   else if(num > 1){
            console.log(num, noun+'s');
        }
    
    }
    