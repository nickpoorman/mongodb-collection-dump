console.log('Version: ' + process.version);
var dump = require('mongodb-collection-dump');
var JSONStream = require('JSONStream');
var through = require('through')

var fs = require('fs');

var file = '/tmp/output';

var f = fs.createWriteStream(file);
var j = JSONStream.stringify();

j.pipe(f);

f.on('open', function() {
  var d = dump('mongodb://127.0.0.1/test_db', 'testcollection');
  d.pipe(j);
});