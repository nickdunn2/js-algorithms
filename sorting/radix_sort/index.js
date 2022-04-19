/**
 * A helper function to return the value of a digit at a given index in a number.
 *
 * getDigit(12345, 0) // 5
 * getDigit(12345, 3) // 2
 * getDigit(12345, 5) // 0
 */
const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

console.log(getDigit(7323,4)) // 0
console.log(getDigit(7323,3)) // 7
console.log(getDigit(7323,2)) // 3
console.log(getDigit(7323,1)) // 2
console.log(getDigit(7323,0)) // 3

/**
 * A helper function to return the number of digits in a (base 10) number.
 *
 * digitCount(1) // 1
 * digitCount(25) // 2
 * digitCount(314) // 3
 */
const digitCount = (num) => {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

console.log(digitCount(1)) // 1
console.log(digitCount(25)) // 2
console.log(digitCount(314)) // 3
