// https://www.codewars.com/users/meyta2020/completed_solutions

function pickIt(arr){
    let odd = [];
    let even = [];
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    array.push(odd, even);
    return array;
}