const fs = require("fs");

function kiratReadFile() {
    return new Promise(function (resolve) {
        fs.readFile("a.txt", "utf-8", function (err, data) {
            console.log("inside promise " + data);
            resolve(data);
        })
    })
}

function onDone(data) {
    console.log(data);
}

kiratReadFile().then(onDone);