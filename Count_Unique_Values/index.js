/**
 * A function that accepts a SORTED array and returns the count of the unique values in that array.
 */
function countUniqueValues(arr) {
    // Set up initial variables. 
    let uniques = 0
    let stepper = 1
    let firstPointer = arr[0]
    let secondPointer = arr[stepper]

    if (firstPointer !== undefined) {
        // There's at least one value in the array, so increment.
        uniques += 1

        // Loop through as long as the second pointer exists
        while (secondPointer !== undefined) {
            // If the pointers are unique...
            // 1. increment uniques and stepper
            // 2. bump the firstPointer up to where the secondPointer currently is
            // 3. bump secondPointer up 1 more
            if (firstPointer !== secondPointer) {
                uniques += 1
                stepper += 1
                firstPointer = secondPointer
                secondPointer = arr[stepper]
            // If the pointers match, just bump secondPointer up 1 more
            } else {
                stepper += 1
                secondPointer = arr[stepper]
            }
        }
    }

    return uniques
}

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([13])) // 1
console.log(countUniqueValues([4,4,4,4,4,4,4,4])) // 1
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4
