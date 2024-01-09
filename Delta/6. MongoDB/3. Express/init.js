const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => console.log("MongoDB connection Succefull.."))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "neha",
        to: "preeti",
        msg: "send me your exam sheets",
        created_at: new Date(),
    },
    {
        from: "rohit",
        to: "mohit",
        msg: "teach me JS callbacks",
        created_at: new Date(),
    },
    {
        from: "amit",
        to: "sumit",
        msg: "all the best!",
        created_at: new Date(),
    },
    {
        from: "anita",
        to: "ramesh",
        msg: "hello",
        created_at: new Date(),
    },
    {
        from: "tony",
        to: "peter",
        msg: "see you later..",
        created_at: new Date(),
    }
];

Chat.insertMany(allChats);