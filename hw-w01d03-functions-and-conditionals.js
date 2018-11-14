function maxOfTwoNumbers (num1, num2){
    if (typeof(num1)=='number'&&typeof(num2)=='number'){
        if (num1>num2){
            console.log(num1);
        }
        else if(num1<num2){
            console.log(num2);

        }
        else{console.log("is equel you have to agine ");}


    }
    else{console.log("not number")};
}
//maxOfTwoNumbers("ww",3);

function maxOfThree(n1,n2,n3){
    if (typeof(n1)=='number'&&typeof(n2)=='number'&&typeof(n3)=="number"){
        if(n1>n2 && n1>n3){
            console.log(n1);
        

            
        }
        else if (n2>n1 && n2>n3){
            console.log(n2);
        }
        else if(n3>n1 && n3>n2){
            console.log(n3);

        }
        else if(n1==n2 || n1==n3 || n3==n2){
            console.log("you hane change number");
        }

            
        

    }else{console.log("error shuld be number");}


}
//maxOfThree(3,5,6)

function helloWorld(s){
    switch(s){
        case "english":
        console.log("Hellow world");
        break;
        case "arabic":
        console.log("مرحبا بالعالم");
        break;
        case "franch":
        console.log("Bonjour le monde");
        default:
        console.log("err");
        
        


        
    }
}
//helloWorld("arabic");
/*

function assignGrade(gard){
    switch(gard){
        case 1:
        if(gard>=90){
            console.log('A');

        }break;
        case 2:
        if(gard>=80){
            console.log('B');

        }break;
        case 3:
        if(gard>=70){
            console.log('c');
            break;
        }
        //default :(g>100 && g<=60 && g<=0)
        //console.log("INVALID SCORE");
    }
}
assignGrade(80);
*/

/*
function assignGrade(gard){
    if(gard<=100 && gard >0){
    switch(gard){
        case gard>=90:
        console.log('A');
          break;
        case gard>=80:
        console.log('B');
        break;
        case gard>=70:
        console.log('c');
        break;
        case gard>=60:
        console.log("D");
        break;
        default :
        console.log("F");



    }
 }else{console.log("INVALID SCORE");}
}
assignGrade(70);*/

function Pluralizer(nNum,numm){
    if (numm>1){
    var b=numm+" "+nNum+"s";
    console.log(b);
    }
    else{b=numm+" "+nNum
    console.log(b);
}


}
Pluralizer('giraffe', 5);