#mongodb-collection-dump

dumps a [mongodb](https://npmjs.org/package/mongodb) collection to a stream.

Specify a mongoDB connect URI, the collection, and a path to the target file.

[![build status](https://secure.travis-ci.org/nickpoorman/mongodb-collection-dump.png)](http://travis-ci.org/nickpoorman/mongodb-collection-dump)

# example

Dump a collection to stream:

``` js
var todo = null;
```

# methods

``` js
var dump = require('mongodb-collection-dump')
```

## var d = dump(connectURI, collection, stream)

Create a new dump instance `d` that connects to the mongodb database at `connectURI` and dumps the entire collection to `stream`.

# events

## d.on('end', function () {})

This event fires when no more data will be provided from the database and after the database connection has closed.

## d.on('error', function (err) {})

Emitted when there is a error connecting to the database.

# install

With [npm](https://npmjs.org) do:

```
npm install mongodb-collection-dump
```

# license

MIT