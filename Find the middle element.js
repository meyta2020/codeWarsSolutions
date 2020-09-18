// https://www.codewars.com/kata/545a4c5a61aa4c6916000755

var gimme = function (inputArray) {
    let min = Math.min(...inputArray);
    let max = Math.max(...inputArray);
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] !== min && inputArray[i] !==max) {
            return i;
        }
    }

}