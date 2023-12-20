let btn = document.querySelector('.btn1');
console.dir(btn);

function sayHello() {
    console.log('sayHello() function called.');
}

btn.onclick = sayHello;

btn.onclick = function () {
    console.log("Button was clicked");
    alert('Btn 2 clicked..');
    sayHello();
}

btn.onmouseenter = function () {
    console.log('Mouse at button');
}