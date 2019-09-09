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
    let i = 0;
    let vars = [];
    let prompts = rl.createInterface(process.stdin, process.stdout);
    prompts.on('line', function (data) {

        vars[i] = data.toString().trim();
        i++;
        if(i > 1){
            if (checkCoordinates(vars[0], rowIndex, vars[1], colIndex, size)){
                console.log("Congratulations! You killed it!");
                prompts.close();
            } else {
                i = 0;
            }
        }
    }).on('close', function () {
        process.exit(0);
    });

    function checkCoordinates(x, x1, y, y1, size) {
        if ((Number(x) > size) || (Number(y) > size) || (Number(x) <= 0) || (Number(y) <= 0)) {
            console.log("Wrong input data!");
            return false;
        }
        else{
            if (Number(x) === x1 && Number(y) === y1) {
                matr[x - 1][y - 1] = "#";
                fieldOutput(matr);
                return true;
            } else {
                matr[x - 1][y - 1] = "+";
                fieldOutput(matr);
                return false;
            }
        }
    };
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

battleShip(4);
