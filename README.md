#mongodb-collection-dump

dumps a [mongodb](https://npmjs.org/package/mongodb) collection to a stream.

Specify a mongoDB connect URI, the collection, and a path to the target file.

[![build status](https://secure.travis-ci.org/nickpoorman/mongodb-collection-dump.png)](http://travis-ci.org/nickpoorman/mongodb-collection-dump)

# example

Dump a collection to stream:

``` js
var d = dump('mongodb://127.0.0.1/test_db', 'testcollection').pipe(through(write));

function write(row) {
  console.log(row);
}

d.on('end', function() {
  console.log("done");
});
```

# methods

``` js
var dump = require('mongodb-collection-dump')
```

## var d = dump(connectURI, collection)

dump connects to the mongodb database at `connectURI` and begins streaming the entire `collection`.

The returned object `s` is a [Stream](http://nodejs.org/api/stream.html).

# events

## d.on([Stream](http://nodejs.org/api/stream.html) events)

Any event [Stream](http://nodejs.org/api/stream.html) normally emits.

## d.on('connectError', function (err) {})

Emitted when there is a error connecting to the database.

# install

With [npm](https://npmjs.org) do:

```
npm install mongodb-collection-dump
```

# license

MIT