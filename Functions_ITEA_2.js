let arr = [-2, -1, 1, 2, 3, 4, 5];

function sum(arr){
    let arrSum = 0;
    for (let i = 0; i < arr.length; i++){
        arrSum += arr[i];
    }
    return arrSum;
}

function multiply(arr){
    let arrMultipl = 1;
    for (let i = 0; i < arr.length; i++){
        arrMultipl *= arr[i];
    }
    return arrMultipl;
}

console.log("Sum of the array: " + sum(arr));
console.log("Multitude of the array: " + multiply(arr));