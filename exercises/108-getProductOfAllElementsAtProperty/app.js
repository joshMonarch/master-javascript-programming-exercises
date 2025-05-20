function getProductOfAllElementsAtProperty(obj, key) {
    if (!key in obj) {return 0}
    if (!Array.isArray(obj[key])) {return 0}
    if (obj[key].length == 0) {return 0}
    
    return obj[key].reduce((x,y) => x*y)
    
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
