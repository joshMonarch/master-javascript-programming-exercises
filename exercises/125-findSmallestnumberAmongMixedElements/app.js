function findSmallestNumberAmongMixedElements(arr) {
  let countNumber = arr.filter(x => typeof x === 'number').length
  if (arr.length == 0 || countNumber == 0){return 0}
  
  return Math.min(...arr.filter(x => typeof x === 'number'))
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
