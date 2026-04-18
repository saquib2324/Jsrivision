// console.log("saquib ansari");
// let age=23;
// const student ={

// name: "saquib ansari",
// age : 2,
// cgpa:10,
// isPass:true,

// };

// student.age=student.age+20;

// console.log(student.age);
// // conditional statements 

// let umar=15;

// if(umar>18){
//     console.log("your age is greater than 18 ",umar,"yes you cann vote ");
// }else{console.log("you can not vote");}


// let number=prompt("enter the number ")

// if(number%5===0){
//     console.log("yes the number ",number,   "is divisible by 5 ");

// }else{
//     console.log("no the number",number,"is not divisible by 5");
// }


// let marks=Number(prompt("enter you marks:"));

// if(marks>=90 && marks<=100){
//     console.log("your grade is A ");
// }else if(marks>=80 && marks<=89){
//     console.log("your grade is b ");
// }else if(marks>=70 && marks<=79){
//     console.log("your grade is c");
// }else  if(marks>=60 && marks<=69){
//     console.log("your grade is D ");
// }else if(marks>=50 && marks<=59){
//     console.log("your grade is E ");

// }else{
//     console.log("padhai krle fail hai tu!!!! ");
// }

// for(let i=1;i<=5;i++){
//     console.log("my name is saquib ansari 5 times ");

// }
// let size=5;
// let count;

// let sum=0;
// for(let i=1;i<=size;i++){

// sum=sum+i

// }
// console.log(sum);
// let n="saqui ansari";

// for(let i of n ){

//     console.log("i=",i);
// }

 
// for(i=0;i<=100;i=i+2){
//     console.log(i);
// }


// let gameNumber=25;

// let guess=prompt("enter your number to guess:");


// while(gameNumber!=guess){

// guess=prompt("you entered wrong number , try again");
// }
// console.log(" Congradulation ! you have guess the right number ");

/*
let str="mssaqui";

console.log(str);

console.log(str.length);

console.log(str[0]);


let obj ={

    item: "pen",
    price:20,
}

let output=`the item ${obj.item} cost is ${obj.price} rupees`;

console.log(output);

                        //string tamplate   (string in js is immutable means after mutation it remains same )

// upperCase

let str01="saquib";

console.log(str01.toUpperCase());
console.log(str01);


//lower case

 let str02="ANSARI";

 console.log(str02.toLowerCase());

 //trim

let str03="                      saquib   ansari ";
 console.log(str03.trim());


 // 4. slice

 let str4="abcdef";

 console.log(str4.slice(0,3));

 //5. concate

 let str5="concate";
 console.log(str5.concat(str4));//str1 + str2 also work

 //6. replace

 let str06="saquib";

 console.log(str06.replace("a","m"));// write value name not index number 

 // 7. chatAt for index finding value

 let str07="saquib";

 console.log(str07.charAt(0));
 // practice Q. take input as a user name and print it as start with @ and also at the end type the leangth of the username string

// let userName01=prompt("enter you name ");
// let atTheRate="@";
// let length=userName01.length;

//  let final=atTheRate+userName01+length;
//   console.log(final);


                 // arrays 
console.log(" arrays start from here :");
let arr=[22,22,33,44,5,5,33,550,"saquib"];//syntax

//for(let price of arrPrices){
console.log(arr[0]);//array indice


// looping over an array 

let looparr=[1,2,3,4,5,55];

// for(let i=0; i<looparr.length;i++){// make sure that do not use <= use only < bcoz arrays's indexes start from 0th

//     console.log(looparr[i]);
// }


// for of 
for( let loop of looparr){
    //  console.log(loop);

}

// question to find the average of the marks arr=[85,97,44,37,76,60];

let stuMarks=[85,97,44,37,76,60];

//average=sum of all number divide by the no. of numbers 

let sum=0;
let length=stuMarks.length;

for(let i=0;i<length;i++){

    sum=sum+stuMarks[i];
    
}
// console.log(`the average of marks of student is ${sum/length}`);


// question that says there are 5 item in a array which has offer of 10% after 10% discount make  list of pricee

let arrPrices=[250,645,300,900,50];

// for 10% discount eg- (250/100)*10 
let discount;
let offerPrice;
for(let i =0;i<arrPrices.length ;i++){

discount=arrPrices[i]/10;
arrPrices[i]=arrPrices[i]-discount;

}
//console.log(arrPrices);

let foodItems=["chips","mango","lichi","pizza"];

console.log(foodItems);

foodItems.push("burger");
 console.log(foodItems);
 //pop se delete from thee end and return 
 // toSting se convert hoda from array to sting 
 //concat()se joint hoga
 //unshit()add to start hoga
 // shit()delete from the start
// slice(strIndx,endIndx) // it doesn't change original array 
//splice(strIndx,deleteCount,addElement) // change original array 
let spliceMethod=[2,3,4,5,6,7,8,9];

let ch=spliceMethod.splice(2,3,2,11,10);

console.log(ch);
console.log(spliceMethod);

 // bss 
 // question
 let company =["bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

 //(a). remove the first company from the array 
let a= company.shift(1);
 console.log(a);
 console.log(company);

//b. remove uber and ola from its place

company.splice(1,1,"ola");
//c. add amazone at the end 

company.push("amazon");
 console.log(company);

 console.log("array ends here !00");*/

            // functions and methods 
function sum(x,y){
    s=x+y;
    return s;

}
let ad = sum(4,5);
console.log(ad);

// arrow funcion 

const arrowFunction=(x,y)=>{
return x+y;

}

let jod= arrowFunction(2,200);
console.log(jod);
//Q take sting and return no. of vowels by using function by function key word

function namee(a){
let count=0;

    for(let i = 0; i<a.length;i++){

    if(a[i]=="a"|| a[i]=="e" ||a[i]=="i" || a[i]=="o" || a[i]=="u"){
count++;

    }
    
    }
    return count;
}

let vowel=namee("saquib");

//console.log(vowel);



// same question by arrowFunction

let f=(b)=>{
    let count=0;

 for(let i =0; i<b.length;i++){
        if(b[i]=="a"|| 
            b[i]=="e" ||
            b[i]=="i" || 
            b[i]=="o" ||
            b[i]=="u"){
            count++;
        }
    }
    return count;

};


// Q FROM  a given array pritn the square of each element by forEach

let arr=[2,4,5,6,7];

arr.forEach((val,i)=>{
console.log(val**2,i)

})


// map same as forEach it just gives new array 
//filer same but filter as per our demand 
//reduce where we want one value like finding 
console.log("functions ends here");

let heading=document.getElementById("heading1");

console.dir(heading);

let classes=document.getElementsByClassName("cl1");
console.dir(classes);


let para=document.getElementsByTagName("p");

console.dir(para);

//special method which work on everyone 

let element=document.querySelector("p")//(".class")//("#id");
                                //All -> for all 
//some more

/*.tagName - show the tag type
.innerText  -show the inner text
.innerHtml  -show the text as well as html tags
.textContent -show the hidden text */

let text=document.querySelector("h1");

console.dir(text.innerText);

text.innerText=text.innerText+" apna college";

let boxes=document.querySelectorAll(".box");

boxes[0].innerText="this is first change";
boxes[1].innerText="this is second change";
boxes[2].innerText="this is third change";


// insert element

let newBtn=document.createElement("button");

console.log(newBtn);

newBtn.innerText="click me";

newBtn.style.color="blue";
console.log(newBtn);



let div=document.querySelector("div");

div.append(newBtn);

