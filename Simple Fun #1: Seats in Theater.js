// https://www.codewars.com/kata/588417e576933b0ec9000045

function seatsInTheater(nCols, nRows, col, row) {
    let width = nCols - col + 1;
    let length = nRows - row;
    let result = width * length;
    return result;
}