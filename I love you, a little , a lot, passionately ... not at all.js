//https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

function howMuchILoveYou(nbPetals) {
    let phrases = [
        "not at all",
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",

    ]
    return phrases[nbPetals % 6]

}