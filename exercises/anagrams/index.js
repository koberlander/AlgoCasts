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
// Save 'processor' to a variable so I can just call it on each string instead of writing it twice?


    //write this as a function and pass in a generic str
      // use RegX to strip out punctuation and spaces, include upper and lower case in stringA
      // create an empty object to add letters to
      // create a counter value and start it at 0
      // use a for...of to iterate through each character in the string array
          // if it already exists, update the key value by one each time it appears
          // otherwise, create a key and set the value to 0
      // check if I need to return something here or if the for takes care of that (pretty sure it does)

    // return JSON.stringify(object name) === JSON.stringify(second object name)
}

module.exports = anagrams;
