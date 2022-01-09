class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  //#region => constructor()

  constructor(value) {
    const newNode = new Node(value);

    this.top = newNode;
    this.length = 1;
  }

  //#endregion

  printList() {
    let arr = [];
    let currentNode = this.top;

    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }

  //#region => push()

  push(value) {
    const newNode = new Node(value);

    if (this.length == 0) {
      this.top = newNode;
    }
    else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;

    return this;
  }

  //#endregion

  //#region => pop()

  pop() {
    if (this.length == 0) {
      return undefined;
    }
    else {
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      this.length--;

      return temp;
    }
  }

  //#endregion

}

let myStack = new Stack(10);
console.log(myStack);
let myStackValues = myStack.printList();
console.log(`After creating the stack, the values are ${myStackValues}`);

myStack.push(23);
myStack.push(3);
myStack.push(7);

myStackValues = myStack.printList();
console.log(`After pushing to the stack, the values are ${myStackValues}`);

console.log('Popped - ', myStack.pop());
//myStack.pop();

myStackValues = myStack.printList();
console.log(`After popping from the stack, the values are ${myStackValues}`);