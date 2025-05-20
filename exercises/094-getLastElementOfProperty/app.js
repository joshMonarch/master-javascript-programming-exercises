function getLastElementOfProperty(obj, key){
    return Array.isArray(obj[key]) ? obj[key].pop() : undefined
}

console.log(getLastElementOfProperty({'key': [1,2,3,2,1,4]}, 'key'))