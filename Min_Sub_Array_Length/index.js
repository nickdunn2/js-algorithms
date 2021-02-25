/**
 * A function that accepts two parameters:
 *   1) an array of positive integers
 *   2) a positive integer.
 *
 * Calculates the minimal length of a contiguous subarray,
 * of which the sum is greater than or equal to the integer passed in.
 * If there isn't one, return 0 instead.
 *
 * (Uses the Sliding Window Pattern to avoid nested loops.)
 */
function minSubArrayLen(arr, num) {
    // let pointer1 = 0
    // let pointer2 = 1

    for (let i = 0; i < arr.length; i++) {
        let pointer = i + 1
        let sum = arr[i] + arr[pointer]

        while (sum < num) {
            pointer++
            sum += arr[pointer]
            console.log('rolling sum -', sum)
        }
    }
    return arr
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 ([4,3] is the smallest subarray)
// console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 ([5,4] is the smallest subarray)
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 ([62] is greater than 52)
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)) // 3
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)) // 5
// console.log(minSubArrayLen([4,3,3,8,1,2,3], 11)) // 2
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)) // 0
