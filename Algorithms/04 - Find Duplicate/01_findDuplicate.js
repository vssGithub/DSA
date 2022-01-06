//#region => find duplicate using nested loop

function duplicateNumber(arr, target) {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i+1; j <= arr.length; j++) {
      if (arr[i] == arr[j]) {
        return arr[i];
      }
    }
  }
}

//#endregion


let tempArr = [2, 3, 5, -4, 21, 11, 6, 19, 8, 13, 21, 24, 9];

let duplicateNum = duplicateNumber(tempArr);
console.log(`The duplicate number "${duplicateNum}"`);
