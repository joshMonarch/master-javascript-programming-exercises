function getLongestElement(arr) {
    if(arr.length == 0) {return ""}
    let lengths = arr.map(x => x.length)
    return arr[lengths.indexOf(Math.max(...lengths))]
    
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
