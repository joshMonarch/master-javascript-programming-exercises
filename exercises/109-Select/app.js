function select(arr, obj){
    for (const [key, _] in obj){
        if (!arr.includes(key)){
            delete obj[key]
        }
    }

    return obj
}

  let arr = ['a', 'c', 'e'];
  let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };

console.log(select(arr, obj))
