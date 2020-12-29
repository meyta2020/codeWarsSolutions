// https://www.codewars.com/kata//55733d3ef7c43f8b0700007c

function pattern(n){
    let output = "";
    let str = [];
    for (let i = n; i >= 1; i--) {
        str.push(i);
    }
    while (str.length > 0) {
        output += str.join('') + '\n';
        str = str.slice(0, -1);
    }
    return output.slice(0, -1);
}
