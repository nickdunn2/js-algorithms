class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  /**
   * Push a new node to the tail of the DoublyLinkedList.
   *
   * @return DoublyLinkedList
   */
  push(val) {
    let node = new Node(val)

    // If there is no head, set new node as the head/tail.
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      // Otherwise, update end of the list appropriately.
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }

    this.length++

    return this
  }

  /**
   * Utility method to return array of all values in the list.
   */
  print() {
    let arr = []
    let current = this.head
    while(current) {
      arr.push(current.val)
      current = current.next
    }

    return arr
  }
}

let list = new DoublyLinkedList()
list.push(100)
list.push(200)
list.push(250)
list.push(350)
console.log('list', list)


