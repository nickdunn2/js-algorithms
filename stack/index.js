class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(val) {
    let newNode = new Node(val)

    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      let temp = this.first
      this.first = newNode
      this.first.next = temp
    }

    return ++this.size
  }

  pop() {
    if (this.size === 0) {
      return null
    }

    let temp = this.first

    if (this.first === this.last) {
      this.last = null
    }

    this.first = this.first.next
    this.size--

    return temp.val
  }
}

let stack = new Stack()
stack.push(100)
stack.push(200)
stack.push(250)
stack.push(350)
stack.push(500)
console.log('stack before', stack)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log('stack after', stack)
