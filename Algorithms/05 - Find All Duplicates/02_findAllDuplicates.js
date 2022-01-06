//#region => find all duplicates by sorting & iterating through 

function duplicateNumbers(arr) {
  let duplicates = [];

  let sortedArr = arr.sort(function(a, b) {
                    return a - b;
                  });

  //console.log(sortedArr);

  // iterate to arr.length-1 as we're looking ahead to arr[i+1] within the function
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i+1]) {
      duplicates.push(arr[i]);
    }
  }

  return duplicates;
}

//#endregion


let tempArr = [2, 3, 5, -4, 21, 11, 6, 19, 8, 13, 8, 2, 21, 24, 9, 3];

let duplicateNums = duplicateNumbers(tempArr);
console.log(`The duplicates in "${tempArr}" is "${duplicateNums}"`);
