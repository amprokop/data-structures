describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree(1);
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("should have a working 'contains' method that can operate over several levels of nesting", function(){
    tree.addChild({value: 3});
    tree.addChild({value: 2});
    expect(tree.contains(3)).toBe(true);
    expect(tree.contains(4)).toBe(false);
    expect(tree.contains(2)).toBe(true);
  });

});