var dump = require('../');
var through = require('through');

var rows = [];

var d = dump('mongodb://127.0.0.1/test_db', 'testcollection', through(write));

function write(row) {
  console.log(row);
}

d.on('end', function() {
  console.log("done");
});