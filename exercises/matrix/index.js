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
   while (startColumn <= endColumn && startRow <= endRow) {

    // loop from start column to end column
    // TOP ROW
     for (let i = startColumn; i <= endColumn; i++) {
      // At results[start_row][i] assign counter variable
        results[startRow][i] = counter

      // increment counter
        counter++
    }
    // increment start row
     startRow++

  // Loop from start row to end row
  // RIGHT COLUMN
   for (let i = startRow; i <= endRow; i++) {
    // At results[i][end_column] assign counter variable
     results[i][endColumn] = counter

     // increment counter
      counter++
   }

   // Decrement end column
    endColumn--

  // Bottom row
   for (let i = endColumn; i >= startColumn; i--) {
     results[endRow][i] = counter

     counter ++
   }
   // decrement end row
    endRow--

   // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter
      counter++
    }
    startColumn++
  }

  return results
}

module.exports = matrix;
