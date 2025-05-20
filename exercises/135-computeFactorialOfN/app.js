function computeFactorialOfN(n) {
    if(n==0){return 1}
    return n *= computeFactorialOfN(n-1)
    
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
