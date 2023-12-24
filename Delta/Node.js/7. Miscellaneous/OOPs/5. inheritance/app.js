class Person {  // Base or Parent class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, My name is ${this.name}`);
    }
}

// Student -> child class
class Student extends Person {
    constructor(name, age, marks) {
        super(name, age);
        // parent class constructor is being called
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}

let student1 = new Student("eve", 23, 87);
let Teacher1 = new Teacher("steve", 32, "math");