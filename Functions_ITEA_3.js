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