function isEitherEvenAndLessThan9(num1, num2) {
    if (num1+num2 < 17 && (num1 % 2 == 0 || num2 % 2 == 0)) {return true}
    return false

}

let output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true
