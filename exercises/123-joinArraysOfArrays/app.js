function joinArrayOfArrays(arr) {
  return arr.flatMap(x => x)
  
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
