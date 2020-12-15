// https://www.codewars.com/kata//585d7d5adb20cf33cb000235

function findUniq(arr) {
    arr.sort();
    if (arr[0] === arr[1]) {
        return arr[arr.length - 1]
    } else {
        return arr[0]
    }
}
