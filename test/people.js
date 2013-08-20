var test = require('tape');
var through = require('through');
var dump = require('../');

var expected = [{
  "_id": 1,
  "name": "Jim",
  "gender": "male"
}, {
  "_id": 2,
  "name": "Jane",
  "gender": "female"
}, {
  "_id": 3,
  "name": "Jill",
  "gender": "female"
}];

test('dump test collection', function(t) {
  t.plan(1);

  var rows = [];

  var d = dump('mongodb://127.0.0.1/test_db', 'testcollection', through(write, end));

  function write(row) {
    rows.push(row)
  }

  function end() {
    t.deepEqual(rows, expected)
  }
});