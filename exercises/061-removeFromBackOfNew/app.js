function removeFromBackOfNew(arr) {
  arr = arr.slice(0, arr.length-1)
  return arr
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
