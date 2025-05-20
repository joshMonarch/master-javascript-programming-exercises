function transformEmployeeData(array) {
  const result = [];

  for (const subarray of array) {
    const obj = {};
    for (const [key, value] of subarray) {
      obj[key] = value;
    }
    result.push(obj);
  }

  return result;
}

let array = [[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]
console.log(transformEmployeeData(array))