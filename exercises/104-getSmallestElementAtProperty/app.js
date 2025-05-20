function getSmallestElementAtProperty(obj, key) {
    if (!key in obj) {return []}
    if (!Array.isArray(obj[key])) {return []}
    if (obj[key].length == 0) {return []}
    
    return Math.min(...obj[key])
  
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
