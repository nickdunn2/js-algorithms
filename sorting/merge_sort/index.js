/**
 * Function using a mergeSort algorithm to sort an unsorted array (of integers).
 */
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr

  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))

  return mergeArrays(left, right)
}

/**
 * Function to merge two sorted arrays (without using built-in .sort())
 * This is vital for any mergeSort algorithm.
 */
const mergeArrays = (arr1, arr2) => {
  let i = 0
  let j = 0
  let merged = []

  // While both have values, loop through and combine
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i])
      i++
    } else {
      merged.push(arr2[j])
      j++
    }
  }

  // Account for any remaining values in arr1 (if arr2 is exhausted)
  while (i < arr1.length) {
    merged.push(arr1[i])
    i++
  }

  // Account for any remaining values in arr2 (if arr1 is exhausted)
  while (j < arr2.length) {
    merged.push(arr2[j])
    j++
  }

  return merged
}

console.log(mergeSort([10,24,76,73,72,1,9])) // [1,9,10,24,72,73,76]

// console.log(mergeArrays([1,10,50], [2,14,99,100])) // [1,2,4,10,50,99,100]
// console.log(mergeArrays([], [2,4,8])) // [2,4,8]
// console.log(mergeArrays([100,200,9000], [])) // [100,200,9000]
