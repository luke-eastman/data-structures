

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < this._limit; i++) {
    this._storage.set(i, {});
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var collisions = this._storage.get(index);
  collisions[k] = v;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var collisions = this._storage.get(index);
  return collisions[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var collisions = this._storage.get(index);
  delete collisions[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(N)
 * retrieve: O(N)
 * remove: O(N)
 */


