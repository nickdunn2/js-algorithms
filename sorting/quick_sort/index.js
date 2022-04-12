/**
 * Quick sort algorithm using a pivot helper function + recursion to sort an array of integers in place.
 */
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    // find initial pivotIndex
    let pivotIndex = pivot(arr, left, right)

    // recursively sort the left side
    quickSort(arr, left, pivotIndex - 1)

    // recursively sort the right side
    quickSort(arr, pivotIndex + 1, right)
  }

  return arr
}

/**
 * A helper function to define a pivot point in an array and move all elements (in place)
 * to the left or right of that pivot point.
 *
 * If val is greater than the pivot, it should be to the right.
 * If val is less than the pivot, it should be to the left.
 *
 * Return the index of the pivot point.
 */
const pivot = (arr, start = 0, end = arr.length - 1) => {
  // an ES2015 way to swap two values (in place) in an array
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  let pivot = arr[start]
  let swapIdx = start

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }

  swap(arr, start, swapIdx)

  return swapIdx
}

console.log('pivot -', pivot([4,8,2,1,5,7,6,3])) // 3
console.log('quickSort -', quickSort([4,8,2,1,5,7,6,3])) // [1,2,3,4,5,6,7,8]
console.log('quickSort -', quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23])) // [-3, 1, 2, 2, 3, 4, 5, 6, 9, 23, 100]



