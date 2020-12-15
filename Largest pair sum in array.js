// https://www.codewars.com/kata//556196a6091a7e7f58000018

function largestPairSum(numbers){
    let sum = 0;
    numbers = numbers.sort((a, b) => b - a);
    sum = numbers[0] + numbers[1];
    return sum;
}
