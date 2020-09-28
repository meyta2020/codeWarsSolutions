// https://www.codewars.com/kata/5a4138acf28b82aa43000117

function adjacentElementsProduct(array) {
    let multiply = 1;
    let max = 0;
    for (let i = 0; i < array.length - 1; i++) {
        multiply = array[i] * array[i + 1];
        if (max === 0 || multiply > max) {
            max = multiply;
        }
    }
    return max;
}