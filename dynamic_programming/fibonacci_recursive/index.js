/**
 * Recursive solution to find value of the nth number in the Fibonacci sequence.
 * (1, 1, 2, 3, 5, 8, 13, 21, ...)
 */
function fibRecursive(n) {
  if (n <= 2) return 1
  return fibRecursive(n - 1) + fibRecursive(n - 2)
}

console.log(fibRecursive(1)) // 1
console.log(fibRecursive(2)) // 1
console.log(fibRecursive(4)) // 3
console.log(fibRecursive(8)) // 21
