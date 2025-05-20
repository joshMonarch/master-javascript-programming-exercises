function getLargestNumberAmongMixedElements(arr) {
    let countNumber = arr.filter(x => typeof x === 'number').length
    if (arr.length == 0 || countNumber == 0){return 0}

    return Math.max(...arr.filter(x => typeof x === 'number'))
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
