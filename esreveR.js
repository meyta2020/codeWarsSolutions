// https://www.codewars.com/kata//5413759479ba273f8100003d

reverse = function(array) {
    let arr = [];
    for (let el of array) {
        arr.unshift(el);
    }
    return arr;
}
