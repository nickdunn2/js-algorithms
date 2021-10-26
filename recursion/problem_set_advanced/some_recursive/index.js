/**
 * A recursive function that accepts an array and a callback function.
 *
 * The function returns true if a single value in the array returns true
 * when passed to the callback. Otherwise, it returns false.
 */
const someRecursive = (arr, fn) => {
  if (arr.length === 0) {
    return false
  }

  const lastVal = arr.pop()

  return fn(lastVal) ? true : someRecursive(arr, fn)
}

const isOdd = val => val % 2 !== 0

console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)) // false
