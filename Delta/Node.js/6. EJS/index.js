const express = require("express");
const app = express();
const path = require("path");

const port = 8080;


app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/JS")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random()*6)+1;
    // res.render("rolldice.ejs", {num: diceVal};
    // // seocnd argument inside {} is a object. num is key and diceVal is value for key that can be use inside .ejs file
    // res.render("rolldice.ejs", {diceVal: diceVal});
    // // key and keyvalue may be same , for this condition can be written also -
    res.render("rolldice.ejs", {diceVal});
});

// app.get("/ig/:username", (req, res) => {
//     let {username} = req.params;
//     // console.log(username);
//     res.render("instagram.ejs", {username});
// });

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    let data = instaData[username];
    // console.log(data);
    if (data) {
        res.render("instagram.ejs", {data});
    } else {
        res.render("error.ejs");
    }
});