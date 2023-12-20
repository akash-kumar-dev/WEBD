function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success : Data is saved...");
        } else {
            reject("failure : weak connection...");
        }
    });
}

// savetoDb("Apna College")
//     .then(() => {
//         console.log('promise was resolved');
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     });


// Promise chaning
// savetoDb("apna college")
//     .then(() => {
//         console.log("Data1 saved");
//         savetoDb("Data 2").then(() => {
//             console.log("Data2 saved..");
//         })
//     })
//     .catch(() => {
//         console.log("promise was rejected.")
//     })


// modified version of promise chaning
// savetoDb("Apna College")
//     .then(() => {
//         console.log("data1 sved");
//         return savetoDb("data2");
//     })
//     .then(() => {
//         console.log("data2 saved");
//         return savetoDb("data3");
//     })
//     .then(() => {
//         console.log("data3 saved");
//     })
//     .catch(() => {
//         console.log("Promise Rejected...");
//     });


 savetoDb("Apna College")
    .then((result) => {
        console.log("data1 sved");
        console.log("result of promise: ", result);
        return savetoDb("data2");
    })
    .then((result) => {
        console.log("data2 saved");
        console.log("result of promise: ", result);
        return savetoDb("data3");
    })
    .then((result) => {
        console.log("data3 saved");
        console.log("result of promise: ", result);
    })
    .catch((error) => {
        console.log("Promise Rejected...");
        console.log("error of promise: ", error);
    });