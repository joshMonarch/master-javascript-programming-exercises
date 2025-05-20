function findLongestPalindrome(sentence) {
  let reverse = reverseString(sentence)
  console.log("Reverse: " + reverse + "\n" + "Sentence: " + sentence)
  let result = []
  let len = sentence.length

    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j <= len; j++) {
        
        let str = sentence.substring(i, j)

        if (isPalindrome(str)) {
            result.push(str);
          }
      }
    }

  let lengths = result.map(x => x.length)
  let indexLongestStr = lengths.indexOf(Math.max(...lengths))
  let longestStr = result[indexLongestStr]

  return longestStr
}

function reverseString(string) {
  let reverse = ''
  for (let i = string.length-1; i >= 0; i--){
    reverse += string[i]
  }
  return reverse
  
}

function isPalindrome(word) {
  word = word.toLowerCase()
  if (word === reverseString(word)){return true}
  return false
}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // --> "a racecar a"
