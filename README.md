# mongoose-created-at

[![NPM version](http://img.shields.io/npm/v/mongoose-created-at.svg?style=flat)](https://www.npmjs.org/package/mongoose-created-at)
[![Dependency Status](http://img.shields.io/gemnasium/ksmithut/mongoose-created-at.svg?style=flat)](https://gemnasium.com/ksmithut/mongoose-created-at)
[![Code Climate](http://img.shields.io/codeclimate/github/ksmithut/mongoose-created-at.svg?style=flat)](https://codeclimate.com/github/ksmithut/mongoose-created-at)
[![Build Status](http://img.shields.io/travis/ksmithut/mongoose-created-at.svg?style=flat)](https://travis-ci.org/ksmithut/mongoose-created-at)
[![Coverage Status](http://img.shields.io/codeclimate/coverage/github/ksmithut/mongoose-created-at.svg?style=flat)](https://codeclimate.com/github/ksmithut/mongoose-created-at)

Another mongoose created-at module. Gives you some options to change the path
and indexing object.

# Usage

```javascript
'use strict';

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var MySchema = new Schema({
  name: String
});

MySchema.plugin(require('mongoose-created-at'));
```

To pass in options:

```javascript
MySchema.plugin(require('mongoose-created-at'), {
  createdAtPath: 'createdAt',
  index: false
});
```

# Options

* `createdAtPath` (String) - The path to add the createdAt property. Default:
  `'createdAt'`
* `index` (Mixed) - The indexing options given to this field. See
  [http://mongoosejs.com/docs/api.html#schematype_SchemaType-index](http://mongoosejs.com/docs/api.html#schematype_SchemaType-index).
  Default: `false`
