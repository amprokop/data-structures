
console.log(treeMethods);

var makeTree = function(value){
  var newTree = {};
  newTree.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};


var extend = function(to, from){
  for (var key in from) {
    to[key] = from[key];
  }
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  if (target === this.value){
    return true;
    }

  for (var i = 0; i < this.children.length; i++){
    return this.children[i].contains(target);
  }
};
