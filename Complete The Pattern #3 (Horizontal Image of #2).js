// https://www.codewars.com/kata//557341907fbf439911000022

function pattern(n){
    let output=[];
    for (let i = n; i >= 1; i--){
        let str = '';
        for(let j = n; j >= i; j--){
            str += j;
        }output.push(str);
    }
    return output.join('\n');
}
