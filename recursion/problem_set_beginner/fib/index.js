/**
 * A recursive function that accepts a number and returns the nth number in the Fibonacci sequence.
 *
 * (For reference, the Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8,13,...
 * which starts with 1 and 1, and every number thereafter is the sum of the previous two.)
 */
const fib = (num) => {
  // Base Case: Number passed in reaches 2 (or 1 is passed in immediately)
  if (num <= 2) {
    return 1
  }

  // Since every number is the sum of its previous two numbers, return that formula
  return fib(num - 1) + fib(num - 2)
}

console.log(fib(4)) // 3
console.log(fib(6)) // 8
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
