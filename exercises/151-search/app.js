function search(array, value) {
  if (array.length == 2) {
     if(array[0] === value) {
        return 0;
      } else if (array[1]===value) {
        return 1;
      } else {
        return null;
    }
  } 
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === value) {
      return mid;
    }

    if (value < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return null;
}
  


let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // --> 4
