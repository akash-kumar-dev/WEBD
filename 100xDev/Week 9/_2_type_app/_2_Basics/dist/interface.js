"use strict";
// without interace we need to define every time type of object in function
function isLegal(user) {
    if (user.age < 18) {
        return false;
    }
    else {
        return true;
    }
}
function greet(user) {
    console.log(`Hello ${user.firstName} ${user.lastName}!`);
}
isLegal({
    firstName: "John",
    lastName: "Doe",
    age: 18
});
