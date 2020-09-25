// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5

function drawStairs(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
        let s = '';
        for (let x = 1; x <= i; x++) {
            s = s + ' ';
        }
        if (i === (n - 1)) {
            str = str + s + "I";
        } else {
            str = str + s + "I\n";
        }
    }
    return str;
}