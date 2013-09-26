var Queue = function() {
  this.indexFirst = 0;
  this.indexLast = 0;
};


Queue.prototype.enqueue = function(value){
  this[this.indexLast] = value;
  this.indexLast = this.indexLast + 1;
};

Queue.prototype.dequeue = function(){
  if(this.size()===0) {return undefined};

  var value = this[this.indexFirst];
  this[this.indexFirst] = undefined;
  this.indexFirst = this.indexFirst + 1;
  return value;
};

Queue.prototype.size = function(){
  return this.indexLast - this.indexFirst;
};

