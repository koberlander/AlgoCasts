// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//This was my first though for the solution to this problem
function chunk(array, size) {
  // create empty chunked array
  const chunked = []

  //create index variable and start at 0
  let index = 0

    // while index is less than the length of the original array
    while(index < array.length){

      // create a variable called sliced that cuts from beginning of array to the size
      let sliced = array.slice(index, index + size)

      // push that slice into chunked
      chunked.push(sliced)

      index += size
    }
  return chunked
}

module.exports = chunk;

// ITERATIVE SOLUTION
// function chunk(array, size) {
//   // create empty array to hold chunks called 'chunked'
//   const chunked = []
//
//
//   // use for ... of to iterate through each element in the original array
//     for(let element of array ){
//
//       // find last element in chunked
//       const last = chunked[chunked.length - 1]
//
//       // if last element doesn't exist (bc there's nothing in that chunk yet) or the last element is equal to the size of the chunk
//         if (!last || last.length === size) {
//
//           // push a new chunk into 'chunked' with the current element
//           chunked.push([element])
//
//       // otherwise, add the element to the current chunk
//         } else {
//           last.push(element)
//         }
//     }
//
//   // return an array of arrays
//     return chunked
// }
