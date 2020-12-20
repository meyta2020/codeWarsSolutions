// https://www.codewars.com/kata//5731861d05d14d6f50000626

function bigToSmall(arr){
    let newArr = [].concat(...arr);
    return newArr.sort((a, b) => b - a).join(">");
}
