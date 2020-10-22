// https://www.codewars.com/kata/525e5a1cb735154b320002c8

function triangular( n ) {
    if (n <= 0){
        return 0;
    }
    let sum = 0;
    for (i = 1; i <= n ; i++) {
        sum = sum + i;
    }
    return sum;
}