function listAllValues(obj) {
    let result = []

  for (const [_, value] of Object.entries(obj)){
    result.push(value)
  }
  return result
  
}

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
