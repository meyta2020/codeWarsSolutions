// https://www.codewars.com/kata//57f6ad55cca6e045d2000627

function squareOrSquareRoot(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        let sqrt = array[i] ** 0.5;
        if (sqrt % 1 === 0) {
            arr.push(sqrt);
        } else {
            arr.push(array[i] ** 2);
        }
    }
    return arr;
}
