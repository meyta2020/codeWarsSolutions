// https://www.codewars.com/kata//5f55ecd770692e001484af7d

function mirror(data) {
    let first = data.slice().sort((a, b) => a - b)


    let second = data.slice().sort((a, b) => b - a)

    second = second.slice(1)


    let joined = [...first, ...second]

    return joined
}
