

// Instantiate a new graph
var Graph = function() {
  let obj = Object.create(Graph.prototype);
  obj.edges = {};
  return obj;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return node in this.edges;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (!this.contains(node)) {
    return;
  }
  for (let e of this.edges[node]) {
    let arr = this.edges[e];
    arr.splice(arr.indexOf(e), 1);
  }
  delete this.edges[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (!(fromNode in this.edges)) {
    return false;
  }
  return this.edges[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let from = this.edges[fromNode];
  let to = this.edges[toNode];
  from.splice(from.indexOf(toNode), 1);
  to.splice(to.indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  Object.keys(this.edges).forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(1)
 * contains: O(N)
 * removeNode: O(N)
 * hasEdge: O(N)
 * addEdge: O(1)
 * removeEdge: O(N)
 * forEachNode: O(N)
 */


