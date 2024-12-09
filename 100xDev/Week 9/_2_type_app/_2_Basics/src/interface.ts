// without interace we need to define every time type of object in function

// function isLegal(user: {
//     firstName: string,
//     lastName: string,
//     age: number
// }) {
//     if(user.age < 18) {
//         return false;
//     } else {
//         return true;
//     }
// }


// 

interface User {
    firstName: string,
    lastName: string,
    age: number,
    email?: string     // optional Argument
}

function isLegal(user: User) {
    if(user.age < 18) {
        return false;
    } else {
        return true;
    }
}

function greet(user: User) {
    console.log(`Hello ${user.firstName} ${user.lastName}!`);
}

isLegal({
    firstName: "John",
    lastName: "Doe",
    age: 18
})