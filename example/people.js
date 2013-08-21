var dump = require('../');
var through = require('through');

var d = dump('mongodb://127.0.0.1/test_db', 'testcollection').pipe(through(write, end));

function write(row) {
  console.log(row);
}

function write(row) {
  console.log("done");
}