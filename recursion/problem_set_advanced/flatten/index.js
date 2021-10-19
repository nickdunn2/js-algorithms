/**
 * A recursive function that accepts an array of arrays (of ints, but could be anything)
 * and returns a new array will all of the values flattened.
 */
const flatten = (arr) => {
  let flattened = []

  // Loop through input array and either push to flattened or do recursion.
  for (let i = 0; i < arr.length; i++) {
    // If arr[i] is itself an array, do the recursion.
    if (Array.isArray(arr[i])) {
      // console.log('its an array, doing recursion on -', arr[i])
      flattened = flattened.concat(flatten(arr[i]))
    } else {
      // arr[i] isn't an array, so push the value to flattened array
      flattened.push(arr[i])
    }
  }

  return flattened
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]
