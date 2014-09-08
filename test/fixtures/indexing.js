'use strict';

var mongoose  = require('mongoose');
var createdAt = require('../../index');
var Schema    = mongoose.Schema;

var TestSchema = new Schema({
  name: String
});

TestSchema.plugin(createdAt, {
  index: true
});

module.exports = mongoose.model('Test3', TestSchema);
