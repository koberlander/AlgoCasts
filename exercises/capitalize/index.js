// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// this solution relies on looping through each character in a string and capitalizing it if there is a space to the left of it, aka if it is at the beginning of a word
function capitalize(str) {

  // the solution won't work on the first character in the string -- there's no space next to it -- so save to a variable the first character capitalized and add characters to it in the next section.
  let result = str[0].toUpperCase()

  // for each character in the string and beginning at index 1
  for (let i = 1; i < str.length; i++) {
    
    // if the character minus 1 is a space, uppercase the character and add to result
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase()

    // otherwise, just add it to result
    } else {
      result += str[i]
    }
  }
  return result
}

module.exports = capitalize;

// function capitalize(str) {
//   const words = []
//
//   // loop through array that has been split with a space, which will separate each word
//   for (word of str.split(' ')) {
//     // capitalize the first letter then concat the word at index 1 to the end
//     // push the result of the capitalization and join into the words array
//     words.push(word[0].toUpperCase() + word.slice(1))
//   }
//   // return the result of the 'joined' words array. once again we are joining with the space character instead of an empty string
//   return words.join(' ')
// }
