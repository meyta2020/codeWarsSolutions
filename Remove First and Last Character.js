// https://www.codewars.com/kata//56bc28ad5bdaeb48760009b0

function removeChar(str) {
    let s = '';
    for (let i = 1; i < str.length - 1; i++) {
        s = s + str[i]
    }
    return s;
}
