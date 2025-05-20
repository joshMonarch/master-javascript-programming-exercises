function removeStringValues(obj) {
    for (const key in obj){
        typeof obj[key] == 'string' ? delete obj[key] : obj[key]
    }
    return obj
    
}

let obj = {
    name: 'Sam',
    age: 20
}

removeStringValues(obj);
console.log(obj); // --> { age: 20 }
