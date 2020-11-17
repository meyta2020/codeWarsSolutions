// https://www.codewars.com/kata//55eca815d0d20962e1000106

function generateRange(min, max, step){
    let arr = [];
    for (let x = min; x <= max; x += step) {
        arr.push(x);
    }
    return arr;
}
