// function waitFunction() {
//     let p = new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve(("Hi there"));
//         }, 2000)
//     });
//     return p;
// }

// function main() {
//     waitFunction().then(function (value) {
//         console.log(value);
//     })
// }

// main();


function waitFunction() {
    let p = new Promise(function (resolve) {
        setTimeout(function () {
            resolve(("Hi there"));
        }, 2000)
    });
    return p;
}

async function main() {
    let value = await  waitFunction();
    console.log(value);
}

main();