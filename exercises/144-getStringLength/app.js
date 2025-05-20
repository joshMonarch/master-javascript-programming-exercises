function getStringLength(string) {
    let arr = string.split("")
    let lastChar = arr.slice(-1)
    let count =  string.lastIndexOf(lastChar)+1

    return count

}

let output = getStringLength('hello');
console.log(output); // --> 5
