let numbr = 100;

function dec_to_bin(numbr){
    return (numbr > 0) ? numbr.toString(2) : (numbr>>>0).toString(2);
}

console.log(numbr + " in binary system: " + dec_to_bin(numbr));