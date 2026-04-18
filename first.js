// let newBtn=document.createElement("button");
// let show=newBtn.innerText="click me ";
// console.log(show);





// let acc=document.querySelector("div");

// acc.append(newBtn);

// acc.prepend(newBtn);
// acc.before(newBtn);
// acc.after(newBtn);

// let ref=document.querySelector("h2");


// ref.remove();

let newBtn=document.createElement("button");
newBtn.style.backgroundColor="red";
newBtn.style.color="white";
newBtn.innerText="click me !";


console.log(newBtn);

let show=document.querySelector("body");

show.prepend(newBtn);
