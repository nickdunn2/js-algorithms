class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  /**
   * Insert a new node into the tree, based on its value.
   * Return the tree, or, if the value already exists, return undefined.
   *
   * @returns undefined | BinarySearchTree
   */
  insert(val) {
    const node = new Node(val)

    // If there is no root, the new node becomes the root
    if (this.root === null) {
      this.root = node
      return this
    }

    // Otherwise, start at root to find where the new node should go
    let current = this.root
    while (true) {
      // prevent infinite loops if the value is already in the tree
      if (val === current.value) return undefined

      // If value is less, keep checking until there's not a .left.
      if (val < current.value) {
        if (current.left === null) {
          current.left = node
          return this
        }

        current = current.left
      }
      // If value is greater, keep checking until there's not a .right.
      else if (val > current.value) {
        if (current.right === null) {
          current.right = node
          return this
        }

        current = current.right
      }
    }
  }
}

const tree = new BinarySearchTree()
tree.insert(10)
console.log('tree after 10', tree)
tree.insert(5)
console.log('tree after 5', tree)
tree.insert(13)
tree.insert(14)
tree.insert(11)
console.log('tree after 13 & 14 & 11', tree)
