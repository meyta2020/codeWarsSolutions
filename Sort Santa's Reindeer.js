// https://www.codewars.com/kata//52ab60b122e82a6375000bad

function sortReindeer(reindeerNames) {
    return reindeerNames.sort((a,b) => a.split(' ')[1] > b.split(' ')[1]) ? 1 : -1;
}
