h1 = document.querySelector("h1");
/*
setTimeout(() => {
    h1.style.color = "red";
}, 1000);

setTimeout( () => {
    h1.style.color = "pink";
}, 2000);

setTimeout( () => {
    h1.style.color = "orange";
}, 3000);
*/

// this is difficult to remember the time of next color to set for next color.
// for modyfying this case check following code:

// function changeColor(color, delay, nextColorChange) {
    // setTimeout( () => {
        // h1.style.color = color;
        // if (nextColorChange) nextColorChange();
    // }, delay);
// }
// 
// changeColor("red", 1000, () => {
    // changeColor("blue", 1000, () => {
        // changeColor("orange", 1000, () => {
            // changeColor("pink", 1000, () => {
                // changeColor("green", 1000);
            // });
        // });
    // });
// });

// callback nesting -> callback hell


function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log("colur changed to ", color);
            resolve();
        }, delay);
    });
}

// changeColor("red", 1000)
//     .then(() => {
//         console.log("red color changed");
//         return changeColor("blue", 1000);
//     })
//     .then(() => {
//         console.log("blue color changed");
//         return changeColor("orange", 1000);
//     })
//     .then(() => {
//         console.log("orange color changed");
//     })

//  replacing above code with async and await keyword
// async function demo() {
//     await changeColor("red", 1000);
//     await changeColor("yellow", 1000);
//     await changeColor("purple", 1000);
//     await changeColor("green", 1000);
//     await changeColor("orange", 1000);
//     changeColor("blue", 1000);
// }


// now finally replacing code for error handeling try and catch
async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("yellow", 1000);
        await changeColor("purple", 1000);
        await changeColor("green", 1000);
        await changeColor("orange", 1000);
        changeColor("blue", 1000);
    } catch(err) {
        console.log("error caught : ", err);
    }
}