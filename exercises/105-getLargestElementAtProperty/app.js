function getLargestElementAtProperty(obj, key) {
    if (!key in obj) {return []}
    if (!Array.isArray(obj[key])) {return []}
    if (obj[key].length == 0) {return []}
    
    return Math.max(...obj[key])
    
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
