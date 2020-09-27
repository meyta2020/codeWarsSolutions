// https://www.codewars.com/kata/55f2b110f61eb01779000053

function getSum(a, b) {
    let sum = 0;
    let min;
    let max;
    if (a > b) {
        min = b;
        max = a;
    } else {
        min = a;
        max = b;
    }
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}