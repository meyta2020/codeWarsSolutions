// https://www.codewars.com/kata/571f832f07363d295d001ba8

function trueOrFalse(val){
    if (val === false || val === '' || val === 0 || val === [] || val === null || val === undefined)  return 'false';
    else return 'true';
}