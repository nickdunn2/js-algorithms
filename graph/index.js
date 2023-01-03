class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) {
      this.adjacencyList[name] = []
    }
  }
}

const g = new Graph()
g.addVertex('Tokyo')
console.log(g.adjacencyList)
