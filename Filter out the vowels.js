// https://www.codewars.com/kata//5944367162ed20be2a00005d

function vowelFilter (letters) {
    var vowels = ["a", "e", "i", "o", "u"];
    return letters.filter(el => !vowels.includes(el));
}

