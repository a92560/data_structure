import { LinkedList } from '../linked_list';
function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

function Node(element) {
  this.prev = null;
  this.data = element;
  this.next = null;
}

// DoublyLinkedList.prototype = Object.create

DoublyLinkedList.prototype.append = function(element) {
  const node = new Node(element);
  if (this.length === 0) {
    this.head = node;
    this.tail = node;
  } else {
    // 连结尾节点
    node.prev = this.tail;
    // 尾节点下一个指向新添加的节点
    this.tail.next = node;
    // 新节点成为尾结点
    this.tail = node;
  }
  this.length += 1;
}

DoublyLinkedList.prototype.insert = function(position, data) {
  if (position < 0 || position > this.length) {
    return false;
  }
  const node = new Node(data);
  if (this.length === 0) {
    this.head = node;
    this.tail = node;
  } else {
    if (position === 0) {
      // 原头节点的prev指向node
      this.head.prev = node;
      // 当前node.next 指向原头节点
      node.next = this.head;
      // 当前node 成为新头节点
      this.head = node;
      this.length += 1;
      return true;
    }
    if (position === this.length) {
      // 原尾节点 .next 指向 node
      this.tail.next = node;
      // 当前 node.next 指向原尾节点
      node.prev = this.tail;
      // 当前node 成为新尾节点
      this.tail = node;
      this.length += 1;
      return true;
    }
    let count = 0;
    let { head: current } = this;
    while (count < position) {
      current = current.next;
    }
    // 新节点 .prev 指向当前节点.prev
    node.prev = current.prev
    // 新节点 .next 指向当前节点
    node.next = current;
    // 当前节点的上个节点 .next 指向当前节点
    curret.prev.next = node;
    // 当前节点的prev指向新节点
    current.prev = node;
  }
  this.length += 1;
}

DoublyLinkedList.prototype.toString = function() {
  return this.forwardString();
}

DoublyLinkedList.prototype.forwardString = function() {
  let ret = '';
  let { head: current } = this;
  if (!current) {
    return ret;
  }
  while (current) {
    ret += current.data + ' ';
    current = current.next;
  }
  return ret;
}

DoublyLinkedList.prototype.backwardString = function() {
  let ret = '';
  let { tail: current } = this;
  if (!current) {
    return ret;
  }
  while (current) {
    ret += current.data + ' ';
    current = current.prev;
  }
  return ret;
}

DoublyLinkedList.prototype.get = function(position) {
  if (position < 0 || position >= this.length) return;
  let { head: current } = this;
  let count = 0;
  while (count < position) {
    current = current.next;
    count ++;
  }
  return current.data;
}

DoublyLinkedList.prototype.indexOf = function(element) {
  let count = 0;
  let { head: current } = this;
  while (current) {
    if (current.data === element) {
      return count;
    }
    current = current.next;
    count ++;
  }
  return -1;
}

DoublyLinkedList.prototype.update = function(position, element) {
  if (position < 0 || position >= this.length) return false;
  let count = 0;
  let { head: current } = this;
  while (count++ < position) {
    current = current.next;
  }
  current.data = element;
  return true;
}

DoublyLinkedList.prototype.removeAt = function(position) {
  if (position < 0 || position >= this.length) return false;
  let { head: current } = this;
  if (this.length === 1) {
    this.head = null;
    this.tail = null;
    return true
  } else if (this.length > 1) {
    if (position === 0) {
      this.head.next.prev = null;
      this.head = this.head.next;
      this.length -= 1;
      return true;
    }
    if (position === this.length - 1) {
      // 返回数据用的
      current = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.length -= 1;
      return true;
    }
    let count = 0;
    while (count++ < position) {
      current = current.next;
    }
    current.prev.next = current.next;
    current.next.prev = current.prev;
    return true;
  }
  this.length -= 1;
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append('abc');
doublyLinkedList.append('cba');
doublyLinkedList.append('npc');
console.log(doublyLinkedList.toString());
doublyLinkedList.insert(3, 'girl');
doublyLinkedList.insert(0, 'boy');
console.log(doublyLinkedList.toString());
// doublyLinkedList.removeAt(0);
doublyLinkedList.removeAt(4);
// doublyLinkedList.update(0, 'boy_1');
// doublyLinkedList.update(1, 'girl_1');
console.log(doublyLinkedList.toString());
// console.log(doublyLinkedList.get(0));
// console.log(doublyLinkedList.get(3));
// console.log(doublyLinkedList.get(4));
// console.log(doublyLinkedList.indexOf('boy'));
// console.log(doublyLinkedList.indexOf('npc'));
// console.log(doublyLinkedList.backwardString());
console.log(doublyLinkedList);



