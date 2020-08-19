class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.len = 0;
    this.base = 0;
    this.storage = {};
  }

  size() {
    return this.len;
  }

  enqueue(value) {
    this.storage[this.len + this.base] = value;
    this.len++;
  }

  dequeue() {
    if (this.len === 0) {
      return null;
    }
    var temp = this.storage[this.base];
    delete this.storage[this.base];
    this.len--;
    this.base++;
    return temp;
  }
}
