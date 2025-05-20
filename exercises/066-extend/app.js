let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    for (const key of Object.keys(obj2)) {
        console.log(key, obj2[key])
        if (obj1[key] === undefined){
            obj1[key] = obj2[key]
        }
    }
    return obj1

}

console.log(extend(obj1, obj2))