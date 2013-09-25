var makeStack = function() {

  var storage = {};
  storage.stackSize = 0;
  _.extend(storage, stackMethods);
  return storage;
};

var stackMethods = {};

stackMethods.push = function(value){
  this[this.stackSize]=value;
  this.stackSize++;
};

stackMethods.pop = function(){
  this[this.stackSize] = undefined;
  if (this.stackSize){
    this.stackSize--;
  }
  return this[this.stackSize];
};

stackMethods.size = function(){
  return this.stackSize;
};

