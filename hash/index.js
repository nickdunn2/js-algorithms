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

  /**
   * Method to get the value of a key passed in.
   */
  get(key) {
    // hash the key to get index
    const index = this._hash(key)

    // check if keyMap contains anything at that index
    if (this.keyMap[index]) {
      // since we're using separate chaining, must loop through array of arrays at that index
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }

    // return undefined if nothing is found
    return undefined
  }

  /**
   * Method to get an array of all the (unique) keys in the keyMap.
   */
  keys() {
    const keysArr = []

    for (let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          const key = this.keyMap[i][j][0]

          // In a better hash map, there would never be duplicate keys.
          // The set() method would override if that key already existed.
          // However, this is a super-basic hash map, so we do this check before pushing.
          if (!keysArr.includes(key)) keysArr.push(key)
        }
      }
    }

    return keysArr
  }

  /**
   * Method to get an array of all the (unique) values in the keyMap.
   */
  values() {
    const valsArr = []

    for (let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          const val = this.keyMap[i][j][1]

          // only push if the val is not already in valsArr
          if (!valsArr.includes(val)) valsArr.push(val)
        }
      }
    }

    return valsArr
  }
}

const ht = new HashTable(17)

ht.set("indianred", "#CD5C5C")
ht.set("lightcoral", "#F08080")
ht.set("salmon", "#FA8072")
ht.set("darksalmon", "#E9967A")
ht.set("lightsalmon", "#FFA07A")
ht.set("red", "#FF0000")
ht.set("maroon", "#800000")
ht.set("yellow", "#FFFF00")
ht.set("four", "#FFFF00")
ht.set("boo", "#FFFF00")

console.log(ht.keys())
console.log(ht.values())

// console.log(ht.get('red')) // "#FF0000"
// console.log(ht.get('maroon')) // "#800000"
// console.log(ht.get('darksalmon')) // "#E9967A"
// console.log(ht.get('lightcoral')) // "#F08080"
// console.log(ht.get('poo poo')) // undefined
