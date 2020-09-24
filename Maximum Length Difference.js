// https://www.codewars.com/kata/5663f5305102699bad000056

function mxdiflg(a1, a2) {

    if(a1.length === 0 || a2.length === 0){
        return -1
    }

    let min1 = a1[0].length;
    let max1 = a1[0].length;

    for(let i = 0; i < a1.length; i++){
        if(a1[i].length > max1){
            max1 = a1[i].length;
        }
        if(a1[i].length < min1){
            min1 = a1[i].length;
        }
    }
    let min2 = a2[0].length;
    let max2 = a2[0].length;

    for(let i = 0; i < a2.length; i++){
        if(a2[i].length > max2){
            max2 = a2[i].length;
        }
        if(a2[i].length < min2){
            min2 = a2[i].length;
        }
    }
    console.log(min1,max1,min2,max2);


    return (max1 - min2 > max2 - min1)? max1 - min2 : max2 - min1;


}