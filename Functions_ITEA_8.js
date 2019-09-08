function game(min, max){
    if (min === max){
        console.log("Your range of values is 0. Please, change the range and try again.");
    }
    else{
        if (min > max){
            let temp = min;
            min = max;
            max = temp;
        }
        else{
            let rand = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log("Let`s play a game.\nThe right number is somewhere between " + min + " and " + max + "."+ "\nHope, you`ll find it quickly!\nPrint the number below.");
            let standard_input = process.stdin;
            standard_input.setEncoding('utf-8');
            standard_input.on('data', function (data) {
                if (data == rand){
                    console.log("You are successfully find the correct number. Congratulations!");
                    process.exit();
                }
                else{
                    console.log("That one was wrong. Try again.")
                }
            });
        }
    }
}

game(5, 15);