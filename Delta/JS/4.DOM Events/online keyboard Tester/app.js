let body = document.querySelector("body");

body.addEventListener("keydown", function (event) {
    let display = document.querySelector(".display");
    console.log(display.innerText);
    display.innerText = event.code;

    let Tab = document.querySelector(".Tab");
    if (event.code == 'Tab') {
        Tab.style.backgroundColor = "red";
    }
    let Q = document.querySelector(".Q");
    if (event.code == 'KeyQ') {
        console.log("changing DIV color");
        Q.style.backgroundColor = "red";
    }

    let W = document.querySelector(".W");
    if (event.code == 'KeyW') {
        W.style.backgroundColor = "red";
    }

    let E = document.querySelector(".E");
    if (event.code == 'KeyE') {
        E.style.backgroundColor = "red";
    }

    let R = document.querySelector(".R");
    if (event.code == 'KeyR') {
        R.style.backgroundColor = "red";
    }

    let T = document.querySelector(".T");
    if (event.code == 'KeyT') {
        T.style.backgroundColor = "red";
    }

    let Y = document.querySelector(".Y");
    if (event.code == 'KeyY') {
        Y.style.backgroundColor = "red";
    }

    let U = document.querySelector(".U");
    if (event.code == 'KeyU') {
        U.style.backgroundColor = "red";
    }

    let I = document.querySelector(".I");
    if (event.code == 'KeyI') {
        I.style.backgroundColor = "red";
    }
    let O = document.querySelector(".O");
    if (event.code == 'KeyO') {
        O.style.backgroundColor = "red";
    }
    let P = document.querySelector(".P");
    if (event.code == 'KeyP') {
        P.style.backgroundColor = "red";
    }

    console.log("key : ", event.key);
    console.log("code : ", event.code);
    console.log("key code : ", event.keyCode);
})