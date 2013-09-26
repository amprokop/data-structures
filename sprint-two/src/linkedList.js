// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newTail = makeNode(value);
    if(list.head === null) {
      list.head = newTail;
    } else {
      list.tail.next = newTail;
    }
    list.tail = newTail;

  };

  list.removeHead = function(){
    var headVal = list.head.value;
    var next = list.head.next;
    delete list.head;
    list.head = next;
    return headVal;
  };

  list.contains = function(target, node){
    node = node || list.head;
    if(node.value === target) {
      return true;
    }
    if(node.next === null) {
      return false;
    } else {
      return list.contains(target, node.next);
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};