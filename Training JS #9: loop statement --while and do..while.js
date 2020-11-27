// https://www.codewars.com/kata//57216d4bcdd71175d6000560

function padIt(str,n){
    let s = '';
    let i = 1;
    if (n === 1) {
        return "*" + str;
    }
    while (i <= n) {
        if (i === Math.ceil(n / 2) + 1) {
            s = s + str;
        }
        s = s + '*';
        i++;
    }
    return s;
}

