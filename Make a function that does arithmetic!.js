// https://www.codewars.com/kata//583f158ea20cfcbeb400000a

function arithmetic(a, b, operator){
    return {
        "add": a + b,
        "subtract": a - b,
        "multiply": a * b,
        "divide": a / b
    } [operator]
}
