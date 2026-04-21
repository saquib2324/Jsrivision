let hower=document.querySelector("div");

// hower.onmouseover=(e)=>{
 
//     console.log("this  box is howered by the mouse : ")
//       console.log(e);
//     console.log(e.type);

    
    
    
//      console.log(e.clientX, e.clientY);
// }
// hower.addEventListener("mouseover",()=>{

// console.log("this is listenere fun actiavted : ")

// });

// hower.addEventListener("mouseover",()=>{

// console.log("this is listenere fun actiavted :2nd time ")

// });
let btn1=document.querySelector("#btn");

let color="white";

btn1.addEventListener("click",()=>{

if(color==="white"){
    console.log("this is white mode ");
 color="dark";
  document.querySelector("body").style.backgroundColor="white";
 


}else{
    console.log("this is dark mode ");
 color="white";
  document.querySelector("body").style.backgroundColor="black";
}


});
