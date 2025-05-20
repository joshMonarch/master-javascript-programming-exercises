function getLongestWordOfMixedElements(arr) {
    let countStrings = arr.filter(x => typeof x === 'string').length
    if (arr.length == 0 || countStrings == 0){return ""}
    
    let lengths = arr.map(x => typeof x !== 'string' ? x.toString().length: x.length)

    return arr[lengths.indexOf(Math.max(...lengths))]
    
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
