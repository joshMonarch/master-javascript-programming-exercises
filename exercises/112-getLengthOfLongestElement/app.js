function getLengthOfLongestElement(arr) {
    if (arr.length == 0){return 0}
    return Math.max(...arr.map(x => x.length))
    
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
