let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

function diagonal_reverse(matr){
    for (let i = 0; i < matr.length; i++) {
        for (let j = 0; j < matr.length; j++) {
            if (j > i) {
                let numbr = matr[j][i];
                matr[j][i] = matr[i][j];
                matr[i][j] = numbr;
            }
        }
    }
}

function matrixOutput(matr){
    if (matr.length != matr[0].length){
        console.log("There is a different number of columns and rows. Matrix can`t be reversed.")
    }
    else {
        for (let i = 0; i < matr.length; i++) {
            let output = "";
            for (let j = 0; j < matr.length; j++) {
                output += matr[i][j] + " \t";
            }
            console.log(output);
        }
        console.log("\n");
    }
}

matrixOutput(matrix);
diagonal_reverse(matrix);
matrixOutput(matrix);