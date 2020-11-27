// https://www.codewars.com/kata//5733d6c2d780e20173000baa

function maxMin(arr1,arr2){
    let array = [];
    for (let i = 0; i < arr1.length; i++) {
        array.push(Math.abs(arr1[i] - arr2[i]));
    }
    return [Math.max(...array), Math.min(...array)];
}
