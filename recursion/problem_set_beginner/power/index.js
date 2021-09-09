const power = (base, exponent) => {
  if (exponent <= 0) { // not accounting properly for negative exponents :shrug:
    return 1
  }

  if (exponent === 1) {
    return base
  }

  return base * power(base, exponent - 1)
}

console.log(power(2, 4)) // 16
console.log(power(2, 0)) // 1
console.log(power(2, 2)) // 4
console.log(power(4, 3)) // 64
