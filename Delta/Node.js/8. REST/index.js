const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4: uuidv4} = require('uuid');
// for generate unique id
const methodOverride = require("method-override");
// for forcing client side reuets to define methods

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "i don't like coding",
    },
    {
        id: uuidv4(),
        username: "anonymous",
        content: "Hard work is important to acheive success",
    },
    {
        id: uuidv4(),
        username: "rahul_kumar",
        content: "I got selected for my first internship",
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.post("/posts", (req, res) => {
    console.log(req.body);
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts");
});

app.get("/posts/new", (re, res) => {
    res.render("new.ejs");
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
});

app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});