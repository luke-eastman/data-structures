var BinarySearchTree = function(value) {
  let obj = {};
  obj.left = null;
  obj.right = null;
  obj.value = value;

  obj.insert = function(v) {
    if (obj.value === v) {
      return;
    }
    let newTree = BinarySearchTree(v);
    if (v < obj.value) {
      if (obj.left === null) {
        obj.left = newTree;
        return;
      } else {
        obj.left.insert(v);
      }
    } else {
      if (obj.right === null) {
        obj.right = newTree;
        return;
      } else {
        obj.right.insert(v);
      }
    }
  };

  obj.contains = function(v) {
    if (obj.value === v) {
      return true;
    } else if (obj.right === null && obj.left === null) {
      return false;
    } else if (obj.value < v) {
      return obj.right.contains(v);
    } else {
      return obj.left.contains(v);
    }
  };

  obj.depthFirstLog = function(cb) {
    cb(obj.value);
    if (obj.left !== null) {
      obj.left.depthFirstLog(cb);
    }
    if (obj.right !== null) {
      obj.right.depthFirstLog(cb);
    }
  };

  return obj;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * contains: O(log N)
 * insert: O(log N)
 * depthFirstLog: O(N)
 */
