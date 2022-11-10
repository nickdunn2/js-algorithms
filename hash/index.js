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

  /**
   * Method to set a (hashed) key-value pair in the keyMap.
   */
  set(key, value) {
    // hash the key
    const index = this._hash(key)

    // store the key-value pair in keyMap using separate chaining (arrays at each key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }

    this.keyMap[index].push([key, value])
  }

  get(key) {
    // hash the key
    // retrieve the key-value pair in keyMap
    // return undefined if key is not found
  }
}

const ht = new HashTable()
ht.set("pink", "#481jfd")
