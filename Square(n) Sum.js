// https://www.codewars.com/kata//515e271a311df0350d00000f

function squareSum(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let sqrt = numbers[i] ** 2;
        sum += sqrt;
    }
    return sum;
}
