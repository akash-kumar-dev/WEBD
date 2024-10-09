const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

let numberOfRequests = 0;

function calculateRquests(req, res, next) {
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}

app.use(calculateRquests);

// function userMiddleware(req, res, next)
function userMiddleware(req, res, next) {
    if (username != "harkirat" && password != "pass") {
        res.status(403).json({
            msg: "Incorrect Inputs",
        });
    } else {
        next();
    }
};

function kidneyMiddleware(req, res, next) {
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({
            msg: "Incorrect Inputs",
        });
    } else {
        next();
    }
}

// app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
//     const username = req.headers.username;
//     const password = req.query.password;
//     const kidneyId = req.query.kidneyId;

//     res.send("Your health is good");
// })

// app.get("/kidney-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
//     // do something

//     res.send("Your health is good");
// })

app.get("/", function (req, res) {
    res.send("server running");
})

// global catches

// Error handling Middleware
app.use(function (err, req, res, next) {
    res.json({
        msg: "Something went wrong",
        err: err.message
    })
})

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})
