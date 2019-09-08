function battleShip(size) {
    let rowIndex = Math.floor(Math.random() * (size + 1));
    let colIndex = Math.floor(Math.random() * (size + 1));
    let matr = [];
    for (let i = 0; i < size; i++){
        matr[i] = [];
        for (let j = 0; j < size; j++) {
                matr[i][j] = "-";
        }
    }
    console.log("<----- Battlefield game ----->\nRules: You have an area " + size + "*" + size + "\nYou have only one chance to find the ship!\nThe game starting.\n");
    fieldOutput(matr);
    let rl = require('readline');
    let prompts = rl.createInterface(process.stdin, process.stdout);
    prompts.question("Input x: ", function (x) {
        prompts.question("Input y: ", function (y) {
            let a = battleFieldChange(x, y, size, rowIndex, colIndex, matr);
            fieldOutput(matr);
            if (a){
                console.log("Unfortunately you don`t kill the ship. Please, start a new game.")
            }
            else{
                console.log("Congratulations! You killed it!");
            }
            prompts.close();
        });
    });
}

function battleFieldChange(x, y, size, rowIndex, colIndex, matr){
    if((rowIndex == x) && (colIndex == y)){
        matr[x][y] = "#";
       return false;
    }
    else{
        matr[x][y] = "+";
        return true;
    }
}

function fieldOutput(matr){
    for (let i = 0; i < matr.length; i++){
        let output = "";
        for (let j = 0; j < matr.length; j++){
            output += matr[i][j] + "\t";
        }
        console.log(output);
    }
    console.log("\n");
}

battleShip(5);