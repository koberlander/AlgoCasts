// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // create an empty object for us to place each character in our string in
  const charsObj = {}

  // create a maximum variable and set it to 0 to start. We will change its value each time we find a new highest value in our object
  let max = 0

  // create a variable that keeps track of which character appears most. Set it to an empty string to start.
  let maxChar = ''

// iterate through each character in the string array, make it a key and implement the value each time it appears. for...of is only used for strings and arrays
  for(let char of str){
    // if the character already exists, add one to the value
    if (charsObj[char]) {
      charsObj[char]++

    //if it doesn't already exist, set the value to 1
    } else {
      charsObj[char] = 1
    }
  }

    //iterate over our object of key/values using another for loop, this time, a for...in loop. For...in can only be used with objects. For...of is for strings/arrays. Subtle difference!
    for (let char in charsObj) {
      // if the specific character has a number greater than max, update the value of both max and maxChar.
      if (charsObj[char] > max) {
        max = charsObj[char]
        maxChar = char
      }
    }

    return maxChar

}

module.exports = maxChar;
