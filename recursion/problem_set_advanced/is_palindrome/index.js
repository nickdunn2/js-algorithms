/**
 * A recursive function that returns a boolean representing
 * whether or not the string passed it is a palindrome.
 */
const isPalindrome = (str) => {
  // Base Case: Length of string is 1 or 0
  if (str.length <= 1) {
    return true
  }

  const lastChar = str.slice(-1)
  const firstChar = str.slice(0,1)
  const remaining = str.slice(1, -1)
  // console.log('lastChar -', lastChar)
  // console.log('firstChar -', firstChar)
  // console.log('remaining -', remaining)

  if (lastChar !== firstChar) {
    return false
  }

  return isPalindrome(remaining)
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
