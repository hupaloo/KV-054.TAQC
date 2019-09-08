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
