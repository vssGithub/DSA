//#region => find all duplicates using nested loop

function duplicateNumbers(str) {
  let duplicates = [];

  for (const x of Array(str.length).keys()) {
    for (const y of Array(x).keys()) {
      if (str[x] == str[y]) {
        duplicates.push(str[x]);
      }
    }
  }

  return duplicates;
}

//#endregion


let tempArr = [2, 3, 5, -4, 21, 11, 6, 19, 8, 13, 8, 2, 21, 24, 9, 3];

let duplicateNums = duplicateNumbers(tempArr);
console.log(`The duplicates in "${tempArr}" is "${duplicateNums}"`);
