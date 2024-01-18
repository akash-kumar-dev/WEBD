const express =  require("express");
const app = express();
const port = 4444;

// Middlewares always work irrespective of req body and path

app.use((req, res, next) => {
    console.log("Hi, I am 1st middleware");
    return next();
});


app.use((req, res, next) => {
    console.log("Hi, I am 1st-b middleware");
    next();
    console.log("After next() also execute");
});


app.use((req, res, next) => {
    console.log("Hi, I am 2nd middleware");
    return next();
});

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});