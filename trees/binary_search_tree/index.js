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

  /**
   * Search for a value in Binary Search Tree.
   * Return the node if the value exists. Otherwise, return false.
   */
  find(val) {
    if (!this.root) return false

    let current = this.root
    let found = false

    // While we haven't found the value yet & there's still something to search
    while(!found && !!current) {
      if (val < current.value) {
        current = current.left
      } else if (val > current.value) {
        current = current.right
      } else {
        found = true
      }
    }

    return current ?? found
  }

  /**
   * Search (i.e., "traverse") all nodes of the tree, breadth-first.
   */
  breadthFirstSearch() {
    // Create a queue (array that uses push/shift) variable
    const queue = []

    // Create a visited array that stores values of nodes visited
    const visited = []

    // Create variable for node that will change as we traverse
    let node

    // If there is a root, start there and push it onto the queue
    if (this.root) {
      node = this.root
      queue.push(node)
    }

    /**
     * While there is anything in the queue...
     *  a) dequeue node from the queue and place its value in visited array
     *  b) if there is a left on that dequeued node, add it to queue
     *  c) if there is a right on that dequeued node, add it to queue
     */
    while (queue.length > 0) {
      node = queue.shift()

      visited.push(node.value)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    // return the array of values of all nodes
    return visited
  }

  /**
   * Search (i.e., "traverse") all nodes of the tree, depth-first, using the pre-order technique.
   */
  preOrderSearch() {
    // Create a visited array that stores values of nodes visited
    const visited = []

    /**
     * Helper function that:
     *  1) accepts a node and stores its value in visited array
     *  2) if node has a left, recursively call itself with left
     *  3) if node has a right, recursively call itself with right
     */
    const traverse = (node) => {
      visited.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    // If there is a root, start there
    if (this.root) {
      traverse(this.root)
    }

    // return the array of values of all nodes
    return visited
  }
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(14)
tree.insert(11)
tree.insert(2)
tree.insert(8)
console.log(tree.preOrderSearch())
