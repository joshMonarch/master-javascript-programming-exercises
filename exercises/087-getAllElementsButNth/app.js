function getAllElementsButNth(array, n) {
    let newArray = array.filter(num => array.indexOf(num) !== n)
    return newArray
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
