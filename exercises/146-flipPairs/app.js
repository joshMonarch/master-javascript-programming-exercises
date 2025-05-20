function flipPairs(input) {
    const chars = input.split('');
    const len = chars.length;
    let result = []
    for (let i = 0; i<(len-1); i+=2) {
        result.push(chars[i+1])
        result.push(chars[i])
    }
    if(input.length % 2 != 0){
        result.push(input.slice(-1))
    }
    return result.join('')
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
