// https://www.codewars.com/kata/56d6c333c9ae3fc32800070f

function yearDays(year){
    let leap = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    if (leap) {
        return `${year} has 366 days`
    } else {
        return `${year} has 365 days`
    }
}