//  https://www.codewars.com/kata//576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) return [];
    let sumOfNegative = 0;
    let countOfPositive = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            countOfPositive++;
        } else {
            sumOfNegative = sumOfNegative + input[i]
        }
    }
    return [countOfPositive, sumOfNegative]
}