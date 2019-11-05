// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // convert n into a string, array, and reverse
    let reverseNum = parseInt(n.toString().split('').reverse().join(''))

  // handle negative numbers and zeros by adding the Math function, Math.sign()
    return reverseNum * Math.sign(n)
}

module.exports = reverseInt;
