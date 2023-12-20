console.log("Hello World..");

let a=4;
let b = 3;
console.log("a = ",a,"b = ",b);
console.log("a**b = ", a**b);

// Template Literals
console.log("Template Literals...");
let pencilPrice = 10;
let erasorPrice = 5;
console.log("The total Price is : ", (pencilPrice + erasorPrice),"Rupees.");
let output = "The total Price is : " + (pencilPrice + erasorPrice) + " Rupees.";
console.log(output);

let output2 = `The total Price is ${pencilPrice + erasorPrice} Rupees.`;
console.log(output2);
console.log(`the total Price is ${pencilPrice+erasorPrice} Rupees.`);