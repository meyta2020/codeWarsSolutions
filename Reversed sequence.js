// https://www.codewars.com/kata//5a00e05cc374cb34d100000d

const reverseSeq = n => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.unshift(i);
    }
    return arr;
}
