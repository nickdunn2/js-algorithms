class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  /**
   * Push a new node to the tail of the SinglyLinkedList.
   * If there is no head, also set it as the head.
   * Update list's length and return the list.
   *
   * @return SinglyLinkedList
   */
  push(val) {
    let node = new Node(val)

    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }

    this.length++

    return this
  }

  /**
   * Pop a node from the tail of the SinglyLinkedList, and return it.
   * Also, set the second-to-last node to be the new tail.
   *
   * @return Node | null
   */
  pop() {
    // if list is empty, return null
    if (!this.head) return null

    let current = this.head
    let newTail = current

    // Loop through list until you reach the tail
    while(current.next) {
      newTail = current
      current = current.next
    }

    // Set newTail (second-to-last node) to be the new tail, and decrement length
    newTail.next = null
    this.tail = newTail
    this.length--

    // If list is now empty, set head & tail to null
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return current
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
    this.head = oldHead.next
    this.length--

    // If list is now empty, set tail to null
    if (this.length === 0) {
      this.tail = null
    }

    return oldHead
  }

  /**
   * Push a new node to the beginning of the SinglyLinkedList.
   * If there is no head, also set it as the head & tail.
   * Otherwise, set new node's next to be the old (current) head.
   * Update list's length and return the list.
   *
   * @return SinglyLinkedList
   */
  unshift(val) {
    const node = new Node(val)

    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }

    this.length++

    return this
  }

  /**
   * Return a node at a given "index" of the SinglyLinkedList.
   * If input index is less than 0 or greater than list's length, return null.
   *
   * @return Node | null
   */
  get(idx) {
    if (idx < 0 || idx >= this.length) return null

    let counter = 0
    let node = this.head

    while (counter < idx) {
      node = node.next
      counter++
    }

    return node
  }

  /**
   * Set ("update") value of a given index to be a given value.
   * Return false if there is no node at the given index.
   *
   * @return boolean
   */
  set(index, val) {
    let foundNode = this.get(index)

    if (foundNode) {
      foundNode.val = val
      return true
    }

    return false
  }

  /**
   * Insert a new node with a given value at a given index in the list.
   *
   * @return boolean
   */
  insert(index, val) {
    // If index is less than 0 or greater than length, return false
    if (index < 0 || index > this.length) return false

    // If index is equal to the length, push a new node to the end
    if (index === this.length) return !!this.push(val)

    // If index is 0, unshift a new node to the start
    if (index === 0) return !!this.unshift(val)

    // Otherwise, get the node BEFORE the given index and insert after it.
    const newNode = new Node(val)
    let prevNode = this.get(index - 1)
    const prevNext = prevNode.next
    prevNode.next = newNode
    newNode.next = prevNext
    this.length++

    return true
  }

  /**
   * Remove node from a given index.
   *
   * @return Node | null
   */
  remove(index) {
    // edge cases
    if (index < 0 || index >= this.length) return null
    if (index === this.length - 1) return this.pop()
    if (index === 0) return this.shift()

    const affectedNode = this.get(index - 1)
    const removedNode = affectedNode.next
    affectedNode.next = removedNode.next
    this.length--

    return removedNode
  }

  /**
   * Reverse the list and return it.
   */
  reverse() {
    let current = this.head
    this.head = this.tail
    this.tail = current

    let next
    let prev = null

    for(let i = 0; i < this.length; i++) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }

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

let list = new SinglyLinkedList()
list.push(100)
list.push(200)
list.push(250)
list.push(350)
console.log('list before', list.print())
list.reverse()
console.log('list after', list.print())
