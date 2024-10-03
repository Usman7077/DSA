class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(key) {
    if (!this.adjacencyList[key]) this.adjacencyList[key] = [];
  }
  addEdge(key1, key2) {
    this.adjacencyList[key1].push(key2);
    this.adjacencyList[key2].push(key1);
  }
  removeEdge(key1, key2) {
    this.adjacencyList[key1] = this.adjacencyList[key1].filter(
      (val) => val !== key2
    );
    this.adjacencyList[key2] = this.adjacencyList[key2].filter(
      (val) => val !== key1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const v = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, v);
    }
    delete this.adjacencyList[vertex];

    // this.adjacencyList[vertex].forEach(
    //   (val) =>
    //     (this.adjacencyList[val] = this.adjacencyList[val].filter(
    //       (el) => el !== vertex
    //     ))
    // );
    // delete this.adjacencyList[vertex];
  }
  DFSrecursive(start) {
    const adjacencyList = this.adjacencyList;
    const endRes = [];
    const visited = {};
    let count = 0;

    (function helper(vertex) {
      visited[vertex] = true;
      endRes.push(vertex);
      adjacencyList[vertex].forEach((v) => {
        console.log(++count);
        if (!visited[v]) {
          return helper(v);
        }
      });
    })(start);

    return endRes;
  }

  DFSiterative(start) {
    let S = [start];
    const discovered = {};
    const result = [];
    discovered[start] = true;
    let vertex;

    while (S.length) {
      console.log(S);
      vertex = S.pop();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((v) => {
        if (!discovered[v]) {
          discovered[v] = true;
          S.push(v);
        }
      });
    }
    return result;
  }

  DFSiterative1(start) {
    const endRes = [start];
    const visited = {};
    visited[start] = true;

    let count = 0;
    console.log(this.adjacencyList[start][0]);
    let test = this.adjacencyList[start].length;
    while (count <= test) {
      let test2 = this.adjacencyList[start][count];
      if (!visited[test2]) {
        endRes.push(test2);
        visited[test2] = true;
        start = test2;
        count = 0;
        test = test2.length;
      } else count++;
    }
    console.log(endRes);
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
        if (!visited[v]) {
          queue.push(v);
          visited[v] = true;
        }
      });
    }
    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
