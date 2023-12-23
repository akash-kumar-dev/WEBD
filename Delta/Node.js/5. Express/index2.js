const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Root directory response");
});


// query strings    /search?q=
app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q) {
        res.send("No search query");
    }
    console.log(req.query);
    res.send(`results for ${q}`);
});

app.get("/About", (req, res) => {
    res.send("about directory response");
});

app.post("/", (req, res) => {
    res.send("you requested post request to root");
});


// path parameters
app.get("/path/:username", (req, res) => {
    let {username, id} =req.params;
    let code = `<h1>welcome to page @${username} </h1>`
    res.send(code);
});

app.get("*", (req, res) => {
    res.send("path does not exist.");
});