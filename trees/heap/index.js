class MaxBinaryHeap {
  constructor() {
    this.values = [41,39,33,18,27,12]
  }

  /**
   * Insert a value and "bubble it up" to the correct spot.
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

  /**
   * Extract the max value (the root) and return it.
   * Also, "re-balance" the heap by:
   *  1) placing the last item at the root
   *  2) "sinking it down" to the correct spot
   */
  extractMax() {
    const max = this.values[0]
    const end = this.values.pop()

    // Only reconfigure if there's still values left after extracting.
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }

    return max
  }

  /**
   * Look at the root value and -- if necessary -- sink it down to the correct place.
   */
  sinkDown() {
    let idx = 0
    const len = this.values.length
    const el = this.values[0]

    while(true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null

      if (leftChildIdx < len) {
        leftChild = this.values[leftChildIdx]
        if (leftChild > el) {
          swap = leftChildIdx
        }
      }

      if (rightChildIdx < len) {
        rightChild = this.values[rightChildIdx]
        if (
            (swap === null && rightChild > el) ||
            (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx
        }
      }

      if (swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = el
      idx = swap
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
console.log('extractMax - ', heap.extractMax())
console.log('heap', heap.values)
