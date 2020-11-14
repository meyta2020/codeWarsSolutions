// https://www.codewars.com/kata//5601409514fc93442500010b

function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < classPoints.length; i++) {
        sum = sum + classPoints[i];
        avg = sum / classPoints.length;

    }
    return (yourPoints > avg) ? true : false;
}
