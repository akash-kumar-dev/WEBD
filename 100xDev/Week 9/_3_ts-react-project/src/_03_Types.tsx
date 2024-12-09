type User = {
    firstName: string;
    lastName: string;
    age: number;
}

interface User {
    firstName: string;
    lastName: string;
    age: number;
}

// interfaces can be implemented by classes but Types cannot

// parse id as argument,  which can be number or string
// we can not do this with interfaces

// function greet(id: (number | string)) {
    
// }

// 1. Union Types

type GreetArg = string | number;

function greet(id: GreetArg) {

}

// 2. Intersection Types
// if you want to combine multiple types into one, you can use the intersection type

type Employee = {
    id: number;
    name: string;
}

type Manager = {
    name: string;
    department: string;
}

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
    id: 1,
    name: 'John',
    department: 'IT'
}