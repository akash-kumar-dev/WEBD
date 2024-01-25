// One to Many implementation
// store a referance to the child document inside parents

const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
    .then(() => console.log("connection successfull"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
});

// Pre : run before the query is executed
// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("PRE MIDDLEWARE");
// });

// post - run after the query is executed
customerSchema.post("findOneAndDelete", async (customer) => {
    // console.log("POST MIDDLEWARE");
    if (customer.orders.length) {
        let res = await Order.deleteMany({ _id: { $in: customer.orders } });
        console.log(res);
    }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCust = async () => {
    let newCust = new Customer({
        name: "Karan Arjun",
    });

    let newOrder = new Order({
        item: "Burger",
        price: 250,
    });

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("Added new customer");
}

// addCust();

const delCust = async () => {
    let data = await Customer.findByIdAndDelete("65b2bbd6b6b8fae25261cbc5");
    console.log(data);
}

delCust();  // Customer's Order will not delete