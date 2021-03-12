// https://www.codewars.com/kata//574c5075d27783851800169e

function animals(heads, legs){
    let chickens = 0;
    let cows = 0;
    let found = false;
    for (let i = 0; i <= heads; i++) {
        for(let j = 0; j <= heads; j++) {
            if ((i + j === heads) && (2 * i + 4 * j == legs)) {
                chickens = i;
                cows = j;
                found = true;
                break;
            }
        }
    }
    if (!found) {
        return "No solutions";
    }
    return [chickens, cows];
}
