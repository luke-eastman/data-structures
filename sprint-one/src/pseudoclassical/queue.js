var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.len = 0;
  this.base = 0;
  this.storage = {};
};

Queue.prototype.constructor = Queue;

Queue.prototype.size = function() {
  return this.len;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.len + this.base] = value;
  this.len++;
};

Queue.prototype.dequeue = function() {
  if (this.len === 0) {
    return null;
  }
  var temp = this.storage[this.base];
  delete this.storage[this.base];
  this.len--;
  this.base++;
  return temp;
};
