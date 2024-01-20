const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = 4567;
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
    .then(() => console.log("MongoDB connection Succefull.."))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.get("/", (req, res) => {
    console.log("trying to access root");
    res.send("root is working");
});

// Index Route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats });
});

// New Route
app.get("/chats/new", (req, res) => {
    // throw new ExpressError(404, "Page NOT found");
    // throwing error with non async function
    res.render("new.ejs");
})

// Create Route
app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    // console.log(newChat);
    newChat.save()
        .then((res) => {
            console.log("new chat saved");
        })
        .catch((err) => {
            console.log(err);
        });
    res.redirect("/chats");
});

// edit route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
});

// Update route
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });

    console.log(updatedChat);
    res.redirect("/chats");
});

// Delete route
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});

// New - show Route
app.get("/chats/:id", async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if(!chat) {
        // throw new ExpressError(404, "Chat not found");  // in async error Express By default not calling to next
        return next(new ExpressError(404, "Chat not found"));
    }
    res.render("edit.ejs", { chat });
});

// error handling middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Some error Occured" } = err;
    res.status(status).send(message);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});