// map
// given an array, returns a new array in which every values is multiplied by 2
// [1, 2, 3, 4, 5]
// [2, 4, 6,8, 10]

const input = [1, 2, 3, 4, 5];
// const newArr = [];

// for(let i = 0; i< input.length; i++) {
//     newArr.push(input[i]*2);
// }

// console.log(newArr);

// other solution
function transform(i) {
    return i * 2;
}

const ans = input.map(transform);
console.log(ans);

// ----------------------------
// filtering

// for a given an input array returns even values

const arr = [1, 2, 3, 4, 5];
// const newaAns = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         newaAns.push(arr[i]);
//     }
// }
// console.log(newaAns);

const ans2 = arr.filter(function (n) {
    if (n % 2 == 0)
        return true;
    else
        return false;
});
console.log(ans2);