// create a middle-ware for an api that checks if the access token was passed in the query string or not.

const express = require("express");
const app = express();
const port = 4444;

// app.use("/api", (req, res, next) => {
//     let { token } = req.query;
//     if(token == "giveaccess"){
//         next();
//     }
//     res.send("Access Denied");
// });

// app.get("/api", (req, res) => {
//     res.send("data");
// });

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token == "giveaccess") {
        next();
    }
    res.send("Access Denied!");
}

app.get("/api", checkToken, (req, res) => {
    res.send("Data");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});