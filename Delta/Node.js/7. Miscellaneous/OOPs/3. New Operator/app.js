// Constructors -> doesn't return anything & start with capital
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function() {
    console.log(`Hi! My name is ${this.name}`);
}

let p1 = new Person("adam", 23);
let p2 = new Person("eve", 25);

console.log(p1.talk === p2.talk);

// new keyword change here the value of `this` to window to p1