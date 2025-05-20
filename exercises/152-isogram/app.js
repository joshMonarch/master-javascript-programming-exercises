function isIsogram(input) {
  const frequencies = getFrequencies(input);
  return Object.values(frequencies).every(frequency => frequency === 1);
}

function getFrequencies(input) {
  const lower = input.toLowerCase();
  let frequencies = {}
  for(let i = 0; i<lower.length; i++) {
    let character = lower.charAt(i);
    if(!Object.keys(frequencies).includes(character)) {
      frequencies[character] = 1;
    }
    else {
      frequencies[character]++;
    }
  }

return frequencies;
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
