// https://www.codewars.com/kata//58f8a3a27a5c28d92e000144

function firstNonConsecutive (arr) {
    for (let i = 1; i < arr.length; i++){
        if (Math.abs(arr[i]-arr[i-1]) === 1) continue
        else return arr[i]
    } return null;
}
