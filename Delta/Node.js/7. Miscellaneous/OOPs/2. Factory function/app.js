// factory function -> a funcrion that creates object

function personMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${this.name}`);
        },
    };

    return person;
}

let p1 = personMaker("adam", 25);
// console.log(p1.talk());  //copy
let p2 = personMaker("eve", 21);
// console.log(p2.talk());  // copy

console.log(p1.talk === p2.talk);
// output will be false