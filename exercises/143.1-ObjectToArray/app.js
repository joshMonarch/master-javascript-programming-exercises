function getAllKeys(obj) {
  let result = []

  for (const [key, _] of Object.entries(obj)){
    result.push(key)
  }
  return result
  
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
