//#region => two number sum using hashmap

function sum02(arr, target) {
  let hashmap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (hashmap.has(target - arr[i])) {
      return [target - arr[i], arr[i]];
    }
    else {
      hashmap.set(arr[i], true);
    }
  }

  return [];
}

//#endregion



let tempArr = [2, 3, 5, -4, 11, 6, 19, 8, 13, 21, 24, 9];
let target = 34;

let s02 = sum02(tempArr, target);
console.log(s02);
