function getEvenElementsAtProperty(obj, key) {
        if (!key in obj) {return []}
    if (!Array.isArray(obj[key])) {return []}
    if (obj[key].length == 0) {return []}
    
    return obj[key].filter(num => num % 2 == 0)
    
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
