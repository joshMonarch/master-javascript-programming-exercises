function findShortestWordAmongMixedElements(arr) {
    let countStrings = arr.filter(x => typeof x === 'string').length
    if (arr.length == 0 || countStrings == 0){return ""}

    let lengths = arr.map(x => typeof x !== 'string' ? String.toString(x): x).map(x => x.length)
    return arr[lengths.indexOf(Math.min(...lengths))]
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
