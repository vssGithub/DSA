//#region => find duplicate using hashmap

function duplicateNumber(arr) {
  let hashmap = new Map();
  let duplicate = null;

  for (let i = 0; i < arr.length; i++) {
    if (!hashmap.has(arr[i])) {
      hashmap.set(arr[i], false);
    }
    else {
      hashmap.set(arr[i], true);
      //console.log(hashmap);
      duplicate = arr[i];
    }
  }

  return duplicate;
}

//#endregion


let tempArr = [2, 3, 5, -4, 21, 11, 6, 19, 8, 13, 21, 24, 9];

let duplicateNum = duplicateNumber(tempArr);
console.log(`The duplicate number "${duplicateNum}"`);
