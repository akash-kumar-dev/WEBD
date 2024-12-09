type NmberArray = number[];
// interface can not be used for Arrays

function maxValue(arr: NmberArray): number {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

maxValue([1, 2, 3, 4, 5]); // 5