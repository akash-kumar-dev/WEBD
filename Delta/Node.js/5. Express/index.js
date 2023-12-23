const express = require("express");
const app = express();  // returns a object

// console.dir(app);

let port = 8080;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

// handling a requests

app.use((req, res) => {
    // console.log(req);
    // req -> JS converts incoming request (all http have text based request)to a object and store in req
    console.log("new incoming request");

    // res.send("this is text response.");  // text base response

    // // JSON response
    // res.send({
    //     name: "apple",
    //     color: "red",
    // }); // this is object but Express converts in JSON format to response

    // HTML response
    let code = "<h1>Fruits</h1> <ul><li>apple</li> <li>Mango</li> </ul>";
    res.send(code);
});

// app.use() for send root response only