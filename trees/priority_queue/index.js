class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

/**
 * Min Binary Heap
 */
class PriorityQueue {
  constructor() {
    this.values = []
  }

  /**
   * Insert a node and "bubble it up" to the correct spot.
   */
  enqueue(node) {
    this.values.push(node)
    this.bubbleUp()
  }

  /**
   * Look at the last node's priority in queue, and -- if necessary -- "bubble it up" to correct place.
   */
  bubbleUp() {
    // find last index, and value at that index
    let idx = this.values.length - 1
    const element = this.values[idx]

    while(idx > 0) {
      // find index & value of the parent
      let parentIndex = Math.floor((idx - 1)/2)
      let parent = this.values[parentIndex]

      // If element's priority is less than its parent, no swapping needed.
      if (element.priority >= parent.priority) break

      // Otherwise (priority is greater than parent), swap them & update idx
      this.values[parentIndex] = element
      this.values[idx] = parent
      idx = parentIndex
    }
  }

  /**
   * Extract the node with highest priority (the root) and return it.
   * Also, "re-balance" the heap by:
   *  1) placing the last node at the root
   *  2) "sinking it down" to the correct spot
   */
  dequeue() {
    const min = this.values[0]
    const end = this.values.pop()

    // Only reconfigure if there's still values left after extracting.
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }

    return min
  }

  /**
   * Look at the root node and -- if necessary -- sink it down to the correct place.
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
        if (leftChild.priority < el.priority) {
          swap = leftChildIdx
        }
      }

      if (rightChildIdx < len) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap === null && rightChild.priority < el.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
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

let ER = new PriorityQueue()
let coldPatient = new Node('common cold', 5)
let gunshotPatient = new Node('gunshot wound', 1)
let lowFeverPatient = new Node('low fever', 4)
let brokenArmPatient = new Node('broken arm', 2)
let highFeverPatient = new Node('high fever', 3)

ER.enqueue(coldPatient)
ER.enqueue(gunshotPatient)
ER.enqueue(lowFeverPatient)
ER.enqueue(brokenArmPatient)
ER.enqueue(highFeverPatient)

console.log('ER.values', ER.values)
console.log('ER.dequeue', ER.dequeue())
console.log('ER.dequeue', ER.dequeue())
console.log('ER.dequeue', ER.dequeue())
console.log('ER.dequeue', ER.dequeue())
console.log('ER.dequeue', ER.dequeue())
console.log('ER.dequeue', ER.dequeue())
