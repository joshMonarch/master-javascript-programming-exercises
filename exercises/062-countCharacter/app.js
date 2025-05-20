function countCharacter(str, char) {
    let cont = 0
    for (let i = 0; i < str.length; i++){
        if (str[i] == char) { cont++ }
    }
    return cont
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
