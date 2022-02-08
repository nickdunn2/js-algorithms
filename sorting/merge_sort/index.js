/**
 * Function to merge two sorted arrays (without using built-in .sort())
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

console.log(mergeArrays([1,10,50], [2,14,99,100])) // [1,2,4,10,50,99,100]
console.log(mergeArrays([], [2,4,8])) // [2,4,8]
console.log(mergeArrays([100,200,9000], [])) // [100,200,9000]
