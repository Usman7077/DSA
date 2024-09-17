class maxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    if (this.values.length === 1) return this.values;
    var childIndex = this.values.length - 1;
    var parentIndex = Math.floor((childIndex - 1) / 2);

    while (this.values[parentIndex] < this.values[childIndex]) {
      var swap = this.values[parentIndex];
      this.values[parentIndex] = this.values[childIndex];
      this.values[childIndex] = swap;

      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
    return this.values;
  }
  extractMax() {
    const maxVal = this.values[0];
    if (this.values.length === 1) {
      this.values = [];
      return maxVal;
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
          this.values[lefttChildIndx] >= this.values[rightChildIndx]
            ? lefttChildIndx
            : rightChildIndx;
      }

      if (this.values[largeIndx] > this.values[parentIndx]) {
        swap = this.values[largeIndx];
        this.values[largeIndx] = this.values[parentIndx];
        this.values[parentIndx] = swap;
      } else break;
    }
    return maxVal;
  }
}

var myMaxBinaryHeap = new maxBinaryHeap();
myMaxBinaryHeap.insert(41);
myMaxBinaryHeap.insert(39);
myMaxBinaryHeap.insert(33);
myMaxBinaryHeap.insert(18);
myMaxBinaryHeap.insert(27);
myMaxBinaryHeap.insert(12);
myMaxBinaryHeap.insert(55);
// myMaxBinaryHeap.insert(3);
// myMaxBinaryHeap.insert(56);
console.log(myMaxBinaryHeap);
