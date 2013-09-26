describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });
  // add more tests here to test the functionality of linkedList
  it("should return correct value of head and tail after adding to tail", function() {
    linkedList.addToTail(3);
    expect(linkedList.head.value).toEqual(3);
    expect(linkedList.tail.value).toEqual(3);
  });

  it("should return correct value after removing head", function() {
    linkedList.addToTail(3);
    linkedList.addToTail('hello');
    linkedList.addToTail(true);
    expect(linkedList.removeHead()).toEqual(3);
  });

  it("should return true if list contains a value that has been added", function() {
    linkedList.addToTail(3);
    linkedList.addToTail('hello');
    linkedList.addToTail(true);
    expect(linkedList.contains('hello')).toEqual(true);
    expect(linkedList.contains(3)).toEqual(true);
    expect(linkedList.contains(true)).toEqual(true);
  });

  it("should return false if list does not contain a value", function() {
    linkedList.addToTail(3);
    linkedList.addToTail('hello');
    linkedList.addToTail(true);
    expect(linkedList.contains('world')).toEqual(false);
  });
});