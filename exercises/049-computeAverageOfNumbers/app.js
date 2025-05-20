function computeAverageOfNumbers(arr){
    let sum = 0
    if (arr.length == 0){return sum}
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum/arr.length
}

console.log(computeAverageOfNumbers([1,2,3]))