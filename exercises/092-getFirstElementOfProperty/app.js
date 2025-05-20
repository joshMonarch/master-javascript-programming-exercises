function getFirstElementOfProperty(obj, key) {
    return Array.isArray(obj[key]) ? obj[key][0]: undefined
}

let obj = {
    'key1': 1,
    'key2' : [2,3,4]
}

console.log(getFirstElementOfProperty(obj, 'key2'))