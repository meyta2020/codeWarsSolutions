// https://www.codewars.com/kata//5abd66a5ccfd1130b30000a9

function rowWeights(array){
    let suvEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            suvEven = suvEven + array[i];
        } else {
            sumOdd = sumOdd + array[i];
        }
    }
    return [suvEven, sumOdd];
}