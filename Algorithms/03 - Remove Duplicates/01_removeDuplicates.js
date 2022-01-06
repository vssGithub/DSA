//#region => remove duplicates using nested loop

function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) == -1) {
      uniqueArr.push(arr[i]);
    }
  }
}

//#endregion


let uniqueArr = [];
let tempArr = [2, 3, 5, -4, 11, 6, 19, 8, 13, 11, 21, 3, 24, 2, 9];

removeDuplicates(tempArr);
console.log(uniqueArr);
