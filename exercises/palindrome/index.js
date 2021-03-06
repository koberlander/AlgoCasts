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


// .every() checks every element in an array to see if it is truthy when compared to the value of the test function. If any element returns false, then the entire .every() expression will return false. This solution works, but does extra work that we don't need since it will compare the first element to the last element and then, later, the last element to the first element.
// function palindrome(str) {
//       return str.split('').every((character, i)=> {
//         //compare each character in the array to its mirror ... first character to last character, 2nd character to 2nd-to-last character, etc.
//           return character === str[str.length - i - 1]
//       })
//
//   }
