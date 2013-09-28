describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should handle hash function collisions", function(){
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    var v1 = 'val1', v2 = 'val2';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).toEqual(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
  });

  it("should be able to insert and remove correctly", function(){
    var bob = "bob";
    var marley = "marley";
    hashTable.insert(bob, marley);
    hashTable.remove(bob);
    expect(hashTable.retrieve(bob)).toBeUndefined();

  });

  it("should be able to retrieve lotsa cool things", function(){
    var PenelopeCruzPhoneNumber = 'PenelopeCruzPhoneNumber';
    var number = '9874324569';
    hashTable.insert(PenelopeCruzPhoneNumber, number);
    expect(hashTable.retrieve(PenelopeCruzPhoneNumber)).toEqual('9874324569');
  });

  it("should retrieve values correctly after doubling in size", function(){
    hashTable.insert(1,1);
    hashTable.insert(2,2);
    hashTable.insert(3,3);
    hashTable.insert(4,4);
    hashTable.insert(487,487);
    hashTable.insert(67890,67890);
    hashTable.insert(485454,485454);
    hashTable.insert(8675309,8675309);
    hashTable.insert(8675310,8675310);
    hashTable.insert(1234,1234);
    hashTable.insert(24601,24601);
    hashTable.insert(9737223441,9737223441);
    hashTable.insert(9,9);
    hashTable.insert(90,90);
    hashTable.insert(0,0);
    hashTable.insert(4328,4328);

    expect(hashTable.retrieve(1234)).toEqual(1234);
    expect(hashTable.retrieve(9)).toEqual(9);
    expect(hashTable.retrieve(4328)).toEqual(4328);
    expect(hashTable.retrieve(67890)).toEqual(67890);
    expect(hashTable.retrieve(487)).toEqual(487);
  });

  it("should retrieve values correctly after halving in size", function(){

  });
});
