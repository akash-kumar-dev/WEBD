const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");

// app.use(session({ secret: "supersecretstring" }));
app.use(session({secret: "supersecretstring", resave: false, saveUninitialized: true}));

app.get("/reqcount", (req, res) => {
    if(req.session.count) {
        req.session.count++;
    } else {
        req.session.count = 1;
    }
    res.send(`You sent a request ${req.session.count} times`);
});

app.listen(4444, () => {
    console.log("server listning on port 4444");
});