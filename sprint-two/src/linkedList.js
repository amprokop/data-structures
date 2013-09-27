// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.prev = null;

  list.addToTail = function(value){
    if(list.head === null) {
      list.head = newTail;
    }
    var newTail = makeNode(value);
    newTail.prev = list.tail;    
    list.tail.next = newTail;
    list.tail = newTail;
  };

  list.removeHead = function(){
    var currentHeadVal = list.head.value;
    var headInWaiting = list.head.next;
    headInWaiting.prev = null;
    delete list.head;
    list.head = headInWaiting;
    return currentHeadVal;
  };

  list.addToHead = function(value){
    var temp = list;
    var newList = makeLinkedList();
    newList = newList.addToTail(value);
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
  node.prev = null;

  return node;
};