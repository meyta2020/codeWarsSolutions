// https://www.codewars.com/kata//58acfe4ae0201e1708000075

function inviteMoreWomen(L) {
    let sum = 0;
    for (let i = 0; i < L.length; i++) {
        sum  = sum + L[i];
    }
    if (sum > 0) {
        return true;
    } else {
        return false;
    }

}
