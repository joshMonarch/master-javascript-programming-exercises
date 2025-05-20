let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    for (const key in obj){
        if (Number.isInteger(obj[key]) && obj[key] > num){
            delete obj[key]
        }
    }
    return obj
}

console.log(removeNumbersLargerThan(3, obj))