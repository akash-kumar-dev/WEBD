const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");

const sessionOptions = {
    secret: "secretcodestring",
    resave: false,
    saveUninitialized: true,
};

app.use(session(sessionOptions));

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    // console.log(req.session);
    req.session.name = name;
    console.log(req.session.name);
    // res.send(name);
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    res.send(`hello ${req.session.name}`);
});

app.listen(4444, () => {
    console.log("Server is listning on port 4444");
})