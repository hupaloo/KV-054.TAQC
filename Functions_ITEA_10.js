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