// https://www.codewars.com/kata//5721c189cdd71194c1000b9b

function grabDoll(dolls){
    let bag = [];
    let count = 0;
    for (let i = 0; i < dolls.length; i++) {
        if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
            bag.push(dolls[i]);
            if (bag.length === 3) {
                break;
            } else {
                continue;
            }
        }
    }

    return bag;
}
