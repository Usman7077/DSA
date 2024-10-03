class weightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  dijkstraAlg(vertex) {
    const checkNodes = this.BFS(vertex);
    const shortestPath = {};
    const through = {};
    checkNodes.forEach((n) => {
      shortestPath[n] = Infinity;
      through[n] = null;
    });

    const visited = {};
    let distanceThroughCurVer;
    shortestPath[vertex] = 0;
    let curvertex = vertex;

    while (curvertex) {
      // console.log("deq", curvertex);
      if (!visited[curvertex]) {
        const myMinBinaryHeap = new priorityQueue();
        // console.log(curvertex, shortestPath, through, myMinBinaryHeap);
        visited[curvertex] = true;

        this.adjacencyList[curvertex].forEach((v) => {
          // console.log(curvertex, v, shortestPath, through);
          if (!visited[v.node]) {
            distanceThroughCurVer = v.weight + shortestPath[curvertex];
            if (distanceThroughCurVer < shortestPath[v.node]) {
              shortestPath[v.node] = distanceThroughCurVer;
              through[v.node] = curvertex;
            }

            myMinBinaryHeap.enqueue(v.node, shortestPath[v.node]);
          }
          if (shortestPath[curvertex] + v.weight < shortestPath[v.node]) {
            shortestPath[v.node] = shortestPath[curvertex] + v.weight;
            through[v.node] = curvertex;
            console.log("6767");
          }
        });

        curvertex = myMinBinaryHeap.dequeue();

        console.log(curvertex, shortestPath, through, visited);
        if (visited[curvertex]) return;
      }
    }
    // console.log(shortestPath, through, curvertex);
    // console.log(visited);
  }

  BFS(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let curvertex;

    while (queue.length) {
      curvertex = queue.shift();
      result.push(curvertex);
      this.adjacencyList[curvertex].forEach((v) => {
        if (!visited[v.node]) {
          queue.push(v.node);
          visited[v.node] = true;
        }
      });
    }
    return result;
  }
}

const myWeightedGraph = new weightedGraph();
myWeightedGraph.addVertex("A");
myWeightedGraph.addVertex("B");
myWeightedGraph.addVertex("C");
myWeightedGraph.addVertex("D");
myWeightedGraph.addVertex("E");
myWeightedGraph.addVertex("F");

myWeightedGraph.addEdge("A", "B", 4);
myWeightedGraph.addEdge("A", "C", 2);
myWeightedGraph.addEdge("B", "E", 3);
myWeightedGraph.addEdge("C", "D", 2);
myWeightedGraph.addEdge("D", "E", 3);
myWeightedGraph.addEdge("D", "F", 1);
myWeightedGraph.addEdge("E", "F", 1);
myWeightedGraph.addEdge("C", "F", 4);

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class priorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);

    if (this.values.length === 1) return this.values;
    var childIndex = this.values.length - 1;
    var parentIndex = Math.floor((childIndex - 1) / 2);

    while (true) {
      if (
        this.values[parentIndex].priority > this.values[childIndex].priority
      ) {
        var swap = this.values[parentIndex];
        this.values[parentIndex] = this.values[childIndex];
        this.values[childIndex] = swap;
      } else break;

      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
      if (parentIndex < 0) break;
    }
    return this.values;
  }

  dequeue() {
    if (this.values.length === 0) return undefined;
    const min = this.values[0].val;
    if (this.values.length === 1) {
      this.values = [];
      return min;
    }
    var lastVal = this.values.pop();
    this.values[0] = lastVal;

    var largeIndx = 0;
    var swap, parentIndx, lefttChildIndx, rightChildIndx;

    while (true) {
      parentIndx = largeIndx;
      lefttChildIndx = parentIndx * 2 + 1;
      rightChildIndx = parentIndx * 2 + 2;

      if (!this.values[lefttChildIndx]) break;
      if (!this.values[rightChildIndx]) {
        largeIndx = lefttChildIndx;
      } else {
        var largeIndx =
          this.values[lefttChildIndx].priority <=
          this.values[rightChildIndx].priority
            ? lefttChildIndx
            : rightChildIndx;
      }

      if (this.values[largeIndx].priority < this.values[parentIndx].priority) {
        swap = this.values[largeIndx];
        this.values[largeIndx] = this.values[parentIndx];
        this.values[parentIndx] = swap;
      } else break;
    }
    return min;
  }
}
