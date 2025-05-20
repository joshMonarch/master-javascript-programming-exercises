function isRotated(str1, str2) {
  let next = rotate(str1);

  if(next === str2) {
      return true;
  }
  do {
    next = rotate(next);
    if(next === str2) {
        return true;
    }
  } while (next !== str1);

  return false;
}

function rotate(str) {
    return str.substring(1) +  str.charAt(0)
}
  
console.log(isRotated('hello world', 'orldhello w')); // --> true
console.log(isRotated('hello world', 'omrel wp')); // --> false
  
