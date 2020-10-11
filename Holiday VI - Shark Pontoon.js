// https://www.codewars.com/kata/57e921d8b36340f1fd000059

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if(dolphin){
        sharkSpeed = sharkSpeed / 2;
    }
    let youtTime = pontoonDistance / youSpeed;
    let sharkTime = sharkDistance / sharkSpeed;
    return youtTime < sharkTime ? "Alive!" : "Shark Bait!"
}