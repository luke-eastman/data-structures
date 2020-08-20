var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var len = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[len] = value;
    len++;
  };

  someInstance.pop = function() {
    if (len === 0) {
      return null;
    }
    let temp = storage[len - 1];
    delete storage[len - 1];
    len--;
    return temp;
  };

  someInstance.size = function() {
    return len;
  };

  return someInstance;
};
