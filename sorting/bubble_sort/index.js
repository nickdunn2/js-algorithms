/**
 * A function that takes in an array of numbers and returns them sorted, in ascending order.
 * The function uses a bubble sort algorithm.
 */
const bubbleSort = (arr) => {
  // an ES2015 way to swap values (in place) in an array
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  let noSwaps

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j+1)
        noSwaps = false
      }
    }

    // if any loops have no swaps, then all remaining loops will also have no swaps
    if (noSwaps) break
  }
  return arr
}

console.log(bubbleSort([37,45,29,8])) // [8,29,37,45]
console.log(bubbleSort([37,45,29,8,88,-3])) // [-3,8,29,37,45,88]
console.log(bubbleSort([8,1,2,3,4,5,6,7])) // [-1,2,3,4,5,6,7,8]
