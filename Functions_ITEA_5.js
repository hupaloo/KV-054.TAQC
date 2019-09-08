let arr = [1, 2, 3, 5, 3, 2, 1];

function check(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            return true;
        }
    }
}

function histogram(arr){
    if (check(arr)){
        console.log("It is a negative value in the array.");
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            let str = "";
            for (let j = arr[i]; j > 0; j--) {
                str += "*";
            }
            console.log(str);
        }
    }
}

histogram(arr);