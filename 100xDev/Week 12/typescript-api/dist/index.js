"use strict";
function sumOfAges(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAges({ name: "Alice", age: 30 }, { name: "Bob", age: 25 });
console.log(age);
