let p = document.querySelector("p");

p.addEventListener("mouseenter", function() {
    console.log("Mouse goes on paragraph..");
})

let div = document.querySelector(".box");

div.addEventListener("mouseenter", function() {
    console.dir(this);
    console.log("Mouse inside div..");
})

// this in Event Listener
let p1 = document.querySelector(".p2");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let btn = document.querySelector("button");

function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}


btn.addEventListener("click", changeColor);
p1.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);