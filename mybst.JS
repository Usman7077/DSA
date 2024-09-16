class Node {
  constructor() {
    this.val = null;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    if (!this.root) {
      this.root = new Node();
      this.root.val = val;
      return this;
    }

    var currNode = this.root;

    while (currNode) {
      if (currNode.val < val && !currNode.right) {
        var newNode = new Node();
        newNode.val = val;
        currNode.right = newNode;
        return this;
      }
      if (currNode.val > val && !currNode.left) {
        var newNode = new Node();
        newNode.val = val;
        currNode.left = newNode;
        return this;
      }

      if (currNode.val < val && currNode.right) {
        currNode = currNode.right;
      }
      if (currNode.val > val && currNode.left) {
        currNode = currNode.left;
      }
    }
  }
  find(val) {
    var currNode = this.root;
    var found = false;
    while (currNode !== null && !found) {
      if (currNode.val === val) {
        found = true;
        return currNode;
      }
      if (currNode.val < val) {
        currNode = currNode.right;
      } else if (currNode.val > val) {
        currNode = currNode.left;
      }
    }
    return false;
  }
  bfs() {
    var qeue = [this.root];
    var bfsRes = [];
    while (qeue.length > 0) {
      var node = qeue.shift();
      bfsRes.push(node.val);
      if (node.left) qeue.push(node.left);
      if (node.right) qeue.push(node.right);
    }
    return bfsRes;
  }
  dfsPre() {
    var dfsRes = [];
    function helper(currNode) {
      dfsRes.push(currNode.val);
      if (currNode.left) helper(currNode.left);
      if (currNode.right) helper(currNode.right);
    }
    helper(this.root);
    return dfsRes;

    // dfsRes.push(this.root.val);
    // var rootNode = this.root;
    // function addNode(currNode) {
    //   dfsRes.push(currNode.val);
    //   currNode = currNode.left;
    //   if (!currNode.left && !currNode.right) {
    //     return;
    //   }
    //   return addNode(currNode);
    // }
    // addNode(rootNode);
    // return dfsRes;
  }
  dfsPost() {
    var dfsRes = [];
    function helper(currNode) {
      if (currNode.left) helper(currNode.left);
      if (currNode.right) helper(currNode.right);
      dfsRes.push(currNode.val);
    }
    helper(this.root);
    return dfsRes;
  }
  dfsIn() {
    var dfsRes = [];
    function helper(currNode) {
      if (currNode.left) helper(currNode.left);
      dfsRes.push(currNode.val);
      if (currNode.right) helper(currNode.right);
    }
    helper(this.root);
    return dfsRes;
  }
}

var myTree = new BST();
myTree.insert(10);
myTree.insert(13);
myTree.insert(16);
myTree.insert(12);
myTree.insert(5);
myTree.insert(2);
myTree.insert(7);
myTree.insert(3);
console.log(myTree);
