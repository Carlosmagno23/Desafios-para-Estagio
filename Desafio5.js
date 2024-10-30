function inverterString (str) {
    let rString = ""; 

    for(let num = str.length - 1; num>= 0; num--) {
        rString = rString + str[num];
    }
    return rString;
}

let invertidoStr = inverterString('Holla')
console.log(invertidoStr);
