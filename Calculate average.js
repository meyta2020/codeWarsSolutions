// https://www.codewars.com/kata//57a2013acf1fa5bfc4000921

function find_average(array) {
    let sum = 0;
    let avg;
    for (let i = 0; i < array.length; i++) {
        avg = (sum += array[i]) / array.length ;
    }
    return avg;
}