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

var rows = [];

console.log(typeof dump);

var d = dump('mongodb://127.0.0.1/test_db', 'testcollection', through(write, end));

function write(row) {
  rows.push(row)
}

function end() {
  console.log(expected);
}