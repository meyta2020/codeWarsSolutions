//https://www.codewars.com/kata//57de78848a8b8df8f10005b1

function howMuchCoffee(events) {
    let arr = ['cw', 'cat', 'movie', 'dog'];
    events = events.filter(el => arr.includes(el.toLowerCase()))
        .map(el => el === el.toLowerCase() ? 1 : 2).reduce((acc, el) => acc + el, 0);
    return events > 3 ? 'You need extra sleep' : events;
    console.log(events)

}