/**
 * A function that accepts a sorted array and a value
 * and returns the index at which the value exists.
 * If the value does not exist, returns -1.
 */
const binarySearch = (arr, val) => {
  // create copy of array (for slicing later)
  let slicedArray = arr

  // set up initial left/right pointers at beginning/end of array
  let left = slicedArray[0]
  let right = slicedArray[slicedArray.length - 1]

  // while the left pointer is still before the right pointer, do your work
  while (left < right) {
    // if left pointer matches the val, return the index of that value from the ORIGINAL array
    if (left === val) {
      return arr.indexOf(left)
    }

    // if right pointer matches the val, return the index of that value from the ORIGINAL array
    if (right === val) {
      return arr.indexOf(right)
    }

    // calculate the midpoint of the slicedArray each time
    const i = Math.floor(slicedArray.length / 2)
    let mid = slicedArray[i]

    // set up adjustedIndex for later use
    let adjustedIndex

    // if mid pointer matches the val, return the index of that value from the ORIGINAL array
    if (mid === val) {
      return arr.indexOf(mid)

    // midpoint is too small. bump the left pointer up to the midpoint.
    } else if (mid < val) {
      left = mid
      slicedArray = slicedArray.slice(slicedArray.indexOf(left))
      adjustedIndex = Math.floor(slicedArray.length / 2)
      mid = slicedArray[adjustedIndex]

    // midpoint is too large. bump the right pointer down to the midpoint.
    } else if (mid > val) {
      right = mid
      slicedArray = slicedArray.slice(0, slicedArray.indexOf(right) + 1)
      adjustedIndex = Math.floor(slicedArray.length / 2)
      mid = slicedArray[adjustedIndex]

    // no logical reason this should ever be hit
    } else {
      console.log('something has gone weird')
      return
    }
  }

  // return -1 if the left/right pointers have reached each other without a match
  return -1
}

console.log(binarySearch([1,2,3,4,5], 2)) // 1
console.log(binarySearch([1,2,3,4,5,6], 3)) // 2
console.log(binarySearch([1,2,3,4,5], 5)) // 4
console.log(binarySearch([1,2,3,4,5], 6)) // -1
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 10)) // 2
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 95)) // 16
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 100)) // -1
