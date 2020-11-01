// https://www.codewars.com/kata//54edbc7200b811e956000556

function countSheeps(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            count++
        }
    }
    return count;
}