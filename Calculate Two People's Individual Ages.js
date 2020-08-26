// https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1

function getAges(sum,difference){
    if (sum < 0 || difference < 0){
        return null;
    }
    let arr = [];
    let y = (sum - difference) / 2;
    let x = sum - (sum - difference) / 2;
    if (x < 0 || y < 0){
        return null;
    }
    arr.push(x, y);
    return arr;
}