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
