// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  // From 0 to n (iterate through rows)
  for (let row = 0; row < n; row++) {
    let level = ''
    // From 0 to ??? (iterate through columns)
    // the difference between rows/columns increases like so: 2 rows, 3 columns... 3 rows, 5 columns... 4 rows, 7 columns - fibonacci sequence?

          // use above to figure out how many spaces to add before #... is there a way to mirror what's before and after center item?

      for (let column = 0; column < level.length; column++) {
        // if should have a #, add a # to level string
        if (condition) {

        }
        // otherwise add a space to level string
        else {

        }
      }




        // log my pyramid string inside the initial for loop
        console.log(level);
  }


}

module.exports = pyramid;
