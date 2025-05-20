function findPairForSum(array, number) {
  for(let i = 0; i<array.length; i++) {
    for(let j = 0; j<array.length; j++) {
      if(i==j) {
        continue;
      }
      if((array[i]+array[j])===number) {
        return [array[i], array[j]];
      }
    }
  }

return [];

}
let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
