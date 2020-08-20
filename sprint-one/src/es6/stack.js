class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.len = 0;
    this.storage = {};
  }

  size() {
    return this.len;
  }

  push(value) {
    this.storage[this.len] = value;
    this.len++;
  }

  pop() {
    if (this.len === 0) {
      return null;
    }
    let temp = this.storage[this.len - 1];
    delete this.storage[this.len - 1];
    this.len--;
    return temp;
  }
}