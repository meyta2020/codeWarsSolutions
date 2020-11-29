// https://www.codewars.com/kata//580777ee2e14accd9f000165
function skiponacci(n) {
    if (n === 1) return '1';
    let fib = [1, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 2] + fib[i - 1]);
    }
    let skip = fib.map((el, i) => i % 2 ? 'skip' : el);
    return skip.join(' ');
}
