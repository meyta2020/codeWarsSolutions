// https://www.codewars.com/kata//5862f663b4e9d6f12b00003b

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let total = blueStart + redStart;
    let remained = total - bluePulled - redPulled;
    let remainedBlue = blueStart - bluePulled;
    return remainedBlue / remained;
}
