function detectOutlierValue(string) {
    let arr = string.split(" ")
    let evens = arr.filter(x => x%2 === 0);
    if(evens.length === 1) {
        return arr.findIndex(x=> x%2 === 0)+1; 
    } else {
        return arr.findIndex(x=>x%2===1)+1; 
    }
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
