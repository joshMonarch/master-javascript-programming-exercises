function getElementOfArrayProperty(obj, key, index) {
    if (!key in obj) {return undefined}
    if (!Array.isArray(obj[key])) {return undefined}
    if (obj[key].length == 0) {return undefined}
    
    return obj[key][index]
}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
