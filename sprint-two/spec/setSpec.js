describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should not contain duplicates', function() {
    set.add('Bingus Doodle');
    set.add('Bingus Doodle');
    var keys = Object.keys(set._storage);
    expect(keys.length).to.equal(1);
  });

  it('should work with numbers', function() {
    set.add(0);
    expect(set.contains(0)).to.be.true;
  });

  it('should handle input of any type', function() {
    let fn = (a, b)=> a % b;
    set.add(fn);
    expect(set.contains(fn)).to.be.true;
  });

  it('bloom filter is reasonably accurate', function() {
    for (var i = 0; i < 18; i++) {
      set.add(i);
    }
    var wrong = 0;
    for (var i = 0; i < 10000; i++) {
      var rand = Math.ceil(Math.random() * 100);
      if (set.bloomFilter(rand) && !set.contains(rand)) {
        wrong++;
      }
    }
    var approximation = Math.pow(1 - Math.pow(Math.E, (-3 * 10000 / 18)), 3);
    expect(wrong / 10000).to.be.at.most(approximation);
  });
});