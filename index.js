var fs = require('fs');
var through = require('through');

var MongoClient = require('mongodb').MongoClient;

module.exports = MongoDBCollectionDump;

function MongoDBCollectionDump(connectURI, collection) {
  if (!(this instanceof MongoDBCollectionDump)) return new MongoDBCollectionDump(connectURI, collection);

  this.connectURI = connectURI;
  this.collection = collection;

  this.through = through(function write(data) {
      this.queue(data) //data *must* not be null
    },
    function end() { //optional
      this.queue(null)
    });

  var self = this;

  MongoClient.connect(self.connectURI, function(err, db) {
    if (err) self.through.emit('connectError', err);

    var collection = db.collection(self.collection);

    var s = collection.find().stream();

    s.on("end", function() {
      db.close();
    });

    s.pipe(self.through);
  });

  return this.through;
}