var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var base = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size + base] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size === 0) {
      return null;
    }
    var temp = storage[base];
    delete storage[base];
    base++;
    size--;
    return temp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
