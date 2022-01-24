class Hashmap {
  static hash(str) {
    return str.split('').reduce((hash, char) => {
      return hash * 31 + char.charCodeAt(0);
    }, 7);
  }

  arr = [];
  put(key, value) {
    const hash = Hashmap.hash(key);
    const pairs = this.arr[hash] || [];
    const idx = pairs.findIndex(([k, v]) => {
      return k === key;
    });
    if (idx === -1) {
      pairs.push([key, value]);
    } else {
      pairs[idx] = [key, value];
    }
    this.arr[hash] = pairs;
  }
  get(key) {
    const hash = Hashmap.hash(key);
    const pairs = this.arr[hash];
    if (!pairs) {
      return -1;
    }
    const pair = pairs.find(([k, v]) => {
      return k === key;
    });
    return pair ? pair[1] : -1;
  }
  remove(key) {
    const hash = Hashmap.hash(key);
    const pairs = this.arr[hash];
    const idx = pairs.findIndex(([k, v]) => {
      return k === key;
    });
    if (idx !== -1) {
      pairs.splice(idx, 1);
    }
    if (pairs.length === 0) {
      delete this.arr[hash];
    }
  }
}
