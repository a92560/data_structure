import { Queue } from '../my_queue';
function PriorityQueue() {
  this.items = [];
}
function QueueElement(element, priority) {
  this.priority = priority;
  this.element = element;
}


PriorityQueue.prototype = Object.create(Queue.prototype);
PriorityQueue.prototype.enqueue = function(element, priority) {
  const queueElement = new QueueElement(element, priority);
  if (!queueElement.priority) {
    this.items.unshift(queueElement);
  } else {
    let inserted = false;
    this.items.forEach((it, i) => {
      if (it.priority > queueElement.priority) {
        this.items.splice(i, 0, queueElement);
        inserted = true;
      }
    })
    if (!inserted) {
      this.items.push(queueElement);
    }
  }
}

PriorityQueue.prototype.toString = function(element, priority) {
  let ret = '';
  this.items.forEach(it => {
    ret += `${it.element}-${it.priority} `;
  })
  return ret;
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('abc', 300)
priorityQueue.enqueue('cba', 200)
priorityQueue.enqueue('npc', 400)
console.log(priorityQueue.toString());
