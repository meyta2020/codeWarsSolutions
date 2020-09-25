// https://www.codewars.com/kata/555eded1ad94b00403000071

function SeriesSum(n) {
    if (n === 0) {
        return '0.00';
    }
    let sum = 0;
    let num  = 4;
    for (let i = 2; i <= n; i++) {
        sum = sum + 1 / num;
        num += 3;
    }
    return (sum + 1).toFixed(2);
}