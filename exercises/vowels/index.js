// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

  // use the match method on my string and set to a var
  // match returns every item that matches the regExp
  const matches = str.match(/[aeiou]/gi)

  // do a ternary to return the length of matches, if the length exists, or 0
  return matches ? matches.length : 0

}

module.exports = vowels;

// function vowels(str) {
//
//
//   // convert str to array to use with includes()
//   const array = str.split('')
//
//   // create a counter variable to increment for each vowel
//   let counter = 0
//
//   for (let letter of array) {
//
//     //this checks the entire array not the letter
//     if (array.includes(/[AEIOUaeiou]/g)) {
//       console.log('counter: ', counter);
//       counter += 1
//     }
//
//   }
//   return counter
//
//
// }
