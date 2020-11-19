// https://www.codewars.com/kata//58cb43f4256836ed95000f97

function findDifference(a, b) {
    let result1 = 1;
    let result2 = 1;
    for (let i = 0; i < a.length; i++) {
        result1 = result1 * a[i];
    }
    for (let i = 0; i < b.length; i++) {
        result2 = result2 * b[i];
    }
    let difference = result1- result2;
    return Math.abs(difference);
}
