var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  newTree.children = [];
  Object.assign(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let newTree = Tree(value);
  newTree.parent = this;
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  return this.children.reduce(function(alreadyFound, tree) {
    return Boolean(alreadyFound === true || tree.contains(target));
  }, this.value === target);
};

treeMethods.removeFromParent = function() {
  let ch = this.parent.children;
  ch.splice(ch.indexOf(this), 1);
  this.parent = null;
};


treeMethods.traverse = function(fn) {
  fn(this.value);
  this.children.forEach(tr=> tr.traverse(fn));
};
/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1)
 * contains: O(n)
 */
