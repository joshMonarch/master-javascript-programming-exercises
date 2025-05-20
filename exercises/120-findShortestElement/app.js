function findShortestElement(arr) {
    if (arr.length == 0){return ""}
    let lengths = arr.map(x => x.length)
    return arr[lengths.indexOf(Math.min(...lengths))]

}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'