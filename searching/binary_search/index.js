/**
 * A function that accepts a sorted array and a value
 * and returns the index at which the value exists.
 * If the value does not exist, returns -1.
 */
const binarySearch = (arr, val) => {
  // set up initial left, right and middle pointers
  let left = 0
  let right = arr.length - 1
  let mid = Math.floor((left + right) / 2)

  // if mid pointer is not the val, and left pointer hasn't passed the right, keep searching
  while (arr[mid] !== val && left <= right) {
    if (val < arr[mid]) {
      // mid pointer is too large. bump right pointer 1 to the left of mid.
      right = mid -1
    } else {
      // mid pointer is too large. bump left pointer 1 to the left of mid.
      left = mid + 1
    }
    // reset mid pointer in both cases
    mid = Math.floor((left + right) / 2)
  }

  return arr[mid] === val ? mid : -1
}

console.log(binarySearch([1,2,3,4,5], 2)) // 1
console.log(binarySearch([1,2,3,4,5,6], 3)) // 2
console.log(binarySearch([1,2,3,4,5], 5)) // 4
console.log(binarySearch([1,2,3,4,5], 6)) // -1
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 10)) // 2
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 95)) // 16
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 100)) // -1
