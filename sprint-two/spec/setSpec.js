describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("should correctly add an item", function(){
    set.add("raptor");
    expect(set.contains("raptor")).toBe(true);
  });

  it("should remove multiple items when asked", function(){
    set.add("thing2");
    set.add("potato");
    set.remove("thing2");
    set.remove("potato");
    console.log(set.contains("thing2"));
    expect(set.contains("thing2")).toBe(false);
  });

  it("should return correct values when using 'contains'", function(){
    set.add("stuff");
    set.add("tehwrl");
    set.add("cider");
    console.log(set.contains("stuff"));
    expect(set.contains("stuff")).toBe(true);
    expect(set.contains("joy")).toBe(false);
  });

});