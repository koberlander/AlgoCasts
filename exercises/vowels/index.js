// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {


  // convert str to array to use with includes()
  const array = str.split('')

  // create a counter variable to increment for each vowel
  let counter = 0

  for (let letter of array) {

    // if letter === AEIOU or aeiou increase counter
    if (array.includes(/[AEIOUaeiou]/g)) {
      counter += 1
      console.log('counter: ', counter);
    }

  }
  return counter


}

module.exports = vowels;
