function LinkedList() {
  // 头结点
  this.head = null;
  // 链表长度
  this.length = 0;
  function Node(data) {
    this.data = data;
    this.next = null;
  }

  /**
   * @param {any} element - 需添加元素
   * @return {type} argName - description
   * @description: 向链表尾部添加一个新的项
   * @author: Darren
   * @date: 2020/10/9
   */
  LinkedList.prototype.append = function(element) {
    const node = new Node(element);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length += 1;
  }

  /**
   * @param {int} position - 插入的位置
   * @param {any} element - 插入元素
   * @return {booLean} inserted - 是否插入成功
   * @description: 向链表的特定位置插入一个新的项
   * @author: Darren
   * @date: 2020/10/9
   */
  LinkedList.prototype.insert = function(position, element) {
    const node = new Node(element);
    if (position < 0 || position > this.length) {
      return false;
    }
    let count = 0;
    let prev = null;
    let current = this.head;
    if (position === 0) {
      node.next = current;
      this.head = node;
      this.length += 1;
      return true;
    }
    while (count < position) {
      prev = current;
      current = current.next;
      count += 1;
    }
    prev.next = node;
    node.next = current;
    this.length += 1;
    return true;
  }

  /**
   * @param {int} position - 元素位置
   * @return {any} item - 对应元素
   * @description: 获取对应位置的元素
   * @author: Darren
   * @date: 2020/10/10
   */
  LinkedList.prototype.get = function(position) {
    if (position < 0 || position > this.length) {
      return;
    }
    let count = 0;
    let { head } = this;
    while (count < position) {
      head = head.next;
      count += 1;
    }
    return head ? head.data : undefined;
  }

  /**
   * @param {any} element - 元素
   * @return {int} index - 元素索引
   * @description: 返回元素在链表中的索引
   * @author: Darren
   * @date: 2020/10/10
   */
  LinkedList.prototype.indexOf = function(element) {
    let { head: current } = this;
    let index = -1;
    if (!current) return index;
    index = 0;
    while(current) {
      if (current.data === element) {
        return index;
      }
      current = current.next;
      index += 1;
    }
    return -1;
  }

  /**
   * @param {int} position - 元素位置
   * @param {any} element - 新元素
   * @return {boolean} inserted - 是否修改成功
   * @description: 修改链表某个位置的元素
   * @author: Darren
   * @date: 2020/10/10
   */
  LinkedList.prototype.update = function(position, element) {
    if (position < 0 || position >= this.length) {
      return false;
    }
    let { head } = this;
    if (!head) {
      return false
    }
    let count = 0;
    while (count < position) {
      head = head.next;
      count += 1;
    }
    head.data = element;
    return true;
  }

  /**
   * @param {int} position - 元素位置
   * @return {boolean} inserted - 是否删除成功
   * @description: 从链表的特定位置删除一项
   * @author: Darren
   * @date: 2020/10/10
   */
  LinkedList.prototype.removeAt = function(position) {
    if (position < 0 || position >= this.length) {
      return false;
    }
    let count = 0;
    let prev = null;
    let { head: current } = this;
    while (count < position) {
      prev = current;
      current = current.next;
      count += 1;
    }
    if (!prev) {
      // 删除头节点
      current = current.next;
    } else {
      prev.next = current.next;
    }
    this.length -= 1;
  }

  /**
   * @param {any} element - 链表元素
   * @return {boolean} isRemoved - 是否删除成功
   * @description: 从链表中移除一项
   * @author: Darren
   * @date: 2020/10/10
   */
   LinkedList.prototype.remove = function(element) {
     const position = this.indexOf(element);
     return this.removeAt(position);
     // let { head } = this;
     // let isRemoved = false;
     // if (!head) return isRemoved;
     // let prev = null;
     // while (head.data !== element) {
     //   prev = head;
     //   head = head.next;
     // }
     // prev.next = head.next;
     // return true;
   }

  /**
   * @return {boolean} isEmpty - 链表是否为空
   * @description: 如果链表中不包含任何元素，返回true，否则返回false
   * @author: Darren
   * @date: 2020/10/9
   */
  LinkedList.prototype.isEmpty = function() {
    return !this.length;
  }

  /**
   * @return {int} size - 链表长度
   * @description: 返回链表中的length属性
   * @author: Darren
   * @date: 2020/10/9
   */
  LinkedList.prototype.size = function() {
    return this.length;
  }

  /**
   * @return {type} items.toString() - 队列结构内容
   * @description: 将队列的内容以字符串的形式返回
   * @author: Darren
   * @date: 2020/10/9
   */

  LinkedList.prototype.toString = function() {
    let { head: current } = this;
    let ret = '';
    if (!current) {
      return ret;
    }
    while (current) {
      ret += current.data + ' ';
      current = current.next;
    }
    return ret;
  }
}

const linkedList = new LinkedList();
linkedList.append('abc');
linkedList.append('cba');
console.log(linkedList.toString());
console.log(linkedList);
linkedList.insert(2, 'npc');
linkedList.insert(1, 'girl');
// linkedList.insert(4, 'boy');
// linkedList.update(4, 'body');
console.log(linkedList.toString());
// linkedList.removeAt(3);
// // linkedList.removeAt(0);
linkedList.remove('cba');
linkedList.remove('girl');
console.log(linkedList.toString());
console.log(linkedList.isEmpty());
console.log(linkedList.size());
// console.log(linkedList.get(1));
// console.log(linkedList.get(-1));
// console.log(linkedList.get(4));
// console.log(linkedList.indexOf('boy'));
// console.log(linkedList.indexOf('body'));
