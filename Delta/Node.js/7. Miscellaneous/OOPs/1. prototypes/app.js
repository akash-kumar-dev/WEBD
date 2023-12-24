let arr = [1, 2, 3];
let arr2 = [1, 2, 3];

arr.sayHello = () => {
    console.log("hello, i am Array");
}

arr2.sayHello = () => {
    console.log("hello, i am Array");
}

console.log(arr.sayHello === arr2.sayHello);
// output will be false
// because both function have occupied different locations of memory
// but both arrays prototype not makes copy of itself

console.log("abc".toUpperCase === "xyz".toUpperCase);
// output will be true
// because both string refering to same prototype location in memory

// reference prototye
console.log(arr.__proto__);

// changing push function in reference protoype
arr.__proto__.push = (num) => {
    console.log("push ", num);
}

// Actual Prototype

console.log(Array.prototype);
console.log(String.prototype);

// // Every object in JS has a built-in property, which is called its prototype