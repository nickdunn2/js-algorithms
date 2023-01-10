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
g.addEdge('Tokyo', 'Dallas')
g.addEdge('Dallas', 'Aspen')
console.log(g.adjacencyList)
g.removeEdge('Tokyo', 'Dallas')
console.log(g.adjacencyList)
