function removeNumberValues(obj) {
    for (const key in obj) {
        if (typeof obj[key] == 'number') {
            delete obj[key]
        }
    }
    return obj
}

let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
