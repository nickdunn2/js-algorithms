/**
 * A function that takes in an array of numbers and returns them sorted, in ascending order.
 * The function uses a selection sort algorithm.
 */
const selectionSort = (arr) => {
  // an ES2015 way to swap two values (in place) in an array
  const swap = (sourceArr, idx1, idx2) => {
    [sourceArr[idx1], sourceArr[idx2]] = [sourceArr[idx2], sourceArr[idx1]]
  }

  for (let i = 0; i < arr.length; i++) {
    let min = i

    // compare each following item and reset min if it's smaller
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    // ONLY swap if there's actually a swap needed.
    // (i.e., the current smallest value is not at the beginning)
    if (i !== min) {
      swap(arr, i, min)
    }
  }
  return arr
}

console.log(selectionSort([34,22,10,19,17])) // [10,17,19,22,34]
console.log(selectionSort([37,45,29,8,88,-3])) // [-3,8,29,37,45,88]
console.log(selectionSort([6,1,2,3,4,5])) // [1,2,3,4,5,6]
