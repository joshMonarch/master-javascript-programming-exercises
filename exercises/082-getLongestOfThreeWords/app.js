function getLongestOfThreeWords(word1, word2, word3) {
    let words = [word1, word2, word3]
    let lengths = []
    let longest = ""

    for (let i = 0; i < words.length; i++){
        lengths.push(words[i].length)
    }
    longest = words[lengths.indexOf(Math.max(...lengths))]
    return longest
}   

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
