function findMaxLengthOfThreeWords(w1,w2,w3) {
    words = [w1,w2,w3]
    lengths = []
    for (let i = 0; i < words.length; i++){
        lengths.push(words[i].length)
    }
    return Math.max(...lengths)
}