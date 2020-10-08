// https://www.codewars.com/kata/58249d08b81f70a2fc0001a4

const closestMultiple10 = num => {
    let ost = num % 10;
    if (ost < 5 && ost >= 0) {
        return num - ost;
    } else {
        return num + (10 - ost);
    }
}