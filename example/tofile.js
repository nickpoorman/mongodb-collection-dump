var fs = require('fs');
var dump = require('mongodb-collection-dump');

var collectionDumpFile = '/tmp/collection-dump.json';

var f = fs.createWriteStream(collectionDumpFile);

var d = dump('mongodb://127.0.0.1/test_db', 'testcollection', f);

d.on('end', function(){
  console.log("done in write");
});

d.on('error', function(err){
  console.log("there was an error");
  console.log(err);
});