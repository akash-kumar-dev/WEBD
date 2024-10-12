const express = require("express");
const app = express();
const zod = require("zod");
const port = 8080;

const schema = zod.array(zod.number());

// {
//     email: string => email
//     password: atleast 8 characters
//     country: "IN", "US"
// }

const schema2 = zod.object({
    // email: zod.string().email(),
    email: zod.string().email().endsWith("@google.com"),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})

app.use(express.json());

app.post("/health-checkup", function (req, res) {
    // kidneys = [1, 2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);

    if (!response.success) {
        res.status(400).json({
            msg: "Incorrect Inputs",
        });
    } else {
        res.send({
            response
        })
    }
});

app.get("/validate-input", function (req, res) {

});


app.listen(port, () => {
    console.log("server is running");
})