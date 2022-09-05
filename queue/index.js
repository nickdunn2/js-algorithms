class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  /**
   * Push a new node to the tail of the Queue.
   * If the queue is empty, also set it as the first/last.
   * Update queue's size and return the queue.
   *
   * @return Queue
   */
  enqueue(val) {
    let node = new Node(val)

    if (this.size === 0) {
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }

    this.size++

    return this
  }

  dequeue() {
    if (!this.first) {
      return null
    }

    let prevFirst = this.first

    if (this.last === prevFirst) {
      this.first = null
      this.last = null
    } else {
      this.first = prevFirst.next
    }

    this.size--

    return prevFirst.val
  }
}

let queue = new Queue()
queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(250)
queue.enqueue(350)
queue.enqueue(500)
console.log('queue before', queue)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log('queue after', queue)
