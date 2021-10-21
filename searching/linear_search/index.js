/**
 * A function that accepts an array (of numbers) and a number
 * and returns the index at which that number exists.
 *
 * If the number does not exist in the array, return -1.
 * (This is essentially just Javascript's native indexOf() searching algorithm.)
 */
const linearSearch = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i
    }
  }

  return -1
}

console.log(linearSearch([10, 15, 20, 25, 30], 15)) // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)) // 5
console.log(linearSearch([100], 100)) // 0
console.log(linearSearch([1, 2, 3, 4, 5], 6)) // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)) // -1
console.log(linearSearch([100], 200)) // -1
