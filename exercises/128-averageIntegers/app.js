function average(arr) {
  return sum(arr)/arr.length
  
}

function sum(arr) {
  return arr.reduce((x,y) => x+y)
  
}

console.log(average([1, 2])); // --> 1.5
