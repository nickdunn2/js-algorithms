/**
 * A function that accepts two strings and returns the number of times the second string appears in the first string.
 * If the second string never appears in the first string, returns 0.
 */
const naiveSearch = (long, short) => {
  let count = 0
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i+j]) break
      if (j === short.length - 1) count++
    }
  }

  return count
}

console.log(naiveSearch('lorie loled', 'lol')) // 1
console.log(naiveSearch('lorie loled', 'lo')) // 2
console.log(naiveSearch('lorie loled', 'oops')) // 0
console.log(naiveSearch('lorie loled', 'this is way to long to try')) // 0
console.log(naiveSearch('lorie loled', '')) // 0
