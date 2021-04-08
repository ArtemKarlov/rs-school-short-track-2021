const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.oldestIndex = 0;
    this.newestIndex = 0;
    this.queue = null;
  }

  get size() {
    return this.newestIndex - this.oldestIndex;
  }

  enqueue(element) {
    if (this.queue === null) {
      this.queue = new ListNode(element);
      this.newestIndex++;
    } else {
      let isEndOfQueue = false;
      let currentNode = this.queue;
      while (!isEndOfQueue) {
        if (!currentNode.next) {
          isEndOfQueue = true;
          currentNode.next = new ListNode(element);
          this.newestIndex++;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
  }

  dequeue() {
    let deletedElement;
    if (this.oldestIndex !== this.newestIndex) {
      deletedElement = this.queue.value;
      if (this.queue.next) {
        this.queue = this.queue.next;
      } else {
        this.queue = null;
      }
      this.oldestIndex++;
    }
    return deletedElement;
  }
}

module.exports = Queue;
