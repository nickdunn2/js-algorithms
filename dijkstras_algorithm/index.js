class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    this.values.push({ val, priority })
    this.sort()
  }

  dequeue() {
    return this.values.shift()
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority)
  }
}

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
   * Find the shortest path between two vertices using Dijkstra's Algorithm.
   */
  getDijkstra(start, finish) {
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}
    const shortestPath = []
    let smallest

    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }

      previous[vertex] = null
    }

    // as long as there is something to visit...
    while (nodes.values.length) {
      smallest = nodes.dequeue().val

      if (smallest === finish) {
        // WE ARE DONE! Build up shortestPath!
        while (previous[smallest]) {
          shortestPath.push(smallest)
          smallest = previous[smallest]
        }
        break
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          const nextNode = this.adjacencyList[smallest][neighbor]

          // calculate new distance to neighboring node
          const candidate = distances[smallest] + nextNode.weight
          const nextNeighbor = nextNode.node

          // IF the new distance is smaller than what we have stored,
          // UPDATE both the distances and previous dictionaries.
          if (candidate < distances[nextNeighbor]) {
            // update new smallest distance to neighbor
            distances[nextNeighbor] = candidate
            // update previous (how we got to neighbor)
            previous[nextNeighbor] = smallest
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate)
          }
        }
      }
    }

    return shortestPath.concat(smallest).reverse()
  }
}

const g = new WeightedGraph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B', 4)
g.addEdge('A', 'C', 2)
g.addEdge('B', 'E', 3)
g.addEdge('C', 'D', 2)
g.addEdge('C', 'F', 4)
g.addEdge('D', 'E', 3)
g.addEdge('D', 'F', 1)
g.addEdge('E', 'F', 1)

console.log(g.getDijkstra('A', 'E'))
