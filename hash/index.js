/**
 * Basic hash function that works on strings only.
 */
const hash = (key, arrayLength) => {
  let total = 0
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLength
  }

  return total
}

console.log(hash("pink", 10)) // 0
console.log(hash("orangered", 10)) // 7
console.log(hash("cyan", 10)) // 3
