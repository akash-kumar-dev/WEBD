const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


// handling get request
app.get("/register", (req, res) => {
    console.log(req.query);
    let {user, passwd} = req.query;
    console.log("GET: username:",user, "password:", passwd);
    res.send(`standard get request. Welcome ${user}`);
});

// handling post request
// parse post request data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post("/register", (req, res) => {
    let {user, passwd} = req.body;
    // post req data comes to req object's body property
    console.log(req.body);
    console.log("POST: username:",user, "password:", passwd);
    res.send(`standard POST request. Welcome ${user}`);
});