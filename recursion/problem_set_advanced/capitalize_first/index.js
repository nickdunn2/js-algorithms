/**
 * A recursive function that accepts an array of strings
 * and capitalizes the first letter in each.
 */
const capitalizeFirst = (arr) => {
  // Remove first item in array and capitalize first letter.
  const last = arr.shift()
  const capitalized = last.charAt(0).toUpperCase() + last.slice(1)

  // If array is now empty, return capitalized. Otherwise, do recursion.
  return arr.length === 0 ? [capitalized] : [capitalized].concat(capitalizeFirst(arr))
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])) // ['Car','Taco','Banana']
console.log(capitalizeFirst(['fee', 'fi', 'foe', 'fum'])) // ['Fee','Fi','Fo', 'Fum']
