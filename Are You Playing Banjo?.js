// https://www.codewars.com/kata/53af2b8861023f1d88000832

function areYouPlayingBanjo(name) {
    let s = name + '';
    let letter = s.charAt(0);
    if (letter === 'r' || letter === 'R'){
        return `${name} plays banjo`;
    } else {
        return `${name} does not play banjo`;
    }
}