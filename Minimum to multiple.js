// https://www.codewars.com/kata/5e030f77cec18900322c535d

function minimum(a, x) {
    let lower = a % x;
    let upper = (a - a % x +x) - a;
    return (lower < upper) ? lower: upper;
}