var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === undefined){
    this._storage.set(i, [[k, v]]);
  } else {
    var bucket = [];
    for (var j = 0;j < this._storage.get(i).length; j++){
      var pair = this._storage.get(i)[j];
      bucket.push(pair);
    }
    bucket.push([k,v]);
    this._storage.set(i, bucket);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var output;
  for (var j = 0; j < this._storage.get(i).length; j++){
    var pair = this._storage.get(i)[j];
    if(pair[0] === k){
      output = pair[1];
    }
  }
  return output;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var indexOfPairToRemove;

  for (j = 0; j < bucket.length; j++){
    pair = bucket[j];
    if (pair[0] === k){
      indexOfPairToRemove = j;
    }
  }
  bucket.splice(indexOfPairToRemove, 1);
  this._storage.set(i, bucket);
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
