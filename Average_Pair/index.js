/**
 * Write a function called averagePair().
 * Given a sorted array of integers and a target average,
 * determine if there is a pair of values in the array
 * where the average of the pair equals the target average.
 * (There may be more than one pair that matches the target average.)
 *
 * BONUS CONSTRAINTS: Time O(n) + Space O(1)
 */
function averagePair(arr, target){
    let pointer = 1

    for (let i = 0; i < arr.length; i++) {
        // if average(i, pointer) === target, return true
        // otherwise, move pointer forward and check again
        // if average becomes larger than target or pointer hits the end, increment i, pointer goes next to it, and start over
        console.log('i -', i)
        console.log('pointer -', pointer)
        if ((arr[i] + arr[pointer]) / 2 === target) {
            console.log('first match!', `i is ${i} and pointer is ${pointer}`)
            return true
        } else {
            pointer++
            console.log('first not a match', `pointer is now ${pointer}`)

            if ((arr[i] + arr[pointer]) / 2 === target) {
                console.log('second match!', `i is ${i} and pointer is ${pointer}`)
                return true
            }

            if ((arr[i] + arr[pointer]) / 2 > target || pointer === (arr.length - 1)) {
                pointer = i + 2
                console.log('end not a match', `pointer is now ${pointer}`)
            }
        }
    }

    return false
}

// console.log(averagePair([1,2,3], 2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)) // true
// console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
