const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("mongoDB connection Successful");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("user", UserSchema);


// updating Adam age to new age 33
User.updateOne({ name: "Adam"}, {age: 33})
.then((res) => {
console.log(res);
})
.catch((err) => {
console.log(err);
});

// updating from all dbs whose age greater than 30
User.updateMany({ age: {$gt: 30}}, {age: 50})
.then((res) => {
console.log(res);
})
.catch((err) => {
console.log(err);
});

// .updateOne() and .updateMany() returns a object of extra information (meta Data)
// but if we want to get updation value then we have following methods

User.findOneAndUpdate({ name: "eve" }, {age: 45})
.then((res) => {
console.log(res);
})
.catch((err) => {
console.log(err);
});
// returns object of old value of selected db

User.findOneAndUpdate({ name: "eve" }, {age: 45}, {new: true})
.then((res) => {
console.log(res);
})
.catch((err) => {
console.log(err);
}); // returns updated object data

// Model.findByIdAndUpdate();


// Delete in Mongoose

User.deleteOne({ name: "eve" })
    .then((res) => console.log(res));

User.deleteMany({ age: 22 })
    .then((res) => console.log(res));

User.findByIdAndDelete("659ac2ac4a82e4693ba1f2f1")
    .then((res) => console.log(res));


// Model.findOneAndDelete();