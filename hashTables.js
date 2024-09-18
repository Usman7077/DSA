class hashTable {
  constructor(size = 53) {
    this.keymap = new Array(size);
  }
  _hashFunction(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let char of key) {
      total += char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME) % this.keymap.length;
    }
    return total;
  }
  set(key, value) {
    var hashValue = this._hashFunction(key);
    if (this.keymap[hashValue]) {
      this.keymap[hashValue].push([key, value]);
      return this.keymap;
    }
    this.keymap[hashValue] = [[key, value]];
    return this.keymap;
  }
  get(key) {
    var hashValue = this._hashFunction(key);
    if (this.keymap[hashValue].length > 1) {
      for (let i = 0; i < this.keymap[hashValue].length; i++) {
        if (this.keymap[hashValue][i][0] === key) {
          return this.keymap[hashValue][i][1];
        }
      }
    }
    var value = this.keymap[hashValue][0][1];
    return value;
  }
  keys() {
    var keys = [];
    this.keymap.forEach((i) => {
      if (i) {
        if (i.length === 1) {
          keys.push(i[0][0]);
        } else {
          i.forEach((ii) => keys.push(ii[0]));
        }
      }
    });
    return keys;
  }
}

const myHash = new hashTable();
myHash.set("purple", "#1");
myHash.set("blue", "#2");
myHash.set("black", "#3");
myHash.set("black", "#3");
myHash.set("cyan", "#4");
myHash.set("pink", "#5");
myHash.set("white", "#6");
myHash.set("grey", "#7");
myHash.set("yellow", "#8");
myHash.set("brown", "#9");
console.log(myHash);
console.log(myHash.keys());
