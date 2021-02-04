/**
 * A function that accepts an array of positive ints and a positive number num.
 * Calculates the maximum sum of n consecutive elements in the array.
 * 
 * (Uses the Sliding Window Pattern to avoid nested loops.)
 */
function maxSubArraySum(arr, num) {
    // Set up initial variables. 
    let maxSum = 0
    let tempSum = 0

    // Return null if num is larger than the array provided.
    if (arr.length < num) return null

    // Sum up the first num amount of integers (initial "window") to create starting maxSum.
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }

    tempSum = maxSum

    // Starting at num, subtract the trailing value of the "window" and replace with the next value.
    // Compare tempSum to existing maxSum each time and reset if necessary.
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum
}

console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 3)) // 19
console.log(maxSubArraySum([100,200,300,400], 2)) // 700
console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 15)) // null
console.log(maxSubArraySum([2,6,9], 3)) // 17
