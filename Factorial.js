// https://www.codewars.com/kata//57a049e253ba33ac5e000212

function factorial(n){
    let num = 1;
    let product = 1;
    while (num <= n) {
        product = product * num;
        num++;
    }
    return product;
}