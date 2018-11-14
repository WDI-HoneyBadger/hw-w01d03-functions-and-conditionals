
//1
function greaterNum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(greaterNum(5, 10));


//2

function helloWorld(lang) {
    if (lang == 'fr') {
        return 'Bonjour tout le monde';
    } else if (lang == 'ar') {
        return 'مرحباً بالعالم';
    } else {
        return 'Hello, World';
    }
}

console.log(helloWorld('en'));
console.log(helloWorld('fr'));
console.log(helloWorld('ar'));


//3

function assignGrade(grade){
var grade = 80;

if ( grade >= 90 ){
    return 'A';
} else if ( grade >= 80 ){
    return 'B';

} else if ( grade >= 70 ){
    return 'C';
} else if ( grade >= 60 ){
    return 'D';
} else  ( grade < 60 ){
    return 'F';
}
}
console.log('you result is ' + assignGrade(95));
console.log('you result is ' + assignGrade(65));


//4

function pluralize(noun, number) {
    if (number != 1 && noun != 'sheep' && noun != 'geese') {
        return number + ' ' + noun + 's';
    } else {
        return number + ' ' + noun;
    }
}
console.log('I have ' + pluralize('dog', 0));
console.log('I have ' + pluralize('dog', 1));
console.log('I have ' + pluralize('dog', 2));