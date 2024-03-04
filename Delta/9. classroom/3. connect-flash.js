const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
    secret: "secretcodestring",
    resave: false,
    saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

// middleware for res.locals
app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    if (name === "anonymous") {
        req.flash("error", "user not registered");
    } else {
        req.flash("success", "user registered successfully!");
    }
    // key and message pair
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    // console.log(req.flash("success"));
    // res.render("page.ejs", { name: req.session.name, msg: req.flash("success") });
    // res.locals.successMsg = req.flash("success");
    // res.locals.errorMsg = req.flash("error");
    res.render("page.ejs", { name: req.session.name });
});

app.listen(4444, () => {
    console.log("Server is listning on port 4444");
})