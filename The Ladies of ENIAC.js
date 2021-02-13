//https://www.codewars.com/kata//56d31aaefd3a52902a000d66
function radLadies(name){
    return name.replace(/[0-9%$&/£?@]/g, '').toUpperCase();
}
