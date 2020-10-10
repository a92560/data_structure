/*
* 非空左子树的所有键值小于其根节点的键值
* 非空右子树的所有键值大于其根节点的键值
* 左右子树本身也是二叉搜索树
* */
function BinarySearchTree() {
  this.root = null;
}

function Node(key) {
  this.key = key;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(key) {
  const node = new Node(key);
  if (!this.root) {
    this.root = node
  } else {
    this.insertNode(this.root, node);
  }
}

BinarySearchTree.prototype.insertNode = function(node, newNode) {
  if (newNode.key < node.key) {
    if (node.left == null) {
      node.left = newNode;
    } else {
      this.insertNode(node.left, newNode);
    }
  } else {
    if (node.right == null) {
      node.right = newNode;
    } else {
      this.insertNode(node.right, newNode);
    }
  }
}

BinarySearchTree.prototype.preOrederTraversal = function (handler) {
  this.preOrederTraversalNode(this.root, handler);
}

BinarySearchTree.prototype.midOrederTraversal = function (handler) {
  this.midOrederTraversalNode(this.root, handler);
}



BinarySearchTree.prototype.preOrederTraversalNode = function (node, handler) {
  if (node) {
    handler(node.key);
    this.preOrederTraversalNode(node.left, handler);
    this.preOrederTraversalNode(node.right, handler);
  }
}

BinarySearchTree.prototype.midOrederTraversalNode = function (node, handler) {
  if (node) {
    this.midOrederTraversalNode(node.left, handler);
    handler(node.key);
    this.midOrederTraversalNode(node.right, handler);
  }
}
// 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25





const bst = new BinarySearchTree();
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);
console.log(bst);
let ret = '';
bst.preOrederTraversal((key) => {
  ret += key + ' ';
})
console.log(ret);
