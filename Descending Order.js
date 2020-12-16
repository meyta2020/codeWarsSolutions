// https://www.codewars.com/kata//5467e4d82edf8bbf40000155

function descendingOrder(n){
    let str = (n + '').split('').map(el => +el);
    str = str.sort((a, b) => b - a);
    return +str.join('');
}
