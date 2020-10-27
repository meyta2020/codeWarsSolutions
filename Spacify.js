// https://www.codewars.com/kata//57f8ee485cae443c4d000127

function spacify(str) {
    let newStr = '';
    for (let i = 0; i < str.length-1; i++) {
        newStr += str[i] + ' ';
    }
    console.log(newStr);
    return newStr + str[str.length - 1];
}