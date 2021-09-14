/**
 * A recursive function that takes in an array of numbers and returns the product of them all.
 */
const productOfArray = (arr) => {
  if (arr.length < 1) {
    return 1 // what should an empty array return?
  }

  // pop off last item in array (this mutates the input arr!)
  const lastItem = arr.pop()

  // multiply that last item by product of what's remaining in the arr
  return lastItem * productOfArray(arr)
}

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60
