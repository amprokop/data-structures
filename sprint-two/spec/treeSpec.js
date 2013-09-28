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
    tree.addChild(3);
    tree.addChild(2);
    console.log(tree);
    expect(tree.contains(3)).toBe(true);
    console.log(4);
    expect(tree.contains(4)).toBe(false);
    expect(tree.contains(2)).toBe(true);
  });

  it("should be able to completely remove a tree from its parent, keeping all children trees intact", function(){
    tree.addChild(5);
    tree.addChild(8);
    tree.addChild(9);
    expect(tree.children[0].value).toEqual(5);
    expect(tree.children[1].value).toEqual(8);
    expect(tree.children[2].value).toEqual(9);
    tree.children[0].addChild(8);
    tree.children[0].addChild(7);
    tree.children[1].addChild(12);
    tree.children[1].addChild(89);
    tree.children[2].addChild(56);    
    expect(tree.children[0].parent).toEqual(tree);
    expect(tree.children[1].parent).toEqual(tree);
    expect(tree.children[0].children[0].parent).toEqual(tree.children[0]);
    expect(tree.children[1].children[0].parent).toEqual(tree.children[1]);

    var runaway = tree.children[0].children[0];
    runaway.removeFromParent();

    expect(runaway.parent).toBeUndefined();
    expect(tree.children[0].children[0].value).toEqual(7);



  });

});