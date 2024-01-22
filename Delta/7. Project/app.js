const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./schema.js");

main()
    .then(() => {
        console.log("MongoDB connection successful");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.send("hi this is root");
});

// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "My new Villa",
//         description: "By the beach",
//         price: 1200,
//         location: "Calangute, Goa",
//         coountry: "India"
//     });

//     await sampleListing.save().then((res) => {
//         console.log("data saved ", res);
//     });
//     res.send("Data saved");
// });

// index route
app.get("/listings", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));

// New Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

// show route
app.get("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
}));

// create Route
app.post("/listings", wrapAsync(async (req, res, next) => {
    let result = listingSchema.validate(req.body);
    console.log(result);
    if(result.error) {
        throw new ExpressError(400, result.error);
    }
    // validation for schema
    // if (!req.body.listing) {
    //     throw new ExpressError(400, "Send valid data for listing");
    //     // 400 -> Bad Request
    // }
    // let { title, description, image, price, country, location } = req.body;
    const newListing = new Listing(req.body.listing);
    // if (!newListing.title) {
    //     throw new ExpressError(400, "Title is missing!");
    // }
    // if (!newListing.description) {
    //     throw new ExpressError(400, "Description is missing!");
    // }
    // if (!newListing.price) {
    //     throw new ExpressError(400, "Price is missing!");
    // }
    await newListing.save();
    res.redirect("/listings");
}));

// Edit Route
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
}));

// Update Route
app.put("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
}));

// Delete Route
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedList = await Listing.findByIdAndDelete(id);
    console.log(deletedList);
    res.redirect("/listings");
}));

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page NOT found!"));
});

// Error handling middleware
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went Wrong!" } = err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs", { err });
});

const port = 4444;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});