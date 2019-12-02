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

      // From 0 to ??? (iterate through columns)
          // research: if 3 rows there are X columns, if 8 rows, there are X columns if 10 rows there are X columns
            // use above to figure out how many spaces to add before #... is there a way to mirror what's before and after center item?

          // if should have a #, add a # to level string


          // otherwise add a space to level string

      // log my pyramid string inside the initial for loop
}

module.exports = pyramid;
