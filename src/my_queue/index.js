export function Queue() {
  this.items = [];

  /**
   * @param {type} element - 添加项
   * @return {type} items.length - items长度
   * @description: 向队列尾部添加一个(或多个)的项
   * @author: Darren
   * @date: 2020/10/9
   */
  Queue.prototype.enqueue = function(element) {
    this.items.push(element);
    return this.items.length;
  }

  /**
   * @return {type} items[0] - 队列首项
   * @description: 移出队列的第一项，并返回被移除的元素
   * @author: Darren
   * @date: 2020/10/9
   */
  Queue.prototype.dequeue = function() {
    return this.items.shift();
  }

  /**
   * @return {type} items[0] - 队列首项
   * @description: 返回队列中第一个元素，队列不做任何变动
   * @author: Darren
   * @date: 2020/10/9
   */
  Queue.prototype.front = function() {
    return this.items[0];
  }

  /**
   * @return {boolean} isEmpty - 队列是否为空
   * @description: 如果队列中不包含任何元素，返回true，否则返回false
   * @author: Darren
   * @date: 2020/10/9
   */
  Queue.prototype.isEmpty = function() {
    return !this.items.length;
  }

  /**
   * @return {int} size - 队列长度
   * @description: 返回队列包含的元素个数，与数组的length属性类似
   * @author: Darren
   * @date: 2020/10/9
   */
  Queue.prototype.size = function() {
    return this.items.length;
  }

  /**
   * @return {type} items.toString() - 队列结构内容
   * @description: 将队列的内容以字符串的形式返回
   * @author: Darren
   * @date: 2020/10/9
   */

  Queue.prototype.toString = function() {
    return this.items.join(' ');
  }
}
const queue = new Queue();
// queue.enqueue('abc');
// queue.enqueue('cba');
// queue.enqueue('npc');
// queue.enqueue('nba');
// console.log(queue.toString());
// console.log(queue.dequeue());
// console.log(queue.toString());
// console.log(queue.front());
// console.log(queue.toString());
// console.log(queue.size());
// console.log(queue.isEmpty());

// 击鼓传花
function passGame(nameList, number) {
  const queue = new Queue();
  nameList.forEach(it => {
    queue.enqueue(it);
  })
  while(queue.size() > 1) {
    // 不是number数字的，重新入队
    for (let i = 0; i < number - 1; i ++) {
      queue.enqueue(queue.dequeue());
    }
    // 对应number数字的，淘汰
    queue.dequeue();
  }
  // debugger;
  return nameList.indexOf(queue.front()) + 1;
}
// console.log(passGame(['小红', '小花', '小丽', '小强'], 3));

