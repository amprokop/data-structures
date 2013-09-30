var HashTable = function(){
  this._limit = 8;
  this._size = 0;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var pairs = this._storage.get(i) || [];
  //if this._storage.get(i) is undefined, then the first item is falsy, and a blank array is created
  for( var j = 0; j < pairs.length; j++ ){
    var pair = pairs[j];
    if( pair[0] === k ){
      pair[1] = v;
      return;
    }
  }
  //if 

  pairs.push([k,v]);
  //in the case where the bucket already contains the key we're trying to insert, doesn't this line result in two identical pairs in the bucket?

  this._size++;
  if( this._size > this._limit * 0.75 ){
    this.resize(this._limit*2);
  }
  this._storage.set(i, pairs);
};

HashTable.prototype.retrieve = function(k){
  
  var i = getIndexBelowMaxForKey(k, this._limit);
  var pairs = this._storage.get(i) || [];
  for( var j = 0; j < pairs.length; j++ ){
    var pair = pairs[j];
    if( pair[0] === k ){
      return pair[1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var pairs = this._storage.get(i) || [];
  for( var j = 0; j < pairs.length; j++ ){
    var pair = pairs[j];
    if( pair[0] === k ){
      var savedPair = pairs.splice(j,1);
      this._size--;
      if( this._size < this._limit * 0.25 ){
        this.resize(this._limit*0.5);
      }
      return savedPair[1];
    }
  }
};

HashTable.prototype.resize = function(newLimit){
  this._limit = newLimit;
  var oldStorage = this._storage;
  this._storage = makeLimitedArray(this._limit);

  oldStorage.each(function(pairs){
    for( var i = 0; i < pairs.length; i++ ){
      var pair = pairs[i];
      this.insert(pair[0], pair[1]);
    }
  });
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
