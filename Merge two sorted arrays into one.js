//https://www.codewars.com/kata//5899642f6e1b25935d000161

function mergeArrays(arr1, arr2) {
    let array = arr1.concat(arr2);
    array = array.filter((item,index) => {
        return (array.indexOf(item) == index)
    });
    return array.sort((a, b) => a - b);
}

