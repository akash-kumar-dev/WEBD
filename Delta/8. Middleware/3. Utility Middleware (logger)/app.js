const express = require("express");
const app = express();
const port = 4444;

// logger - morgan
app.use((req, res, next) => {
    // req.time = new Date(Date.now());
    req.time = new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path, req.time);
    next();
});

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

// 404
app.use((req, res) => {
    res.status(404).send("Page NOT found");
});

app.listen(port, () => {
    console.log(`Server is listining on port ${port}`);
});