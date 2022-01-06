//#region => find all duplicates using hashmap

function duplicateNumbers(arr) {
  let hashmap = new Map();
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (!hashmap.has(arr[i])) {
      hashmap.set(arr[i], false);
    }
    else {
      hashmap.set(arr[i], true);
      //console.log(hashmap);
      duplicates.push(arr[i]);
    }
  }

  return duplicates;
}

//#endregion


let tempArr = [2, 3, 5, -4, 21, 11, 6, 19, 8, 13, 8, 2, 21, 24, 9, 3];

let duplicateNums = duplicateNumbers(tempArr);
console.log(`The duplicates in "${tempArr}" is "${duplicateNums}"`);
