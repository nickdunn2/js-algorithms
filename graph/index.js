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
}

const g = new Graph()
g.addVertex('Tokyo')
g.addVertex('Dallas')
g.addVertex('Aspen')
g.addVertex('HongKong')
g.addVertex('LosAngeles')
g.addEdge('Tokyo', 'Dallas')
g.addEdge('Tokyo', 'HongKong')
g.addEdge('Dallas', 'Aspen')
g.addEdge('Dallas', 'HongKong')
g.addEdge('Dallas', 'LosAngeles')
g.addEdge('HongKong', 'LosAngeles')
console.log(g.adjacencyList)
g.removeVertex('HongKong')
console.log(g.adjacencyList)
