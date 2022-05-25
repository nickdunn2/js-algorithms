

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
}

let list = new SinglyLinkedList()
list.push('hello')
list.push('yo')
list.push('goodbye')
console.log(list)
