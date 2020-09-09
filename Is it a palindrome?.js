// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

function isPalindrome(x) {
    let str = '';
    x = x.toLowerCase();
    for (let i = 0; i < x.length; i++) {
        str = x[i] + str;
    }
    return str === x;
}