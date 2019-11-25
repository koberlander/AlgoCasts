// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = []

  // loop through array that has been split with a space, which will separate each word
  for (word of str.split(' ')) {
    // capitalize the first letter then concat the word at index 1 to the end
    // push the result of the capitalization and join into the words array
    words.push(word[0].toUpperCase() + word.slice(1))
  }
  // return the result of the 'joined' words array. once again we are joining with the space character instead of an empty string
  return words.join(' ')
}

module.exports = capitalize;
