// https://www.codewars.com/kata/5ab6538b379d20ad880000ab

const areaOrPerimeter = function(l, w) {
    if (l === w){
        return Math.pow(l, 2);
    } else {
        return 2 * (l + w);
    }
}