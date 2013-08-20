var util = require('util');
var EventEmitter = require('events').EventEmitter;
var fs = require('fs');

var MongoClient = require('mongodb').MongoClient;
var inherits = require('inherits');

module.exports = MongoDBCollectionDump;
function MongoDBCollectionDump(connectURI, collection, stream) {
  if (!(this instanceof MongoDBCollectionDump)) return new MongoDBCollectionDump(connectURI, collection, stream);
  EventEmitter.call(this);

  this.connectURI = connectURI;
  this.collection = collection;
  this.stream = stream;

  var self = this;

  MongoClient.connect(self.connectURI, function(err, db) {
    if (err) self.emit('error', err);

    var collection = db.collection(self.collection);

    var s = collection.find().stream();

    s.on("end", function() {
      db.close();
      self.emit('end');     
    });
    
    s.pipe(self.stream);
  });
}

inherits(MongoDBCollectionDump, EventEmitter);