// https://www.codewars.com/kata//56069d0c4af7f633910000d3

function search(budget, prices) {
    return prices.filter(el => el <= budget).sort((a, b) => a -b).join(',');
}
