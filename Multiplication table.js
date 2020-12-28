// https://www.codewars.com/kata//534d2f5b5371ecf8d2000a08

multiplicationTable = function(size) {
    let arr = [];
    for (let i = 1; i <= size; i++) {
        let str = [];
        for (let j = 1; j <= size; j++) {
            str.push(j * i);
        }
        arr.push(str);
    }
    return arr;
}
