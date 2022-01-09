class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  //#region => constructor()

  constructor(value) {
    const newNode = new Node(value);

    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  //#endregion

  printList() {
    let arr = [];
    let currentNode = this.first;

    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }

  //#region => enqueue()
  // Enqueueing to the end of the linked list is O(1) operation

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length == 0) {
      this.first = newNode;
      this.last = newNode;
    }
    else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;

    return this;
  }

  //#endregion

  //#region => dequeue()
  // Dequeueing from the beginning of the linked list is O(1) operation

  dequeue() {
    if (this.length == 0) {
      return undefined;
    }

    let temp = this.first;

    if (this.length == 1) {
      this.first = null;
      this.last = null;
    }
    else {
      this.first = this.first.next;
      temp.next = null;
    }

    this.length--;

    return temp;
  }

  //#endregion

}

let myQueue = new Queue(10);
console.log(myQueue);
let myQueueValues = myQueue.printList();
console.log(`After creating the queue, the values are ${myQueueValues}`);

myQueue.enqueue(5);
myQueue.enqueue(17);
myQueue.enqueue(32);

console.log(myQueue);
myQueueValues = myQueue.printList();
console.log(`After adding to the queue, the values are ${myQueueValues}`);

console.log('Dequeued - ', myQueue.dequeue());
//myQueue.dequeue();

myQueueValues = myQueue.printList();
console.log(`After dequeueing from the queue, the values are ${myQueueValues}`);