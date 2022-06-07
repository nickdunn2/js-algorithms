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
   * @return this
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
   * @return Node | undefined
   */
  pop() {
    // if list is empty, return undefined
    if (!this.head) return undefined

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
   * @return Node | undefined
   */
  shift() {
    // if list is empty, return undefined
    if (!this.head) return undefined

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
   * @return {SinglyLinkedList}
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
}

let list = new SinglyLinkedList()
list.push('hello')
list.push('yo')
list.push('goodbye')
list.push('still here')
console.log('list.head before', list.head)
console.log(list.unshift('first'))
console.log('list.head after', list.head)
