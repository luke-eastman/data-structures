

var HashTable = function() {
  this._limit = 8;
  this._bucketsInTable = 0;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < this._limit; i++) {
    this._storage.set(i, {});
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var collisions = this._storage.get(index);
  var itemNames = Object.getOwnPropertyNames(collisions);
  this._bucketsInTable++;
  collisions[k] = v;

  if (this._bucketsInTable / this._limit >= 0.75) {
    this._reSize(2 * this._limit);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var collisions = this._storage.get(index);
  return collisions[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var collisions = this._storage.get(index);
  if (collisions[k]) {
    delete collisions[k];
    this._bucketsInTable--;

    if (this._bucketsInTable / this._limit <= 0.25) {
      this._reSize(Math.max(8, this._limit / 2));
    }
  }
};

HashTable.prototype._reSize = function (size) {

  newStorage = LimitedArray(size);
  for (var i = 0; i < size; i++) {
    newStorage.set(i, {});
  }

  for (var i = 0; i < this._limit; i++) {
    var bucket = this._storage.get(i);
    for (var item in bucket) {
      var index = getIndexBelowMaxForKey(item, size);
      newStorage.get(index)[item] = bucket[item];
    }
  }
  this._storage = newStorage;
  this._limit = size;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(N)
 * retrieve: O(N)
 * remove: O(N)
 */


