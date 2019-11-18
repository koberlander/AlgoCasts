// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // create empty array to hold chunks called 'chunked'
  const chunked = []


  // use for ... of to iterate through each element in the original array
    for(let element of array ){

      // find last element in chunked
      const last = chunked[chunked.length - 1]

      // if last element doesn't exist (bc there's nothing in that chunk yet) or the last element is equal to the size of the chunk
        if (!last || last.length === size) {

          // push a new chunk into 'chunked' with the current element
          chunked.push([element])

      // otherwise, add the element to the current chunk
        } else {
          last.push(element)
        }
    }

  // return an array of arrays
    return chunked
}

module.exports = chunk;
