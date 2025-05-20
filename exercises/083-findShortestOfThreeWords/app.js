function findShortestOfThreeWords(word1, word2, word3) {
    let words = [word1, word2, word3]
    let lengths = []
    let shortest = ""

    for (let i = 0; i < words.length; i++){
        lengths.push(words[i].length)
    }
    shortest = words[lengths.indexOf(Math.min(...lengths))]
    return shortest
    
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
