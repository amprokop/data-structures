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
    hashTable.insert(bob,marley);
    hashTable.remove(bob);
    expect(hashTable.retrieve(bob)).toBeUndefined();

  });

  it("should be able to retrieve lotsa cool things", function(){

    hashTable.insert(PenelopeCruzPhoneNumber, '9733014567');
    hashTable.insert(JohnnyDeppPINnumber, '8643');
    expect(hashTable.retrieve(PenelopeCruzPhoneNumber)).toEqual('9733014567');
    expect(hashTable.retrieve(PenelopeCruzPhoneNumber)).toEqual('8643');
  });
});
