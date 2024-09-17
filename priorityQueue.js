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

var myMinBinaryHeap = new priorityQueue();
myMinBinaryHeap.enqueue("common cold", 5);
myMinBinaryHeap.enqueue("gunshot wound", 1);
myMinBinaryHeap.enqueue("high fever", 4);
myMinBinaryHeap.enqueue("broken arm", 2);
myMinBinaryHeap.enqueue("glass in foot", 3);
// myMaxBinaryHeap.enqueue(39, 39);
// myMaxBinaryHeap.enqueue(33, 33);
// myMaxBinaryHeap.enqueue(18, 18);
// myMaxBinaryHeap.enqueue(27, 27);
// myMaxBinaryHeap.enqueue(12, 12);
// myMaxBinaryHeap.enqueue(55, 55);
// myMaxBinaryHeap.enqueue(3);
// myMaxBinaryHeap.enqueue(56);
console.log(myMinBinaryHeap);
