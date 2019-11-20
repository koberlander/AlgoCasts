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

    //write function called letterCounterFunc and pass in a generic str


    return letterCounterFunc(stringA) === letterCounterFunc(stringB)

}

function letterCounterFunc(str){
 // use RegX to strip out punctuation and spaces, include upper and lower case in stringA
 let regXdString = str.replace(/[^\w]/g, "").toLowerCase()

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
