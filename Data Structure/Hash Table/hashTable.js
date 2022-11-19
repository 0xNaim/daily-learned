class HashTable {
  constructor() {
    this.table = new Array(100);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  // Old code
  // set(key, value) {
  //   const index = this._hash(key);
  //   this.table[index] = [key, value];
  //   this.size++;
  // }

  set(key, value) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        // Find the key/value pair in the chain
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
        // If not found, push a new key/value pair
        this.table[index].push([key, value]);
      }
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }
  // Old code
  // get(key) {
  //   const target = this._hash(key);
  //   return this.table[target];
  // }

  get(key) {
    const target = this._hash(key);
    if (this.table[target]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[target][i][0] === key) {
          return this.table[target][i][1];
        }
      }
    }
    return undefined;
  }

  // Old code
  // remove(key) {
  //   const index = this._hash(key);

  //   if (this.table[index] && this.table[index].length) {
  //     this.table[index] = [];
  //     this.size--;
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

const hash_table = new HashTable();
hash_table.set('1', 'Naim');
hash_table.set('2', 'Sanjoy');
hash_table.set('3', 'Pravel');

console.log(hash_table.get('1'));
console.log(hash_table.get('2'));
console.log(hash_table.get('3'));

// console.log(hash_table.remove('1'));
// console.log(hash_table.get('1'));

hash_table.display();
