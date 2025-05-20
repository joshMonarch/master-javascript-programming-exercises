function countAllCharacters(str){
    let arr = str.split("")
    let set = new Set(arr)
    let obj = {}

    if(str === ""){return {}}

    for (const letter of set){
        let count = arr.filter(x => x == letter).length
        obj[letter] = count
    }
    return obj
}

console.log(countAllCharacters("Mision cumplida"))