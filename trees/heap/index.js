class MaxBinaryHeap {
  constructor() {
    this.values = [41,39,33,18,27,12]
  }

  /**
   * Insert a value and "bubble it up" to the correct spot in the MaxBinaryHeap.
   */
  insert(val) {
    this.values.push(val)
    this.bubbleUp()
  }

  /**
   * Look at the last value in array, and -- if necessary -- "bubble it up" to correct place.
   */
  bubbleUp() {
    // find last index, and value at that index
    let idx = this.values.length - 1
    const val = this.values[idx]

    while(idx > 0) {
      // find index & value of the parent
      let parentIndex = Math.floor((idx - 1)/2)
      let parentVal = this.values[parentIndex]

      // If val is less than its parent, no swapping needed.
      if (val <= parentVal) break

      // Otherwise (val is greater than parent), swap them & update idx
      this.values[parentIndex] = val
      this.values[idx] = parentVal
      idx = parentIndex
    }
  }
}

let heap = new MaxBinaryHeap()
heap.insert(55)
console.log('heap', heap.values)
heap.insert(1)
console.log('heap', heap.values)
heap.insert(52)
console.log('heap', heap.values)
