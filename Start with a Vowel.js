// https://www.codewars.com/kata//5a02e9c19f8e2dbd50000167

function vowelStart(str){
    return str.toLowerCase().replace(/[^a-z\d]/g, '').replace(/[aeiou]/g, ' $&').trim();
}
