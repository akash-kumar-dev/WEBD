// // async function -> returns promise

// async function greet() {
//     // throw("some random errors");
//     // by throw we can generate error, by this promise will be rejected.
//     return "hello World";
// }

// greet()
//     .then((result) => {
//         console.log("promise was resolved");
//         console.log("result : ", result);
//     })
//     .catch((error) => {
//         console.log("promise was rejected with error: ", error);
//     });

// // assigning arrow function to async function
// let demo = async () => {
//     // return 1;
// }

// demo();




function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo() {
    await getNum();
    // await can be only use inside the async function
    getNum();
    getNum();
}

demo();