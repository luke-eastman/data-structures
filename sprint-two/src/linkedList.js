var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let node = new Node(value);
    if (list.tail === null) {
      list.tail = node;
      list.head = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }
    let head = list.head;
    list.head = list.head.next;
    return head.value;
  };

  list.contains = function(target) {
    let nsearch = (node) => {
      if (node === null) {
        return false;
      } else if (node.value === target) {
        return true;
      } else {
        return nsearch(node.next);
      }
    };
    return nsearch(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: O(1)
 * removeHead: O(1)
 * contains: O(N)
 */