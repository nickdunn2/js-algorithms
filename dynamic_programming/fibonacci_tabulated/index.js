/**
 * Tabulated solution to find value of the nth number in the Fibonacci sequence.
 * (1, 1, 2, 3, 5, 8, 13, 21, ...)
 *
 * IMPORTANT: Like fibMemoized, this solution is NOT "naive" (compared to fibRecursive).
 * It uses tabulation, and therefore the performance remains stellar once you get above fairly small inputs.
 * BONUS: It also uses less space than fibMemoized.
 */
function fibTabulated(n) {
  if (n <= 2) return 1
  const fibNums = [0,1,1]
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i-1] + fibNums[i-2]
  }

  return fibNums[n]
}

console.log(fibTabulated(1)) // 1
console.log(fibTabulated(2)) // 1
console.log(fibTabulated(4)) // 3
console.log(fibTabulated(40)) // 102334155 (notice this is also fast, like fibMemoized)
