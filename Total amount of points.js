// https://www.codewars.com/kata//5bb904724c47249b10000131

function points(games) {
    let count = 0;
    for (let el of games) {
        if (el[0] > el[2]) {
            count += 3;
        } else if (el [0] === el[2]) {
            count += 1;
        }
    }
    return count;
}
