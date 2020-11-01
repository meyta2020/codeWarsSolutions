// https://www.codewars.com/kata//563f037412e5ada593000114

function calculateYears(principal, interest, tax, desired) {
    let count = 0;
    if (principal === desired) {
        return 0;
    }
    while (principal <= desired) {
        let result = +(principal * interest).toFixed(2);
        let result1 = +(result * tax).toFixed(2);
        principal = principal + result - result1;
        count++;
    }
    return count;
}