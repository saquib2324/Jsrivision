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

let userName01=prompt("enter you name ");
let atTheRate="@";
let length=userName01.length;

 let final=atTheRate+userName01+length;
  console.log(final);


