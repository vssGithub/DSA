class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //#region => insert()
  //

  insert(value) {
    const newNode = new Node(value);

    // if there is currently no root, then the new node gets assigned as root
    if (this.root == null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          // branching left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }

          currentNode = currentNode.left;
        } else {
          // branching right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }

          currentNode = currentNode.right;
        }
      }
    }
  }

  //#endregion

  //#region => lookup()
  //

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        // we found the value
        return currentNode;
      } else if (value < currentNode.value) {
        // branching left
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        // branching right
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  //#endregion

  //#region => breadthFirstSearch()
  //

  bfs() {
    let currentNode = this.root;
    let list = [];
    let queue = [];

    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return list;
  }

  //#endregion

  //#region => depthFirstSearchInOrder()
  //

  dfsInOrder() {
    return this.traverseInOrder(this.root, []);
  }

  traverseInOrder(node, list) {
    if (node.left) {
      this.traverseInOrder(node.left, list);
    }

    list.push(node.value);

    if (node.right) {
      this.traverseInOrder(node.right, list);
    }

    return list;
  }

  //#endregion

  //#region => depthFirstSearchPreOrder()
  //

  dfsPreOrder() {
    return this.traversePreOrder(this.root, []);
  }

  traversePreOrder(node, list) {
    list.push(node.value);

    if (node.left) {
      this.traversePreOrder(node.left, list);
    }

    if (node.right) {
      this.traversePreOrder(node.right, list);
    }

    return list;
  }
  //#endregion

  //#region => depthFirstSearchPostOrder()
  // 

  dfsPostOrder() {
    return this.traversePostOrder(this.root, []);
  }

  traversePostOrder(node, list) {
    if (node.left) {
      this.traversePostOrder(node.left, list);
    }

    if (node.right) {
      this.traversePostOrder(node.right, list);
    }

    list.push(node.value);

    return list;
  }

  //#endregion

  //#region => findClosestValue()
  // 

  findClosestValue(target, closest) {
    let currentNode = this.root;

    while (currentNode) {
      if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
        closest = currentNode.value;
      } else if (target < currentNode.value) {
        currentNode = currentNode.left;
      } else if (target > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        break;
      }
    }

    return closest;
  }

  //#endregion

  //#region => branchSums()
  // 

  branchSums() {
    let sums = [];
    let currentNode = this.root;
    this.calculateBranchSums(currentNode, 0, sums);
    return sums;
  }

  calculateBranchSums(currentNode, runningSum, sums) {
    if (!currentNode) {
      return;
    }

    let newRunningSum = runningSum + currentNode.value;

    if (!currentNode.left && !currentNode.right) {
      sums.push(newRunningSum);
      return;
    }

    this.calculateBranchSums(currentNode.left, newRunningSum, sums);
    this.calculateBranchSums(currentNode.right, newRunningSum, sums);
  }

  //#endregion

  //#region => sumNodeDepths()
  // 

  sumNodeDepths() {
    let sumOfDepths = 0;
    let stack = [{ node: this.root, depth: 0 }];

    while (stack.length > 0) {
      let nodeInfo = stack.pop();
      let node = nodeInfo["node"];
      let depth = nodeInfo["depth"];

      if (!node) {
        continue;
      }

      sumOfDepths += depth;
      stack.push({ node: node.left, depth: depth + 1 });
      stack.push({ node: node.right, depth: depth + 1 });
    }

    return sumOfDepths;
  }

  //#endregion


}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(9));
console.log(`Breadth first search - ${tree.bfs()}`);
console.log(`Depth first search (InOrder) - ${tree.dfsInOrder()}`);
console.log(`Depth first search (PreOrder) - ${tree.dfsPreOrder()}`);
console.log(`Depth first search (PostOrder) - ${tree.dfsPostOrder()}`);

//let test = tree.findClosestValue(17, 200);
//console.log(test);
console.log(
  `The closest value to 17 in the BST is ${tree.findClosestValue(17, 5000)}`
);

//let bSums = tree.branchSums();
//console.log(bSums);
console.log(`The branch sums are ${tree.branchSums()}`);

//let depths = tree.sumNodeDepths();
//console.log(depths);
console.log(`The sum of all nodes is ${tree.sumNodeDepths()}`);
