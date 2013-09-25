var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var indexFirst = 0;
  var indexLast = 0;
  // Implement the methods below

  instance.enqueue = function(value){
    storage[indexLast] = value;
    //at the new indexLast, set value
    indexLast = indexLast + 1;
    //expand the index to prepare for a new value
  };

  instance.dequeue = function(){
    if (indexLast - indexFirst === 0) {return undefined; }

    var value = storage[indexFirst];
    //save the value for output
    storage[indexFirst] = undefined;
    //get rid of the value of the first value
    indexFirst = indexFirst + 1;
    //shift the index forward one
    return value;
    //give us the value
  };

  instance.size = function(){
    return indexLast - indexFirst;
  };

  return instance;
};

//two indexes--first and last. when you enqeue an item, start using fir

//size is now last minus first.

//the 
