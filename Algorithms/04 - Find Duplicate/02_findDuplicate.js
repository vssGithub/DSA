//#region => find duplicate by sorting & iterating through 

function duplicateNumber(arr) {
  let duplicate = null;

  let sortedArr = arr.sort(function(a, b) {
                    return a - b;
                  });

  //console.log(sortedArr);

  // iterate to arr.length-1 as we're looking ahead to arr[i+1] within the function
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i+1]) {
      duplicate = arr[i];
    }
  }

  return duplicate;
}

//#endregion


let tempArr = [2, 3, 5, -4, 21, 11, 6, 19, 8, 13, 21, 24, 9];

let duplicateNum = duplicateNumber(tempArr);
console.log(`The duplicate number "${duplicateNum}"`);
