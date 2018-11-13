function maxOfTwoNumbers(firstnumber , secondnumber){
if (firstnumber > secondnumber){
console.log(firstnumber + "larger than" + secondnumber)
}
else {
console.log(firstnumber + "less than" + secondnumber)
}
return;
}
maxOfTwoNumbers(3,6);




function maxOfThree(firstnumber,secondnumber,thirdnumber){
return Math.max(firstnumber,secondnumber,thirdnumber)
}
console.log(maxOfThree(2,4,6));



function helloWorld(language){
if(language == "english" ){
    console.log("hello , world");
}else if(language == "arabic"){
console.log(" مرحبا بالعالم ");
}else if(language == "french"){
    console.log("bonjour le monde");
}
helloWorld(english);
helloWorld(arabic);
helloWorld(french);




function assignGrade(score){
if(score > 90){
    return A ;
}
else if(score > 80){
    return B;
} else if(score > 70){
    return C ;
}else if (score > 60){
    return D;
}else if(score < 60){
    return F;
}
console.log(assignGrade(99));
console.log(assignGrade(85));
console.log(assignGrade(75));
console.log(assignGrade(65));
console.log(assignGrade(55));
}

function pluralize(noun ,number){
if (number!=1 && noun!='sheep' && noun!= 'geese'){
    return number + '' + noun + 's';
}else
return number + '' + noun ;
}
pluralize('giraffe',5);
pluralize('door',1);

}
