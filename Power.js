// https://www.codewars.com/kata/562926c855ca9fdc4800005b

function numberToPower(number, power){
    let p = 1;
    for (let i = 1; i <= power; i++) {
        p = p * number;
    }
    return p;
}