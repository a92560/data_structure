function Stack() {
  this.items = [];
}
/**
 * @param {type} element - 入栈元素
 * @return {type} item.length - 数组长度
 * @description: 添加一个新元素到栈顶位置
 * @author: Darren
 * @date: 2020/10/9
 */
Stack.prototype.push = function(element) {
  this.items.push(element);
  return this.items.length;
}

/**
 * @return {type} item - 出栈元素
 * @description: 移出栈顶的元素，并返回被移除的元素
 * @author: Darren
 * @date: 2020/10/9
 */
Stack.prototype.pop = function() {
  return this.items.pop();
}
/**
 * @return {type} item - 栈顶元素
 * @description: 返回栈顶的元素，不对栈做任何修改
 * @author: Darren
 * @date: 2020/10/9
 */

Stack.prototype.peek = function() {
  if (!this.items.length) {
    return;
  }
  return this.items[this.items.length - 1];
}

/**
 * @return {type} boolean - 栈是否为空
 * @description: 如果栈里没有任何元素就返回true，否则返回false
 * @author: Darren
 * @date: 2020/10/9
 */
Stack.prototype.isEmpty = function() {
  return !this.items.length;
}
/**
 * @return {type} itemLength - items长度
 * @description: 返回栈里的元素个数，和数组的length属性类似
 * @author: Darren
 * @date: 2020/10/9
 */

Stack.prototype.size = function() {
  return this.items.length;
}

/**
 * @return {type} items.toString() - 栈结构内容
 * @description: 将栈结构的内容以字符串的形式返回
 * @author: Darren
 * @date: 2020/10/9
 */

Stack.prototype.toString = function() {
  return this.items.join(' ');
}

const stack = new Stack();
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// console.log(stack.toString());
// stack.pop();
// stack.pop();
// console.log(stack.toString());
// console.log(stack.peek());
// console.log(stack.toString());
// console.log(stack.size());
// stack.pop();
// stack.pop();
// console.log(stack.isEmpty());

function decToBinary(number) {
  if (typeof number !== 'number') {
    return ''
  }
  while (number > 0) {
    stack.push(number % 2);
    number = Math.floor(number / 2);
  }
  let result = '';
  while(!stack.isEmpty()) {
    result += stack.pop();
  }
  return result;
}
// console.log(decToBinary(100));
