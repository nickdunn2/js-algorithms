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
   * Pop a node from the tail of the DoublyLinkedList, and return it.
   * Also, set the second-to-last node to be the new tail, and sever any connections
   *
   * @return Node | null
   */
  pop() {
    // if list is empty, return null
    if (!this.head) return null

    let poppedNode = this.tail

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }

    this.length--

    return poppedNode
  }

  /**
   * Remove and return list's head, setting its .next to be the new head.
   *
   * @return Node | null
   */
  shift() {
    // if list is empty, return null
    if (!this.head) return null

    const oldHead = this.head

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      oldHead.next = null
      this.head.prev = null
    }

    this.length--

    return oldHead
  }

  /**
   * Push a new node to the beginning of the DoublyLinkedList.
   *
   * @return DoublyLinkedList
   */
  unshift(val) {
    const node = new Node(val)

    // If there is no head, set node as the head & tail.
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }

    this.length++

    return this
  }

  /**
   * Return a node at a given "index" of the DoublyLinkedList.
   *
   * @return Node | null
   */
  get(idx) {
    // If input index is less than 0 or greater than list's length, return null.
    if (idx < 0 || idx >= this.length) return null

    let current, counter

    // If index is less than or equal to half the length, start from head and move forward.
    if (idx <= this.length / 2) {
      counter = 0
      current = this.head

      while (counter < idx) {
        current = current.next
        counter++
      }
    // Otherwise, start from tail and move backward.
    } else {
      counter = this.length - 1
      current = this.tail

      while (counter > idx) {
        current = current.prev
        counter--
      }
    }

    return current
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
list.push(500)
// console.log('list before', list)
console.log(list.get(1))
console.log(list.get(4))
console.log(list.get(6))
// console.log('list after', list)
