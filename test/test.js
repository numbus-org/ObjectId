var vows = require('vows'),
    assert = require('assert'),
    ObjectId = require('../lib/ObjectID').ObjectId,
    test;

for (var i=0;i<1000;i++){
  test = new ObjectId().toString();
  vows.describe('Generate an ObjectId like BSON spec ' + i).addBatch({
      'An Object': {
          topic: test,
          'is string': function (test) {
              assert.isString(test);
          },
          'and 24 chars length': function (test) {
             assert.equal(test.length,24) 
          }
      }
  }).export(module)  
}
