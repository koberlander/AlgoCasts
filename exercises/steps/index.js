// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// RECURSIVE SOLUTION TO PROBLEM
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return
  }

    if (n === stair.length) {
      console.log(stair);
      steps(n, row + 1)
      return
    }

    if (stair.length <= row) {
      stair += '#'

    } else {
      stair += ' '
    }
    steps(n, row, stair)
}

module.exports = steps;
// AS 'N' INCREASED BY ONE, WE HAVE TO DO WAY WAY MORE STUFF, OR (N*N) THINGS TOTAL. THIS WOULD BE N^2, OR QUADRATIC RUNTIME.
// // VIEW EACH SHAPE AS A SERIES OF ROWS/COLUMNS
// function steps(n) {
//   // From 0 to n (iterate through rows)
//   for (let row = 0; row < n; row++) {
//     let stair = ''
//
//     // From 0 to n (iterate through columns)
//     for (let column = 0; column < n; column++) {
//       // if row > column, add a # to stair (don't forget to use += in a for loop like this)
//         if (column <= row) {
//           stair += '#'
//         } else {
//           stair += ' '
//         }
//
//     }
//     // make sure to log inside the initial for loop
//     console.log(stair);
//   }
// }

// MY FIRST STAB AT RECURSION
// function steps(n) {
//   // use while (x<= n) ?{
//     let stepsString = []
//
//     for (character of stepsString) {
//       if (stepsString.length <= n) {
//         //log character + stepsString
//         // how to calculate spaces?
//       } else {
//         ' ' + stepsString
//       }
//     }
//     // how to print appropriate number of # in a str
//
//
//
//   // }
// }
