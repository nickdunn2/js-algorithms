/**
 * A recursive function that takes in a number and adds up all the numbers from 0 to that number.
 */
const recursiveRange = (num) => {
  if (num <= 0) {
    return 0
  }

  return num + recursiveRange(num - 1)
}

console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55
