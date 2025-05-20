function computeSummationToN(n) {
  let acc = 0

  while(n != 0){
    acc += n
    n--
  }
  return acc
  
}

let output = computeSummationToN(6);
console.log(output); // --> 21

