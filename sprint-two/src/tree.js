var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  Object.assign(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  return this.children.reduce(function(alreadyFound, tree) {
    return Boolean(alreadyFound === true || tree.contains(target));
  }, this.value === target);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1)
 * contains: O(n)
 */
