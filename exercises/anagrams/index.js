// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
// Save 'processor' to a variable so I can just call it on each string instead of writing it twice.

    // use RegX to strip out punctuation and spaces, include upper and lower case in stringA
    // turn stringA into an object
    // loop thru stringA with a for...in loop
      // count number of times each character appears in the string
        // if the character already exists, add one to the counter (+= 1 or ++?)
        // otherwise assign the character to a value of 0
    // don't forget to return a value

    // use RegX to strip out punctuation and spaces, included upper and lower case in stringB
    // loop thru stringA with a for...in loop
      // count number of times each character appears in the string
        // if the character already exists, add one to the counter (+= 1 or ++?)
        // otherwise assign the character to a value of 0
    // don't forget to return a value

    // return the direct comparison of strings (true or false)
}

module.exports = anagrams;
