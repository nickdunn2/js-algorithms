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
    // good luck. Add any arguments you deem necessary.
    return true
}


console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) // false (order matters)
