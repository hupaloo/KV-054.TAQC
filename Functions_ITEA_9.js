let str = "[[[]]][]";

function check(str){
    for (let i = 0; i < str.length; i++){
        if ((str[i] == "[") || (str[i] == "]")){
            return false;
        }
        else{
            return true;
        }
    }
}

function parenthesesCheck(str){
    if (str.length <= 1){
        return false;
    }
    let stack = [];
    for (let i = 0; i < str.length; i++){
        if (str[i] == "]"){
            if (stack.length == 0 || (stack.pop() != "[")){
                return false;
            }
        }
        else{
            stack.push(str[i]);
        }
    }
    return (stack.length == 0)
}

if (check(str)){
    console.log("There is not only parenthesis in your text.")
}
else {
    if (parenthesesCheck(str)) {
        console.log("OK. String consists of valid parentheses.")
    } else {
        console.log("NOT OK. String consists of invalid parentheses.")
    }
}