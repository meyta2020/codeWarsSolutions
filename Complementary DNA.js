//https://www.codewars.com/kata//554e4a2f232cdd87d9000038

function DNAStrand(dna){
    return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
}
