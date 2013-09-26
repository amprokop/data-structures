var Stack = function() {
  this.stackSize = 0;
};

Stack.prototype.push = function(value){
  this[this.stackSize]=value;
  this.stackSize++;
};

Stack.prototype.pop = function(){
  this[this.stackSize] = undefined;
  if (this.stackSize){
    this.stackSize--;
  }
  return this[this.stackSize];
};

Stack.prototype.size = function(){
  return this.stackSize;
};