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
  // use the letterCounterFunc helper function to transform stringA and stringB into character maps to be compared to one another
  const aRegXdObject = letterCounterFunc(stringA)
  const bRegXdObject = letterCounterFunc(stringB)

  // check to see if the two objects have the same number of keys. Otherwise, comparing a phrase like 'hi hi hi' to 'hi hi hi c' wouuld show a false positive since program would check first three hi's than quit comparing
  if (Object.keys(aRegXdObject).length !== Object.keys(bRegXdObject).length) {
    // if length of key check fails, we know there is no anagram because one object has an extra key type that the other doesn't have
    return false
  }

  // after determining if they have the same number of keys, we want to do a direct comparison to weed out differnt numbers. For every key/character in my aRegXdObject, check to see if the corresponding key in bRegXdObject is equal (does it have the same value for each key?)
  for (let character in aRegXdObject) {
    if (aRegXdObject[character] !== bRegXdObject[character]) {
      return false
    }
  }

  // if objects pass both of those edge cases, then the items are anagrams of one another
  return true
}

//write function called letterCounterFunc and pass in a generic str
function letterCounterFunc(str){
 // use RegX to strip out punctuation and spaces, but allow upper and lower case letters, numbers. Replace spaces and punctuation with nothing (the '' in the second arg of the replace() does this)
 let regXdString = str.replace(/[^\w]/g, '').toLowerCase()

 // create an empty object to add letters to
 let regXdObject = {}
 // console.log('regXdObject: ', regXdObject);
 // use a for...of to iterate through each character in the string array
 for (let char of regXdString) {

   // if it already exists, update the key value by one each time it appears
   if (regXdObject[char]) {
     regXdObject[char]++

   } else {
     // otherwise, create a key and set the value to 0
     regXdObject[char] = 1

   }

 }
 return regXdObject
}

module.exports = anagrams;
