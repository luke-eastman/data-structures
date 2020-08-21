var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let node = new DNode(value);
    if (list.tail === null) {
      list.tail = node;
      list.head = node;
    } else {
      node.previous = list.tail;
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.addToHead = function(value) {
    let node = new DNode(value);
    if (list.head === null) {
      list.tail = node;
      list.head = node;
    } else {
      node.tail = list.previous;
      list.head.previous = node;
      list.head = node;
    }
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }
    let head = list.head;
    if (list.head.next) {
      list.head = list.head.next;
      list.head.previous = null;
    }
    return head.value;
  };

  list.removeTail = function() {
    if (list.tail === null) {
      return null;
    }
    let tail = list.tail;
    list.tail = list.tail.previous;
    list.tail.next = null;
    return tail.value;
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

var DNode = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};