type Input = number | string;

function firstEl(arr: Input[]) {
    return arr[0];
}

// const value = firstEl([1, 2, "harkirat"]);  // argument should of string Array or number Array
// function firstEl(arr: string[] | number[]) {
//     return arr[0];
// }


const value = firstEl(["harkirat", "singh"]);
// console.log(value.toUpperCase());   // typescript is not able to infer the right type of retturn data

function getFirsteElement<T>(arr: T[]): T {
    return arr[0];
}

const el = getFirsteElement(["harkirat", "singh"]); // String
// const el = getFirsteElement<string | number>(["harkirat", "singh", 1, 2]);
const el2 = getFirsteElement<number>([1, 2, 3]);    // number
const el3 = getFirsteElement<boolean>([true, false]);    // boolean
console.log(el.toUpperCase());