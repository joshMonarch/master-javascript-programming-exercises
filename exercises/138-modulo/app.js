function modulo(num1, num2) {
    let sign = Math.sign(num1) * Math.sign(num2)
    let x = Math.abs(num1)
    let y = Math.abs(num2)
    let quotient = Math.floor(x/y)
    let m = quotient*y
    let remainder = sign*(x-m)

    return remainder
    
}

let output = modulo(25, 4);
console.log(output); // --> 1
