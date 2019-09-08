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