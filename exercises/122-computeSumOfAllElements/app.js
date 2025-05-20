function computeSumOfAllElements(arr) {
  return arr.reduce((x,y) => x+y)
  
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
