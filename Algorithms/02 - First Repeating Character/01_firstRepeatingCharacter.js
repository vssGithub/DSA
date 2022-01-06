//#region => first repeating character using nested loop

function repeatingCharacter(str) {
  for (const x of Array(str.length).keys()) {
    for (const y of Array(x).keys()) {
      if (str[x] == str[y]) {
        return str[x];
      }
    }
  }

  return null;
}

//#endregion


let tempString01 = "exquisite";

let repeatingCharacter01 = repeatingCharacter(tempString01);
console.log(`The first repeating character in "${tempString01}" is "${repeatingCharacter01}"`);


let tempString02 = "responsible";

let repeatingCharacter02 = repeatingCharacter(tempString02);
console.log(`The first repeating character in "${tempString02}" is "${repeatingCharacter02}"`);

