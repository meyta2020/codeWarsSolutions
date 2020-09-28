// https://www.codewars.com/kata/58ebfa6ef7cda1a3d4000048

function holycats(input){
    let arr = [];
    for (let el of input) {
        if (el === 'wicked' || el === 'normal') {
            continue;
        }
        arr.push(el)
    }
    return arr;
}