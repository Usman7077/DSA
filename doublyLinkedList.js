class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var pop = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      var newTail = this.tail.prev;
      newTail.next = null;
      this.tail = newTail;
      pop.prev = null;
    }
    this.length--;
    return pop;
  }
  shift() {
    var shiftNode = this.head;
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftNode.next;
      this.head.prev = null;
      shiftNode.next = null;
    }
    this.length--;
    return shiftNode;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(i) {
    if (i < 0 || i >= this.length) return null;
    if (i <= this.length / 2) {
      var currNode = this.head;
      var count = 0;
      while (currNode) {
        if (i === count) return currNode;
        currNode = currNode.next;
        count++;
      }
    } else {
      var currNode = this.tail;
      var count = this.length - 1;
      while (currNode) {
        if (i === count) return currNode;
        currNode = currNode.prev;
        count--;
      }
    }
  }
  set(i, val) {
    var getNode = this.get(i);
    getNode.val = val;

    if (!getNode) return false;
    return true;
  }
  insert(i, val) {
    if (i < 0 || i > this.length) return false;
    if (i === 0) {
      return this.unshift(val);
    }
    if (i === this.length) {
      return this.push(val);
    } else {
      var prevNode = this.get(i - 1);
      var nextNode = prevNode.next;
      var insertNode = new Node(val);

      prevNode.next = insertNode;
      nextNode.prev = insertNode;
      insertNode.next = nextNode;
      insertNode.prev = prevNode;
      this.length++;
      return insertNode;
    }
  }
}

var myLinkedList = new doublyLinkedList();
myLinkedList.push(11);
myLinkedList.push(22);
myLinkedList.push(33);
myLinkedList.push(44);
myLinkedList.push(55);
myLinkedList.push(66);
myLinkedList.push(77);
myLinkedList.push(88);
myLinkedList.push(99);

console.log(myLinkedList);
