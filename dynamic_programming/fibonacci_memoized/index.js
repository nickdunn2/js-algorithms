/**
 * Recursive, memoized solution to find value of the nth number in the Fibonacci sequence.
 * (1, 1, 2, 3, 5, 8, 13, 21, ...)
 *
 * IMPORTANT: This solution is NOT "naive" (compared to fibRecursive); it uses caching/memoization,
 * and therefore the performance remains stellar once you get above fairly small inputs.
 */
function fibMemoized(n, memo = []) {
  // First, attempt to return the cached/memoized result.
  if (memo[n] !== undefined) return memo[n]

  if (n <= 2) return 1

  // Call fibMemoized while also passing in the the memo
  const result = fibMemoized(n - 1, memo) + fibMemoized(n - 2, memo)

  // Update the memo and return the result.
  memo[n] = result

  return result
}

console.log(fibMemoized(1)) // 1
console.log(fibMemoized(2)) // 1
console.log(fibMemoized(4)) // 3
console.log(fibMemoized(50)) // 12586269025 (notice that this does NOT take a long time now)
