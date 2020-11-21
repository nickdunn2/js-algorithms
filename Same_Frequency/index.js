/**
 * Write a function called sameFrequency().
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Your solution must have O(n) time complexity. (Hint: Use Frequency Counter Pattern.)
 */
function sameFrequency(num1, num2) {
    const obj1 = buildDictionaryFromString(num1.toString())
    const obj2 = buildDictionaryFromString(num2.toString())

    for (const val in obj1) {
        if (obj1[val] !== obj2[val]) {
            return false
        }
    }

    return true
}

function buildDictionaryFromString(str) {
    let obj = {}

    for (let i = 0; i < str.length; i++) {
        const digit = str[i]
        if (!obj[digit]) {
            obj[digit] = 1
        } else {
            obj[digit]++
        }
    }

    return obj
}


console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(22, 222)) // false
console.log(sameFrequency(3589578, 5879385)) // true

