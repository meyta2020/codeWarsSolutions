// https://www.codewars.com/kata/56f3f6a82010832b02000f38

function describeAge(age){
    let S = 'You\'re a(n)' + ' ';
    return age<13?S+'kid':age<18?S+'teenager':age<65?S+'adult':S+'elderly';
}