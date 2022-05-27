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
   * Also, update list's length.
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

    this.length += 1

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
    this.length -= 1

    // If list is now empty, set head & tail to null
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return current
  }
}

let list = new SinglyLinkedList()
list.push('hello')
list.push('yo')
list.push('goodbye')
list.push('still here')
// console.log(list)
console.log('list.tail before', list.tail)
console.log(list.pop())
console.log('list.tail after', list.tail)
