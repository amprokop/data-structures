
var makeTree = function(value){
  var newTree = {};
  extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = undefined;

  return newTree;
};


var extend = function(to, from){
  for (var key in from) {
    to[key] = from[key];
  }
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  if(this.children === undefined){
    this.children = [child];
  } else {
    this.children.push(child);
  }
};

treeMethods.contains = function(target){
  if (target === this.value){
    return true;
  } else if (this.children !== undefined){
    for (var i = 0; i < this.children.length; i++){
      if ((this.children[i]).contains(target)) {
        return true;
      }
    }
  }

return false;
};

