// Docs: https://mongoosejs.com/docs/index.html

const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("mongoDB connection Successfull");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", UserSchema);
// //    |^ Model                |^ collection
// // mongoDB collection name if 'User' parses -> 'users'
// // 'Product' -> 'products'
// // 'Employee' -> 'employees'

// inserting Data

const user1 = new User({
    name: "Adam",
    email: "adam_ad@yahoo.com",
    age: 23,
});

user1.save();   // returns a promise

const user2 = new User({
    name: "bob",
    email: "bob_ad@yahoo.com",
    age: 22,
});

user2.save()
    .then((res) => {
        console.log(res);
        console.log("Data saved Successfully");
    })
    .catch((err) => {
        console.log(err);
    });


// // inserting many Data

User.insertMany([
    { name: "peter", email: "peter12@gmail.com", age: 23 },
    { name: "Johan", email: "johan32@gmail.com", age: 22 },
    { name: "eve", email: "evey332gmail.com", age: 21 },
]).then((res) => {
    console.log(res);
});


// // FIND
// model.find() -> returns a Query Object (thennable)
// Mongoose Queries are not promise. But they have a .then()

// // find all
User.find({}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

// to find age greater then 22
User.find({ age: { $gt: 22 } }).then((res) => {
    console.log(res);
    // console.log(res[0].name);
}).catch((err) => {
    console.log(err);
});

// Model.findOne() -> returns a single result
User.findOne({age: {$gt: 22}}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

User.findOne({_id: "659a794746d0ef6065dc0165"})
    .then((res) => {
        console.log(res);
    }) .catch((err) => {
        console.log(err);
    });

// findById
User.findById("659a794746d0ef6065dc0165")
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });