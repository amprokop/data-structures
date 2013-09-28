var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._occupiedBuckets = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === undefined){
    this._storage.set(i, [[k, v]]);
    this._occupiedBuckets++;
    console.log(this._occupiedBuckets);
  } else {
    var bucket = [];
    for (var j = 0;j < this._storage.get(i).length; j++){
      var pair = this._storage.get(i)[j];
      bucket.push(pair);
    }
    bucket.push([k,v]);
    this._storage.set(i, bucket);
  }

  if ( ( this._occupiedBuckets ) >= (this._limit * .75)  ) {
    this.rehash();
  }
};

HashTable.prototype.rehash = function(){
//reusable across doubling and halving
debugger;
var thingsToRehash = [];

  this._storage.each(function(bucket){
    for (var i = 0; i < bucket.length; i++){
      thingsToRehash.push(bucket[i]);
    }

  if ( (this._occupiedBuckets) >= (this._limit * .75) ){
    this._limit = this._limit * 2;
  } else {
    this._limit = (this._limit / 2);
  }

  this._storage = makeLimitedArray(this._limit);

  for (var j = 0; j < thingsToRehash.length; j++){
    var pair = thingsToRehash[j];
    this.insert(pair[0],pair[1]);
  }

});

//iterate through all buckets in the limited array
//iterate through all items in each bucket
//push each pair to a temporary storage unit
//remove each pair
//if doubling, double the limit
//if halving, halve the limit
//call insert on each pair in the temporary storage unit

};

HashTable.prototype.contains = function(list, item){

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
