function computeProductOfAllElements(arr) {
  if (arr.length == 0) {return 0}
  return arr.reduce((x,y) => x*y)
  
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
