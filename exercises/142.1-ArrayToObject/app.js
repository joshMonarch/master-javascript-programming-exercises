function transformFirstAndLast(array) {
  if(array.length < 2) {
    return null;
  }
  let obj = {}
  const first = array[0]
  const last = array[array.length-1]
  obj[first] = last;
  return obj;
  
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }
