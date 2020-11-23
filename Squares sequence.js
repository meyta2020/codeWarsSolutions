//https://www.codewars.com/kata//5546180ca783b6d2d5000062

function squares(x, n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(x);
        x  = x * x;
    }
    return arr;
}
