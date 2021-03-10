// https://www.codewars.com/kata//5761a717780f8950ce001473

function  calculateAge(born,x) {
    let result = x - born;
    if (result > 0 && result != 1) {
        return `You are ${result} years old.`;
    } else if (result < 0 && result != -1) {
        return `You will be born in ${result * (-1)} years.`;
    } else if (born === x) {
        return `You were born this very year!`;
    } else if (x - born === 1) {
        return "You are 1 year old.";
    } else if (x - born === -1) {
        return 'You will be born in 1 year.';
    }
}

