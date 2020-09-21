// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
    let arr = [];
    let min = Math.min(...numbers);
    let found = false;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== min) {
            arr.push(numbers[i]);
        } else {
            if (found === true) {
                arr.push(numbers[i]);
            } else {
                found = true;
            }
        }
    }
    return arr;
}