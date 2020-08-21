var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this.contains(item)) {
    return;
  }
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  return item in this._storage;
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add: O(N)
 * contains: O(N)
 * remove: O(N)
 */
