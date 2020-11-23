// https://www.codewars.com/kata//5513795bd3fafb56c200049e

function countBy(x, n) {
    let arr = [];
    for (let i = x; i <= x * n; i++) {
        if (i % x === 0) {
            arr.push(i);
        }
    }
    return arr;
}
