//#region => two number sum using nested loop

function sum01(arr, target) {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i+1; j <= arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [arr[i], arr[j]];
      }
    }
  }
}

//#endregion

// [2, 3, 5, -4, 11, 6, 19, 8, 13, 21, 24, 9]
// 34

let tempArr = [2, 3, 5, -4, 11, 6, 19, 8, 13, 21, 24, 9];
let target = 34;

let s01 = sum01(tempArr, target);
console.log(s01);
