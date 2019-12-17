// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // create an empty array of arrays called results
  const results = []

  for (let i = 0; i < n; i++) {
    results.push([])
  }

  // create a counter variable starting at 1
  let counter = 1

  // create variables for start/end row and start/end column
  let startColumn = 0
  let endColumn = n - 1

  let startRow = 0
  let endRow = n - 1

  // as long as (start column <= end column) AND (start row <= end column)

    // loop from start column to end column

      // At results[start_row][i] assign counter variable

      // increment counter

  // increment start row

  // Loop from start row to end row

    // At results[i][end_column] assign counter variable

    // increment counter

  // Decrement end row

  // ...repeat for other two sides

}

module.exports = matrix;
