function multiply(num1, num2) {
    if(num1==0 || num2==0) return 0;
        let sign = '';
    if((num1 < 0 || num2 < 0) && !(num1 < 0 && num2<0)) {
        sign = '-'
}

    num1 = Math.abs(num1)
    num2 = Math.abs(num2)
    let result = 0;

    for(let i = 0; i<num2; i++) {
    result += num1;
    }

    return Number(`${sign}${result}`); 
    
}

let output = multiply(-4, 7);
console.log(output); // --> 28
