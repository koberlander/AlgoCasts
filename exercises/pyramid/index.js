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

// RECURSIVE SOLUTION
function pyramid(n, row = 0, level = '') {
  // base case
  if (row === n) {
    return
  }

  // advance to the next row if level is 'full'
  if (level.length === n * 2 - 1) {
    console.log(level);
    return pyramid(n, row + 1)
  }

  // create a midpoint variable that equals the center-most value of the array
  const midpoint = Math.floor((n * 2 -1) / 2 )

  let add
  // add the proper character to level
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#'
  } else {
    add = ' '
  }

  pyramid(n, row, level + add)
}

module.exports = pyramid;

// ITERATIVE SOLUTION
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2)
//
//   // From 0 to n (iterate through rows)
//   for (let row = 0; row < n; row++) {
//     let level = ''
//     // From 0 to ??? (iterate through columns)
//
//       for (let column = 0; column < 2 * n - 1; column++) {
//
//         // if should have a #, add a # to level string
//         if (midpoint - row <= column && midpoint + row >= column) {
//           level += '#'
//         }
//         // otherwise add a space to level string
//         else {
//           level += ' '
//         }
//       }
//
//         // log my pyramid string inside the initial for loop
//         console.log(level);
//   }
//
// }
