class HashTable {
  //#region => constructor()

  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    //console.log(key);

    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }

    return hash;
  }

  //#endregion

  //#region => set()
  // Performing a set on the hashtable is O(1) operation
  
  set(key, value) {
    let index = this._hash(key);

    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }

    this.dataMap[index].push([key, value]);

    return this;
  }

  //#endregion

  //#region => get()
  // Performing a get on the hashtable is O(1) operation

  get(key) {
    let index = this._hash(key);

    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] == key) {
          return this.dataMap[index][i][1];
        }
        
      }
    }

    return undefined;
  }

  //#endregion

  //#region => keys()
  // Fetching keys from hashtable is O(n2) operation

  keys() {
    let allKeys = [];

    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
          
        }
      }
    }

    return allKeys;
  }

  //#endregion

}

let myHashTable = new HashTable();
console.log(myHashTable);

myHashTable.set('bolts', 1400);
myHashTable.set('washers', 50);
myHashTable.set('lumber', 70);
console.log(myHashTable);

console.log(myHashTable.get('washers'));
console.log(myHashTable.get('tape'));

console.log(myHashTable.keys());