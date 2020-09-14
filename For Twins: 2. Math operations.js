// https://www.codewars.com/kata/59c287b16bddd291c700009a/train/javascript

function iceBrickVolume(radius, bottleLength, rimLength) {
    let h = bottleLength - rimLength;
    let s = 2 * radius ** 2;
    let v = h * s;
    return v;
}