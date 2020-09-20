// https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130

function getMinMax(arr){
    let array = [];
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    array.push(min, max);
    return array;
};