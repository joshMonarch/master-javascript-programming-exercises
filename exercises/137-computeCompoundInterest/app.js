function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
    return principal * (1 + (interestRate/compoundingFrequency))**(timeInYears*compoundingFrequency) - principal
}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543
