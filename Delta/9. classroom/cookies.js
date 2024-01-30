const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

//app.use(cookieParser());    // cookie parser middleware
app.use(cookieParser("secretcode"));    // for signed cookie

app.get("/getcookies", (req, res) => {
    res.cookie("greet", "Hello");   // sending in key value pair
    res.cookie("origin", "India");
    res.cookie("name", "Alpha");
    res.send("we sent you a cookie!");
});


app.get("/", (req, res) => {
    console.dir(req.cookies);
    res.send("Hi, I am root!");
});

app.get("/greet", (req, res) => {
    let { name = "Anonymous" } = req.cookies;
    res.send(`Hi, ${name}`);
});

// Signed cookie
// app.use(cookieParser("secretcode"));     // for signed cookie require to send secretcode with middleware
app.use("/getsignedcookie", (req, res) => {
    res.cookie("color", "red", { signed: true });
    res.send("signed cookie sent");
});

// verify signed cookie
app.get("/verify", (req, res) => {
    // console.log(req.cookies);    // req.cookies have access of only unsigned cookies
    console.log(req.signedCookies); // signed cookie
    // if edited full string of value then show null object
    // and we edit ony the valuefrom value string then it will show false at value
});

app.listen(4444, () => {
    console.log("server listning on port 4444");
});