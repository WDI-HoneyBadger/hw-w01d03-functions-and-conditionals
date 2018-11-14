//Biggest Num
//1.Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.


/* function maxOfTwoNumbers(num1, num2){
    if (num1>num2){
        console.log(`${num1} is the biggeset number`);
    } else if (num1<num2){ 
        console.log(`${num2} is the biggest number`)
    } else {
        console.log(`${num1}, ${num2} are equal!`)
    }
}

maxOfTwoNumbers(2,3);
maxOfTwoNumbers(5,5);
maxOfTwoNumbers(7,6); */

//Biggest Num
//2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

/* function maxOfThree(num1, num2, num3){
    if (num1 !== num2 && num1 !== num3 && num2 !== num3){
        if   (num1>num2 && num1>num3){
            console.log(`${num1} is the largest out of the trhee numbers`);
        } else if (num2>num1 && num2>num3){
            console.log(`${num2} is the largest out of the three numbers`);
        } else {
            console.log(`${num3} is the largest out of the three numbers`);
        }
    } else {
        console.log('the three numbers are equals!');
    }
}

maxOfThree(3,6,9);
maxOfThree(7,7,7);
maxOfThree(6,2,9);
maxOfThree(1,8,2);

 */

 //The World Translator
/* function helloWorld(langCode){
    if (langCode === 'English' || langCode === 'Arabic' || langCode === 'French'){
        if (langCode === 'English'){
            console.log(`Let me see Hello, World in ${langCode}`);
        } else if (langCode === 'Arabic'){
            console.log(`Let me see ملاعلاب ابحرم in ${langCode}`);
        } else {
            console.log(`Let me see Bonjour le monde in ${langCode}`);
        }
    } else {
        console.log('Nothing applicable!!');
    }
}

helloWorld('Arabic');
helloWorld('english');
helloWorld(null);
helloWorld(3);
 */

 //The Grade Assigner
 
 /* function assignGrade(gradeScore){
     if (gradeScore >= 90){
         console.log('Awesome, you got an A!');
     } else if (gradeScore >= 80){
         console.log('Good job, you got a B!');
     } else if (gradeScore >= 70){
         console.log('You can do better, you got a C!');
     } else if (gradeScore >= 60){
         console.log('meh, you got a D!');
     } else {
         console.log('See you next semester, you got F!!!');
     }
 }

 assignGrade(60);
 assignGrade(true);
 assignGrade('70'); */
 // seems like I'm a mean teacher :|

 //The Pluralizer
/* function pluralize(noun, num){
      if (num == 1 || noun == "sheep" || noun == "geese") {
        console.log(`${num}, ${noun}`);
      } else if (num > 1) {
        console.log(`${num}, ${noun} + "s"`);
      } else {
        console.log('Wrong arguments!');
      }
  } */

  function pluralize(noun, num){
    if (num > 1){
        if (noun == 'sheep'){
            console.log(`${num} sheep`);
        } else if (noun == 'goose'){
            console.log(`${num} geese`);
        } else {
            console.log(`${num} ${noun}s`);
        }

    } else {
        console.log(`${num} ${noun}`);
    } 
}


pluralize('sheep', 3);
pluralize('goose', 2);
pluralize('dog', 4);
pluralize('cat', 1);