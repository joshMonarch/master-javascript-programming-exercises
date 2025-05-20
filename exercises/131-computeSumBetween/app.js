function computeSumBetween(num1, num2) {
    let acc = 0
    if (num1 > num2){return 0}
    while(num1 < num2){
        acc += num1
        num1++
    }
    return acc

}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9
