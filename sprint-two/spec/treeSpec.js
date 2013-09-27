describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("should have a working 'contains' method that can operate over several levels of nesting", function(){
    tree.value = 1;
    console.log(tree.value);
    tree.addChild(2);
    tree.addChild(3);


    expect(tree.contains(3)).toBe(true);
    expect(tree.contains(4)).toBe(false);
    expect(tree.contains(2)).toBe(true);
  });

  // Add more tests here to test the functionality of tree.
});