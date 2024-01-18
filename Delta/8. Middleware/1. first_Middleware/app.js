const express = require("express");
const app = express();

// for all incoming requests here only middleware function will be used
// because this middleware not parsing the request to next forward

app.use((req, res) => {
    let { query } = req.query;  // Middlewares can access the req and also send res
    console.log(query);
    console.log("Hi.. i am middleware");
    res.send("Middleware finished");    // for all requests respond will be
});

app.get("/", (req, res) => {
    res.send("Hi.. i am root");
});

app.get("/random", (req, res) => {
    res.send("This is a Random");
});

const port = 4444;

app.listen(port, () => {
    console.log(`app is listining on port ${port}`);
});