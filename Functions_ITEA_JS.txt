//-----------------------------------------------------------
// 1

console.log("\n^1");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Input your name, please.\n> ", (prompt) => {
    if (prompt.length == 0){
        prompt = "stranger";
    }
    console.log("Hello, " + prompt + "!");
    readline.close();
    process.stdin.destroy();
});

//-----------------------------------------------------------
// 2

console.log("\n\n^2");
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

//-----------------------------------------------------------
// 3

console.log("\n^3");
let str = "I am an Automated Tester.";

function reverse(str){
    let reverse_str = "";
    for (let i = str.length - 1; i >= 0; i--){
        reverse_str += str[i];
    }
    return reverse_str;
}

console.log("Usual string: \t\t" + str);
console.log("Reversal string: \t" + reverse(str));

//-----------------------------------------------------------
// 4

console.log("\n^4");
let word1 = "radar";
let word2 = "SoftServe";

function is_palindrome(word){
    let flag = true;
    for (let i = 0; i < word.length; i++){
        if (word[i] === word[word.length - 1 - i]){
            continue;
        }
        else{
            flag = false;
            break;
        }
    }
    return (flag === true) ? " is palindrome word!" : " is not palindrome word!";
}

console.log(word1 + is_palindrome(word1));
console.log(word2 + is_palindrome(word2));

//-----------------------------------------------------------
// 5

console.log("\n^5");
let arrr = [1, 2, 3, 5, 3, 2, 1];

function checkk(arrr){
    for (let i = 0; i < arrr.length; i++){
        if (arrr[i] < 0){
            return true;
        }
    }
}

function histogram(arrr){
    if (checkk(arrr)){
        console.log("It is a negative value in the array.");
    }
    else {
        for (let i = 0; i < arrr.length; i++) {
            let str = "";
            for (let j = arrr[i]; j > 0; j--) {
                str += "*";
            }
            console.log(str);
        }
    }
}

histogram(arrr);

//-----------------------------------------------------------
// 6

console.log("\n^6");
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let symbols = " .,/?<>|!@#$%^&*()-=+~`';"
let testText = "Text for checking Caesar Cipher."

function caesar_cipher(str, numbr){
    let cipherText = "";
    for (let i = 0; i < str.length; i++){
        if (symbols.search(str[i]) != -1){
            cipherText += str[i];
            continue;
        }
        let position = alphabet.search(str[i].toLowerCase());
        while ((position + numbr) > alphabet.length - 1) {
            position -= alphabet.length;
        }
        cipherText += (str[i] == str[i].toUpperCase()) ? alphabet[position + numbr].toUpperCase() : alphabet[position + numbr].toLowerCase();
    }
    return cipherText;
}

console.log("Text with caesar cipher: " + caesar_cipher(testText, 7));

//-----------------------------------------------------------
// 7

console.log("\n^7");
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

//-----------------------------------------------------------
// 8

console.log("\n^8");
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

//-----------------------------------------------------------
// 9

console.log("\n^9");
let strr = "[[[]]][]";

function check(strr){
    for (let i = 0; i < strr.length; i++){
        if ((strr[i] == "[") || (strr[i] == "]")){
            return false;
        }
        else{
            return true;
        }
    }
}

function parenthesesCheck(strr){
    if (strr.length <= 1){
        return false;
    }
    let stack = [];
    for (let i = 0; i < strr.length; i++){
        if (strr[i] == "]"){
            if (stack.length == 0 || (stack.pop() != "[")){
                return false;
            }
        }
        else{
            stack.push(strr[i]);
        }
    }
    return (stack.length == 0)
}

if (check(strr)){
    console.log("There is not only parenthesis in your text.")
}
else {
    if (parenthesesCheck(strr)) {
        console.log("OK. String consists of valid parentheses.")
    } else {
        console.log("NOT OK. String consists of invalid parentheses.")
    }
}

//-----------------------------------------------------------
// 10

console.log("\n^10");
str = "aabbcccMykyta";

let dict = {}

function char_freq(str){
    for (let i = 0; i < str.length; i++) {
        if (dict.hasOwnProperty(str[i])){
            dict[str[i]]++;
        }
        else {
            dict[str[i]] = 1;
        }
    }
    for (key in dict){
        console.log(key, dict[key]);
    }
}

char_freq(str);

//-----------------------------------------------------------
// 11

console.log("\n^11");
let numbr = 100;

function dec_to_bin(numbr){
    return (numbr > 0) ? numbr.toString(2) : (numbr>>>0).toString(2);
}

console.log(numbr + " in binary system: " + dec_to_bin(numbr));

//-----------------------------------------------------------
// 12

console.log("\n^12");
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