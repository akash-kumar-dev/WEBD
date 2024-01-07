const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("mongoDB connection Successfull");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        // min: 1,
        min: [1, "Price is too low for selling"],   // custom error
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
    genre: [String],
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Marvel Comics",
    author: "Marvel",
    price: 1200,
    category: "fiction",
    genre: ["comics", "super-heroes", "fiction"],
});

book1.save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })

// Above validations of Schema is only working for insertion
// for use same validations in updation set true to runValidators option

// Book.findByIdAndUpdate("659af7fd9df975900b8acb1d", {price: -100})
// .then((res) => console.log(res))
// .catch((err) => console.log(err));
// this will execute without any validation check

Book.findByIdAndUpdate("659af7fd9df975900b8acb1d", { price: -100 }, { runValidators: true })
    .then((res) => console.log(res))
    .catch((err) => console.log(err.errors.price.properties.message));  // accessind Only Custom Error
// error