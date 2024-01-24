// One to few implementation

const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
    .then(() => console.log("connection successfull"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema ({
    username: String,
    addresses: [
        {
            _id: false,     // no id will set by Mongoose for addresses
            location: String,
            city: String,
        },
    ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async() => {
    let user1 = new User({
        username: "sherlockholmes",
        addresses: [{
            location: "2218 Baker Street",
            city: "London"
        }]
    });
    user1.addresses.push({location: "P32 WallStreet", city: "london"});
    let result = await user1.save();
    console.log(result);
}

addUsers();