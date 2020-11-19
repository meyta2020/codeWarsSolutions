// https://www.codewars.com/kata//57eaec5608fed543d6000021

function divCon(x){
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] === "number") {
            sum1 = sum1 + x[i];
        } else {
            sum2 = sum2 + Number(x[i]);
        }
    }
    let difference = sum1 - sum2;
    return difference;
}
