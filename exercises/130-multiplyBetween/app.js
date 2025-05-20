function multiplyBetween(num1, num2) {
    let acc = 1
    if (num1 >= num2){ return 0}
    while(num1 < num2){
        acc *= num1
        num1++
    }
    return acc
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
