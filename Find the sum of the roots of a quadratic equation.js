// https://www.codewars.com/kata/57d448c6ba30875437000138

function roots(a,b,c){
    let discr = Math.pow(b, 2) - (4 * a * c);

    let x1 = (-b + Math.sqrt(discr)) / (2 * a);
    let x2 = (-b - Math.sqrt(discr)) / (2 * a);

    let sum = (x1 + x2).toFixed(2);
    if (sum === "NaN") {
        return null;
    }
    return +sum;
}