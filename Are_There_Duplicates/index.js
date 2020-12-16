/**
 * Write a function called areThereDuplicates().
 * Given a variable number of arguments, it should check if there are duplicates among the arguments passed in.
 *
 * Your solution must have O(n) time/space complexity. (Hint: Use Frequency Counter or Multiple Pointer Pattern.)
 * BONUS: Time O(nlogn) + Space O(1)
 */
function areThereDuplicates(...args) {
    let dict = {}

    for (let i = 0; i < args.length; i++) {
        const val = args[i]
        if (dict.hasOwnProperty(val)) {
            return true
        }

        dict[val] = 1
    }

    return false
}

function areThereDuplicatesOneLine(...args) {
    return new Set(args).size !== args.length
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true
console.log(areThereDuplicates('a', 'b', 'c', 1, 43, 17)) // false

console.log(areThereDuplicatesOneLine(1, 2, 3)) // false
console.log(areThereDuplicatesOneLine(1, 2, 2)) // true
console.log(areThereDuplicatesOneLine('a', 'b', 'c', 'a')) // true
console.log(areThereDuplicatesOneLine('a', 'b', 'c', 1, 43, 17)) // false
