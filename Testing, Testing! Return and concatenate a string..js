// https://www.codewars.com/kata/5977387e131c07082b000098

function getRes(myScore) {
    str1 = "Sorry, you have failed. Better luck next time!";
    str2 = "Congratulations, you have passed!";
    str3 = " Thank you for taking part.";
    if (myScore >= 70) {
        return str2 + str3;
    } else {
        return str1 + str3;
    }
}