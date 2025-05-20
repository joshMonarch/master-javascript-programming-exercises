function sumDigits(num) {
    let strArray = num.toString().split("")
    if(strArray[0] == '-'){
        strArray.shift()
        strArray[0] = "-" + strArray[0]
    }
    console.log("strArray: ", strArray)
    return strArray.map(x => Number.parseInt(x)).reduce((x,y)=> x+y)
    
}

let output = sumDigits(316);
console.log(output); // --> 4
