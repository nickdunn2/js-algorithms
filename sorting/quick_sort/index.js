/**
 * A helper function to define a pivot point in an array and move all elements (in place)
 * to the left or right of that pivot point.
 *
 * If val is greater than the pivot, it should be to the right.
 * If val is less than the pivot, it should be to the left.
 *
 * Return the index of the pivot point.
 */
const pivot = (arr, start = 0, end = arr.length + 1) => {
  // an ES2015 way to swap two values (in place) in an array
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  let pivot = arr[start]
  let swapIdx = 0

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }

  swap(arr, start, swapIdx)

  return swapIdx
}

console.log(pivot([4,8,2,1,5,7,6,3])) // 3
