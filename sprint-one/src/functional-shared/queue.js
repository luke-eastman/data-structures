var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.len = 0;
  instance.base = 0;
  instance.storage = {};
  Object.assign(instance, queueMethods);
  return instance;
};

var queueMethods = {
  size: function() {
    return this.len;
  },

  enqueue: function(value) {
    this.storage[this.len + this.base] = value;
    this.len++;
  },

  dequeue: function() {
    if (this.len === 0) {
      return null;
    }
    let temp = this.storage[this.base];
    delete this.storage[this.base];
    this.len--;
    this.base++;
    return temp;
  }
};


