// https://www.codewars.com/kata//5583090cbe83f4fd8c000051

function digitize(n) {
    n = n + '';
    return n.split('').reverse().map(el => +el);
}
