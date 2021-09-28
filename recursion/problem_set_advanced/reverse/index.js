/**
 * A recursive function that accepts a string and returns a new string, in reverse.
 */
const reverse = (str) => {
  // Base Case: If string is down to only one char, return it.
  if (str.length === 1) {
    return str
  }

  // Slice off the end of the string, then return that + reverse() of what's remaining.
  // NOTE: Slice does NOT modify the existing string, so that's why two are necessary.
  const lastChar = str.slice(-1)
  const allButLastChar = str.slice(0, -1)

  return lastChar + reverse(allButLastChar)
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('lol')) // 'lol'
console.log(reverse('rithmschool')) // 'loochsmhtir'
