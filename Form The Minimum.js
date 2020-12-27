// https://www.codewars.com/kata//5ac6932b2f317b96980000ca

function minValue(values){
    let unique = values.filter((el, i) => i === values.indexOf(el));
    return +unique.sort((a,b) => a - b).join('');
}
