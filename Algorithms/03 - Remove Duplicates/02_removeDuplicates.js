//#region => remove duplicates using nested loop

function removeDuplicates(arr) {
  let sortedArr = arr.sort(function(a, b) {
                    return a - b;
                  });

  //console.log(sortedArr);

  uniqueArr.push(arr[0]);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i+1]) {
      uniqueArr.push(arr[i+1]);
    }
  }
}

//#endregion


let uniqueArr = [];
let tempArr = [2, 3, 5, -4, 11, 6, 19, 8, 13, 11, 21, 3, 24, 2, 9];

removeDuplicates(tempArr);
console.log(uniqueArr);
