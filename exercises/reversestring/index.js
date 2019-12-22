// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  /*
    turn str into an array with split. Use reducer helper function to 'reduce'
    everything back down to one value. The reduce function takes in four arguments:
      - Accumulator (reversedArray) <-- this is the value that is returned from this function
      - Current Value (character)
      - Current Index ('')
      - Source Array (str)
  */
  return str.split('').reduce((reversedArray, character) => {
    // this func executes for every element in array
    return character + reversedArray
  }, '')
}

module.exports = reverse;
// LINEAR RUNTIME
// USES FOR...LET
// function reverse(str) {
// // create an empty string called 'reversed'
//   let reversed = ''
//
//   // for each character in the string
//     // take the character and add it to the start of 'reversed'
//     for (let character of str) {
//       reversed = character + reversed
//     }
//
//   // return reversed
//   return reversed
// }

// USES .REVERSE
// function reverse(str) {
//   /*
//     JS has .reverse but it only works on an array, so must turn our string into
//     an array of strings. We use .split for this, and since the method takes in
//     an optional separator, pass in an empty string ('') to convert to an array
//     of each of its UTF-16 “characters”.
//    */
//   let arrayOfStrings = str.split('')
//   console.log('arrayOfStrings: ', arrayOfStrings);
//
//   /*
//     Next, use .reverse to reverse the elements inside the array.
//   */
//   let reversedArray = arrayOfStrings.reverse()
//   console.log('reversedArray: ', reversedArray);
//
//   /*
//     Now, use .join to turn our array back into a string again so we can return
//     a result. The join method takes in an optional separator like split, so pass
//     in an empty string. This results in all elements being joined without any
//     characters in between them.
//   */
//   let backToString = reversedArray.join('')
//   console.log('backToString: ', backToString);
//
//   return backToString
// }


module.exports = reverse;
