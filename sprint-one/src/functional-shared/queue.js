var makeQueue = function(){

  var storage = {};
  storage.indexFirst = 0;
  storage.indexLast = 0;

  _.extend(storage, queueMethods);

  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this[this.indexLast] = value;
  //at the new this.indexLast, set value
  this.indexLast = this.indexLast + 1;
  //expand the this.index to prepare for a new value
};

queueMethods.dequeue = function(){
  if(this.size()===0) {return undefined};

  var value = this[this.indexFirst];
  //save the value for output
  this[this.indexFirst] = undefined;
  //get rid of the value of the first value
  this.indexFirst = this.indexFirst + 1;
  //shift the this.index forward one
  return value;
  //give us the value
};

queueMethods.size = function(){
  return this.indexLast - this.indexFirst;
};
