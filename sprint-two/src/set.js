var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  set.bloom = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this.contains(item)) {
    return;
  }
  this._storage[item] = true;

  var stringItem = '' + item;
  var first = getIndexBelowMaxForKey(stringItem, 18);
  var second = getIndexBelowMaxForKey(first + '', 18);
  var third = getIndexBelowMaxForKey(second + '', 18);
  this.bloom |= (1 << first);
  this.bloom |= (1 << second);
  this.bloom |= (1 << third);
};

setPrototype.contains = function(item) {
  return item in this._storage;
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    delete this._storage[item];
  }
};

setPrototype.bloomFilter = function(item) {
  var stringItem = '' + item;
  var first = getIndexBelowMaxForKey(stringItem, 18);
  var second = getIndexBelowMaxForKey(first + '', 18);
  var third = getIndexBelowMaxForKey(second + '', 18);
  return (this.bloom & (1 << first) && this.bloom & (1 << second) && this.bloom & (1 << third));
};
/*
 * Complexity: What is the time complexity of the above functions?
 * add: O(N)
 * contains: O(N)
 * remove: O(N)
 */
