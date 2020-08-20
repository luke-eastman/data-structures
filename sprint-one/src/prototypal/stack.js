var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.len = 0;
  obj.storage = {};
  return obj;
};

var stackMethods = {
  size: function() {
    return this.len;
  },

  push: function(value) {
    this.storage[this.len] = value;
    this.len++;
  },

  pop: function() {
    if (this.len === 0) {
      return null;
    }
    let temp = this.storage[this.len - 1];
    delete this.storage[this.len - 1];
    this.len--;
    return temp;
  }
};


