function getLengthOfShortestElement(arr) {
    if (arr.length == 0){return 0}
    return Math.min(...arr.map(x => x.length))
    
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
