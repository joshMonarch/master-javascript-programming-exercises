function flipEveryNChars(input, n) {
    let i=0;
    result = [];
    do {
        if((i+n)>=input.length) {
            result.push(flip(input.substring(i))); 
            break;
        }
        result.push(flip(input.substring(i, i+n)));
        i+=n;
    } while(i<=input.length);

    return result.join("")
}

function flip(input) {
    const chars = input.split('');
    const length = chars.length;
    let newChars = [...chars]
    let temp

    if(length === 1) {
        return newChars.join('');
    }
    for(let i = 0; i<length / 2; i++) {
        temp = newChars[i];
        newChars[i] = newChars[length-i-1];
        newChars[length-i-1] = temp
    }
    return newChars.join('')
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
