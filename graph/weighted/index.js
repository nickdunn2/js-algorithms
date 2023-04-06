class WeightedGraph {
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
   * @param weight
   */
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({node: v2, weight })
    this.adjacencyList[v2].push({node: v1, weight })
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

const g = new WeightedGraph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addEdge('A', 'B', 9)
g.addEdge('A', 'C', 5)
g.addEdge('B', 'C', 7)

//      A
//  9 /   \ 5
//   B --- C
//      7

console.log(g.adjacencyList)
