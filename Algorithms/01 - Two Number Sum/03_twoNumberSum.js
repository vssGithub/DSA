//#region => two number sum using two pointers
// this has O(N) performance

function sum03(arr, target) {
  arr.sort(function(a,b) {
    return a - b;
  });

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let currentSum = arr[left] + arr[right];

    if (currentSum == target) {
      return [arr[left], arr[right]];
    }
    else if (currentSum < target) {
      left += 1;
    }
    else if (currentSum > target) {
      right -= 1;
    }
  }

  return [];
}

//#endregion



let tempArr = [2, 3, 5, -4, 11, 6, 19, 8, 13, 21, 24, 9];
let target = 34;

let s03 = sum03(tempArr, target);
console.log(s03, "sums to", target);