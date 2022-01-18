/**
 * A function that takes in an array of numbers and returns them sorted, in ascending order.
 * The function uses an insertion sort algorithm.
 */
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]
    // loop backwards from j. if arr[j] is > currentVal, replace arr[j+1] with it
    for (var j = i-1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1] = currentVal
  }
  return arr
}

console.log(insertionSort([2,1,9,76,4])) // [1,2,4,9,76]
console.log(insertionSort([37,45,29,8,88,-3])) // [-3,8,29,37,45,88]
