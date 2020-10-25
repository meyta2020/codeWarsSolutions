// https://www.codewars.com/kata//5810085c533d69f4980001cf

function calculator(a,b,sign){
    if (typeof a === 'string' || typeof b === 'string') {
        return "unknown value";
    }
    switch (sign) {
        case '+': return a + b; break;
        case '-': return a - b; break;
        case '*': return a * b; break;
        case '/': return a / b; break;
        default: return "unknown value";
    }
}