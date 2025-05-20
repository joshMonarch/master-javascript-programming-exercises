function getEvenLengthWordsAtProperty(obj, key) {
  if (!key in obj) {return []}
  if (!Array.isArray(obj[key])) {return []}
  if (obj[key].length == 0) {return []}

  return obj[key].filter(element => element.length % 2== 0)
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
