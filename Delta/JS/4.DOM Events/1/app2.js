let btn = document.querySelector(".btn1");

function sayHello() {
    console.log("Hello World");
}

function sayName() {
    name = prompt("Input Your Name : ");
    alert("Hello welcome " + name);
}

// btn.addEventListener("click",sayHello);
// btn.addEventListener("click",sayName);

btn.addEventListener("dblclick", function(){
    alert("Double clicked");
})