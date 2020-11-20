// https://www.codewars.com/kata//562f91ff6a8b77dfe900006e

function movie(card, ticket, perc) {
    let count = 1;
    let start_price = ticket * perc;
    let sum = start_price;
    while ((ticket * count) <= Math.ceil(card + sum)) {
        start_price = start_price * perc;
        sum = (sum + start_price);
        count++;
    }
    return count;
}
