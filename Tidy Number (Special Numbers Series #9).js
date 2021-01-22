//https://www.codewars.com/kata//5a87449ab1710171300000fd

function tidyNumber(n){
    return +n.toString().split('').sort().join('') === n;
}