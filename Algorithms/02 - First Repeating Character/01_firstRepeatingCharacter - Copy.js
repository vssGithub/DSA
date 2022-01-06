//#region => first repeating character using nested loop
// this function doesn't work!
/*
function repeatingCharacter(str) {
  for (let i = 0; i <= str.length; i++) {
    for (let j = i+1; j <= str.length; j++) {
      if (str[i] == str[j]) {
        return str[i];
      }
    }
  }
}
*/

//#endregion


let tempString = "exquisite";

let repeatingChar = repeatingCharacter(tempString);
console.log(`The first repeating character is "${repeatingChar}"`);



function test(str) {
  for (const x of Array(tempString.length).keys()) {
    for (const y of Array(x).keys()) {
      if (str[x] == str[y]) {
        return str[x];
      }
    }
  }
}

/*
//https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp

for (const x of Array(tempString.length).keys()) {
  console.log(x);
  for (const y of Array(x).keys()) {
    console.log(y);
  }
}
*/


let repeatingCharTest = test(tempString);
console.log(`The first repeating character is "${repeatingCharTest}"`);