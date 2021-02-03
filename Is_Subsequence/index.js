/**
 * Write a function called isSubsequence().
 * It should take in two strings and check whether the characters in the first string
 * form a subsequence of the characters in the second string, WITHOUT their order changing.
 *
 * (i.e., do the characters in the first string appear somewhere in the second string?)
 *
 * HINT: Use the Multiple Pointer Pattern
 * CONSTRAINTS: Time O(n) + Space O(1)
 */
function isSubsequence(str1, str2) {
    let pointer1 = 0
    let pointer2 = 0

    if (!str1) {
        return true
    }

    while (pointer2 < str2.length) {
        if (str2[pointer2] === str1[pointer1]) {
            pointer1++
        }

        if (pointer1 === str1.length) {
            return true
        }

        pointer2++
    }

    return false
}


console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) // false (order matters)
