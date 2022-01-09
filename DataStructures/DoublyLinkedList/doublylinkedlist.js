class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  //#region => append()

  append(value) {
    let newNode = new Node(value);
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  //#endregion

  //#region => prepend()

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }

  //#endregion

  printList() {
    let arr = [];
    let currentNode = this.head;

    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }

  //#region => insert()

  insert(index, value) {
    if (index > this.length) {
      return this.append(value);
    }

    let newNode = new Node(value);
    let leader = this.traverseToIndex(index - 1);
    let follower = leader.next;
    leader.next = newNode;
    newNode.previous = leader;
    newNode.next = follower;
    follower.previous = newNode;
    this.length++;

    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  //#endregion

  //#region => remove()

  remove(index) {
    let leader = this.traverseToIndex(index - 1);
    let valueToRemove = leader.next;
    leader.next = valueToRemove.next;
    this.length--;

    return this;
  }

  //#endregion
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList);

myLinkedList.insert(2, 99);
let myList = myLinkedList.printList();
console.log(`After inserting into the linked list, the values are ${myList}`);

myLinkedList.remove(3);
let myAmendedList = myLinkedList.printList();
console.log(
  `After removing from the linked list, the values are ${myAmendedList}`
);
