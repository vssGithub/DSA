//#region => first repeating character using hashmap

function repeatingCharacter(str) {
  let hashmap = new Map();

  for (let i = 0; i < str.length; i++) {
    if (!hashmap.has(str[i])) {
      hashmap.set(str[i], false);
    }
    else {
      hashmap.set(str[i], true);
      //console.log(hashmap);
      return str[i];
    }
  }

  return [];
}

//#endregion


let tempString01 = "exquisite";

let repeatingCharacter01 = repeatingCharacter(tempString01);
console.log(`The first repeating character in "${tempString01}" is "${repeatingCharacter01}"`);


let tempString02 = "responsible";

let repeatingCharacter02 = repeatingCharacter(tempString02);
console.log(`The first repeating character in "${tempString02}" is "${repeatingCharacter02}"`);
