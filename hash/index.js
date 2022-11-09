class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  /**
   * Basic hash function that works on strings only.
   */
  _hash(key) {
    let total = 0
    let WEIRD_PRIME = 31

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      // map "a" to 1, "b" to 2, "c" to 3, etc.
      let value = char.charCodeAt(0) - 96
      total = (total + WEIRD_PRIME + value) % this.keyMap.length
    }

    return total
  }
}

// console.log(hash("pink", 10)) // 4
// console.log(hash("orangered", 10)) // 6
// console.log(hash("cyan", 10)) // 7
