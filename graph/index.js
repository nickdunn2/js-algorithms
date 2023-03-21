class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) {
      this.adjacencyList[name] = []
    }
  }

  /**
   * Remove vertex (by key) from undirected graph.
   * Loop through all connections and remove those from remaining vertices, then delete vertex.
   */
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length > 0) {
      const adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }
    delete this.adjacencyList[vertex]
  }

  /**
   * Function to connect two vertices in an undirected graph.
   * @param v1 vertex1
   * @param v2 vertex2
   */
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  /**
   * Function to remove a connection between two vertices in an undirected graph.
   * @param v1 vertex1
   * @param v2 vertex2
   */
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
  }

  /**
   * Depth-first search of a graph, recursively.
   */
  dfsRecursive(start) {
    const result = []
    const visited = {}
    const adjacencyList = this.adjacencyList

    // define anonymous helper function
    function dfs(vertex) {
      if (!vertex) return null

      visited[vertex] = true
      result.push(vertex)

      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      })

    }
    // immediately invoke it with start
    dfs(start)

    return result
  }

  /**
   * Depth-first search of a graph, iteratively.
   */
  dfsIterative(start) {
    const result = []
    const visited = {}
    const stack = [start]
    let currentVertex

    visited[start] = true

    while (stack.length > 0) {
      currentVertex = stack.pop()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }

    return result
  }

  /**
   * Breadth-first search of a graph.
   */
  bfs(start) {
    // create a queue (array) and place start in it
    // create visited (return) array
    // create object to store nodes visited & mark start as visited
    const result = []
    const visited = {}
    const queue = [start]
    let currentVertex

    visited[start] = true

    while (queue.length > 0) {
      currentVertex = queue.shift()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          queue.push(neighbor)
        }
      })
    }

    return result
    // while something is in the queue
    // remove first vertex in queue (shift) and push it to visited array
    // mark it as visited
    // loop over each vertex in adjacency list of that vertex
    // if neighbor is NOT visited, mark it as visited and store it in the queue

    // return visited array
  }
}

const g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')
g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

//      A
//    /   \
//   B     C
//   |     |
//   D --- E
//    \   /
//      F

console.log(g.bfs('A'))
