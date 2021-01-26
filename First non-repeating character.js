// https://www.codewars.com/kata//52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(s) {
    s = s.split('').filter(el => s.toLowerCase().indexOf(el.toLowerCase()) === s.toLowerCase().lastIndexOf(el.toLowerCase()));
    return (s.length === 0) ? '' : s[0];
}
