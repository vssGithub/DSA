//#region => two number sum using hashmap

function removeDuplicates(arr, target) {
  let hashmap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!hashmap.has(arr[i])) {
      hashmap.set(arr[i], true);
    }
  }

  return hashmap;
}

//#endregion


let tempArr = [2, 3, 5, -4, 11, 6, 19, 8, 13, 11, 21, 3, 24, 2, 9];

let test = removeDuplicates(tempArr);
console.log(test);
