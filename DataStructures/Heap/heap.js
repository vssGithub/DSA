class Heap {
  constructor() {}

  insert(array, value) {
    this.currentIndex;
    let valueAtCurrentIndex;
    let parentIndex;

    // insert the new value into the array
    array.push(value);
    // get the index of the newly added value
    this.currentIndex = array.length - 1;

    // this is basically the value newly added
    valueAtCurrentIndex = array[this.currentIndex];
    // get the index of the parent of the newly added value
    parentIndex = this.getParentIndex();

    while (this.currentIndex > 0 && valueAtCurrentIndex > array[parentIndex]) {
      //console.log(`currentIndex ${currentIndex}`);
      //console.log(`parentIndex ${parentIndex}`);

      // swap value from parent down the heap
      array[this.currentIndex] = array[parentIndex];
      // bubble up the new value
      array[parentIndex] = valueAtCurrentIndex;

      // shift the currentIndex along with the new value bubbling up
      this.currentIndex = parentIndex;
      // reset the parentIndex
      parentIndex = this.getParentIndex();
    }

    return array;
  }

  getParentIndex() {
    return Math.floor((this.currentIndex - 1) / 2);
  }
}

let arr1 = [40, 35, 15, 30, 10, 12, 6, 5, 20];
let heap1 = new Heap();
let arr1Test = heap1.insert(arr1, 50);
console.log(`heap ${arr1Test}`);

let arr2 = [40];
let heap2 = new Heap();
let arr2Test = heap2.insert(arr2, 50);
console.log(`heap ${arr2Test}`);

let arr3 = [640];
let heap3 = new Heap();
let arr3Test = heap3.insert(arr3, 50);
console.log(`heap ${arr3Test}`);

let arr4 = [];
let heap4 = new Heap();
let arr4Test = heap4.insert(arr4, 50);
console.log(`heap ${arr4Test}`);
