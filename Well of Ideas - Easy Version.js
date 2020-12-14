// https://www.codewars.com/kata//57f222ce69e09c3630000212

function well(x) {
    let obj = x.reduce((count, word) => {
        count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1;
        return count;
    }, {});
    let result;
    if (!obj.hasOwnProperty('good')) {
        result = 'Fail!';
    } else if (obj.good <= 2) {
        result = 'Publish!';
    } else if (obj.good > 2) {
        result = 'I smell a series!';
    }
    return result;
}
