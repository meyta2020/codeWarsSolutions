// https://www.codewars.com/kata//56368f37d464c0a43c00007f

var calculate = function calculate(a, o, b) {
    if (b === 0 && o === "/") {
        return null;
    } else if(o === "+") {
        return a + b;
    } else if (o === "-") {
        return a - b;
    } else if (o === "/") {
        return a / b;
    } else if (o === "*") {
        return a * b;
    } else if (o != "+" || o != "-" || o != "*" || o != "/") {
        return null;
    }
}
