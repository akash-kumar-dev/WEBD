class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi! My name is ${this.name}`);
    }
}

let p1 = new Person("adam", 24);
let p2 = new Person("eve", 23);

console.log(p1.talk === p2.talk);
// True