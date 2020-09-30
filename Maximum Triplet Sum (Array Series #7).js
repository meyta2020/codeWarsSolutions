// https://www.codewars.com/kata/5aa1bcda373c2eb596000112

function maxTriSum(numbers){

    let max = Math.min(...numbers);
    let max1 = Math.min(...numbers);
    let max2 = Math.min(...numbers);

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > max ){
            max = numbers[i];
            max[i] = i;
        }
    }

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > max1 && numbers[i] !== max ) {
            max1 = numbers[i];
            max[i] = i;
        }

    }

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > max2 && numbers[i] !== max1 && numbers[i] !== max) {
            console.log(numbers[i])
            max2 = numbers[i];
            max[i] = i;

        }
    }

    console.log(numbers)
    console.log(max, max1, max2)
    return max + max1 + max2;
}
