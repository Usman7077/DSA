class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(v) {
    var newNode = new node(v);
    this.length += 1;
    if (this.length === 1) {
      this.head = newNode;
      this.tail = newNode;
    }
    if (this.length > 1) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  //   pop() {
  //     this.tail = this.prevTail;
  //     this.tail.next = null;
  // }
  pop() {
    if (this.head.next !== null) {
      var curEl = this.head;
      var nextEl = curEl.next;

      while (nextEl.next !== null) {
        curEl = nextEl;
        nextEl = nextEl.next;
      }
      curEl.next = null;
      this.tail = curEl;
      this.length -= 1;
    }
  }
  shift() {
    if (!this.head) return undefined;
    var currHead = this.head;
    var newHead = currHead.next;
    this.head = newHead;
    currHead = null;
    this.length -= 1;
    return newHead;
  }
  unshift(val) {
    var currHead = this.head;
    var newHead = new node(val);
    newHead.next = currHead;
    this.head = newHead;
    this.head = newHead;
    this.length++;
  }
  get(i) {
    if (this.length - 1 < i || i < 0) return "Yo";
    var currNode = this.head;
    var count = 0;
    while (i !== count) {
      currNode = currNode.next;
      count++;
    }
    return currNode;
  }
  set(i, val) {
    var changeNode = this.get(i);
    changeNode.val = val;
    return changeNode;
  }
  insert(i, val) {
    if (this.length < i || i < 0) return false;
    if (this.length === i) return this.push(val);
    if (i === 0) return this.unshift(val);

    var nextNode = this.get(i);
    var newNode = new node(val);
    var prevNode = this.get(i - 1);

    newNode.next = nextNode;
    prevNode.next = newNode;
    this.length++;
    return true;
  }
  remove(i) {
    if (this.length <= i || i < 0) return undefined;
    if (i === 0) return this.shift();
    if (i === this.length - 1) return this.pop();
    var prevNode = this.get(i - 1);
    var removeNode = prevNode.next;
    var nextNode = removeNode.next;
    prevNode.next = nextNode;
    this.length--;
    return removeNode;
  }
  reverse() {
    var prevNode = this.head;
    var currNode = prevNode.next;
    var nextNode = currNode.next;
    this.tail = this.head;
    this.tail.next = null;
    console.log(this.tail, this.head, currNode, nextNode);

    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }

    this.head = prevNode;

    // var swapHead = this.head;
    // this.head = this.tail;
    // this.tail = swapHead;

    // var prev = null;
    // var curr = this.head;

    // console.log("prevNode", prevNode);
    // console.log("currNode", currNode);
    // console.log("nextNode", nextNode);
    // console.log("head", this.head);
    console.log("this", this);
  }
}

var myLinkedList = new singlyLinkedList();
myLinkedList.push(11);
myLinkedList.push(22);
myLinkedList.push(33);
myLinkedList.push(44);
myLinkedList.push(55);
myLinkedList.push(66);
myLinkedList.push(77);
myLinkedList.push(88);
myLinkedList.push(99);
// e.pop();
// e.traverse();
// e.unshift(99);
// console.log(myLinkedList);
// console.log(myLinkedList.get(3));
// console.log(myLinkedList.set(2, "hello"));
// console.log(myLinkedList.insert(1, "inserted"));
console.log(myLinkedList);
