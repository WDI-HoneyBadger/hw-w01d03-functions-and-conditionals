
//Biggest Numbers
function maxOfTwoNumbers(num1,num2){
    if(num1>num2){
        console.log('the ',num1,'grater than',num2);
    }else if (num2>num1){
        console.log('the ',num2,'grater than',num1);
    }else{
        console.log('the ',num1,'=',num2);
    }
}
maxOfTwoNumbers(1,2);
maxOfTwoNumbers(2,1);
maxOfTwoNumbers(2,2);

//The World Translator

function helloWorld(langCode){

    if (langCode=='English'){
        console.log('Hello world');
    }else if(langCode=='Arabic'){
        console.log('مرحبا بالعالم');}
    else {

 console.log('Bonjour le monde');
    }}
    helloWorld('English');
    helloWorld('Arabic');
    helloWorld('Fransh');

//The Grade Assigner

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

assignGrade(100);
assignGrade(89);
assignGrade(79);
assignGrade(69);
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
