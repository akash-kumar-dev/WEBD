    let h2 = document.querySelector("h2");

let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;
let lock = false;

document.addEventListener("keypress", function () {
    if (lock == false) {
        if (started == false) {
            console.log("Game is started.");
            started = true;
        }
        levelUp();
    }
    lock = true;
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 200);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // random btn choose
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    gameFlash(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);

    lock = true;

}

function checkAns(index) {
    // console.log("curr level ", level);

    if (userSeq[index] == gameSeq[index]) {
        // console.log("same value");
        if (userSeq.length == gameSeq.length) {
            lock = false;
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game over! Your Score was <b> ${level} <b> <br> Press any key to restart.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        reset();
    }
}

function btnPress() {
    console.log("btn pressed");
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    lock = false;
}