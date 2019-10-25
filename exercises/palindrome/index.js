// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // use the solution from reverstring and set to a variable
  let reversed = str.split('').reverse().join('')

  // since I need to return a true or false from this function, I do a direct comparison here
  return str === reversed

  }

module.exports = palindrome;
