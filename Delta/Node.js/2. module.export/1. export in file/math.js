const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const g = 9.8;
const pi = 3.14;

// module.exports = "hello";

// let obj = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     pi: pi,
// };

// module.exports = obj;

module.exports = {
        sum: sum,
        mul: mul,
        g: g,
        pi: pi,
    };

module.exports.minus = (a, b) => a - b;
module.exports.greet = () => {
    console.log("test");
    return "another method to export.";
}