class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  //#region 

  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  //#endregion

  //#region => append()
  // Adding to the end of the linked list is O(1) operation

  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  //#endregion

  //#region => prepend()
  // Adding to the start of the linked list is O(1) operation

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
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
  // Inserting into the linked list is O(n) operation

  insert(index, value) {
    if (index > this.length) {
      return this.append(value);
    }

    let newNode = new Node(value);
    let leader = this.traverseToIndex(index - 1);
    let tempPointer = leader.next;
    leader.next = newNode;
    newNode.next = tempPointer;
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
  // Removing from the linked list is O(n) operation

  remove(index) {
    let leader = this.traverseToIndex(index - 1);
    let valueToRemove = leader.next;
    leader.next = valueToRemove.next;
    this.length--;

    return this;
  }

  //#endregion

  //#region => removeNthFromEnd()
  // Removing Nth from the linked list is O(n) operation

  removeNthFromEnd(head, n) {
    let dummyHead = head;
    let slowPointer = dummyHead;
    let fastPointer = dummyHead;

    // move the fast pointer ahead, to the correct position
    // this will create the "n" spacing between both pointers"
    for (let i = 0; i < n; i++) {
      fastPointer = fastPointer.next;      
    }

    // move both pointers until the fast pointer reaches the end
    while(fastPointer.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next;
    }

    slowPointer.next = slowPointer.next.next;
    this.length--;

    return dummyHead;
  }

  //#endregion

  //#region => pop()
  // Popping (removing the last item) from the linked list is O(n) operation

  pop() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    let pre = this.head

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  //#endregion

  //#region => shift()
  // Shifting (removing the first item) from the linked list is O(1) operation

  shift() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length == 0) {
      this.tail = null;
    }

    return temp;
  }

  //#endregion

  //#region => reverse()
  // Reversing the linked list is O(N) operation

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    return this;
  }

  //#endregion

  
}

let myLinkedList = new LinkedList(10);
console.log(myLinkedList);
let myList = myLinkedList.printList();
console.log(`After creating the linked list, the values are ${myList} \n`);

myLinkedList.append(5);
console.log(myLinkedList);
myList = myLinkedList.printList();
console.log(`After appending to the linked list, the values are ${myList} \n`);

myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList);
myList = myLinkedList.printList();
console.log(`After prepending to the linked list, the values are ${myList} \n`);

let insertIndex = 2;
myLinkedList.insert(insertIndex, 99);
myList = myLinkedList.printList();
console.log(`After inserting into index ${insertIndex} the linked list values are ${myList} \n`);

let removeIndex = 3;
myLinkedList.remove(removeIndex);
myList = myLinkedList.printList();
console.log(`After removing from index ${removeIndex} the linked list values are ${myList} \n`);

let removeFromEndIndex = 3;
let removeFromEnd = myLinkedList.removeNthFromEnd(myLinkedList.head, removeFromEndIndex);
//console.log(removeFromEnd);
console.log(myLinkedList);
myList = myLinkedList.printList();
console.log(`After removing index ${removeFromEndIndex} from end, the linked list values are ${myList} \n`);

let popped = myLinkedList.pop();
console.log(popped);
console.log(myLinkedList);
myList = myLinkedList.printList();
console.log(`After popping from the linkedlist, the linked list values are ${myList} \n`);

let shifted = myLinkedList.shift();
console.log(shifted);
console.log(myLinkedList);
myList = myLinkedList.printList();
console.log(`After shifting from the linkedlist, the linked list values are ${myList} \n`);

myLinkedList.append(5);
myLinkedList.append(76);
myLinkedList.append(43);
console.log(myLinkedList);
myList = myLinkedList.printList();
console.log(`After appending to the linked list, the values are ${myList} \n`);

let reversed = myLinkedList.reverse();
console.log(myLinkedList);
myList = myLinkedList.printList();
console.log(`After reversing the linkedlist, the linked list values are ${myList} \n`);