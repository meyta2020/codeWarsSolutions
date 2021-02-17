// https://www.codewars.com/kata//57ab2d6072292dbf7c000039

function correctPolishLetters(s) {
    return s.replace(/[ąćęłńóśźż]/g, c => "acelnoszz"["ąćęłńóśźż".indexOf(c)])
}
