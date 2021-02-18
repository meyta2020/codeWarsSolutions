//https://www.codewars.com/kata//580751a40b5a777a200000a1
function vowelOne(s){
    return s.replace(/[0-9]/g, 0).replace(/[aouie]/gi, 1).replace(/[^aouie1]/gi, 0);
}
