'use strict';

var mongoose  = require('mongoose');
var createdAt = require('../../index');
var Schema    = mongoose.Schema;

var TestSchema = new Schema({
  name: String
});

TestSchema.plugin(createdAt, {
  createdAtPath: 'created_at'
});

module.exports = mongoose.model('Test2', TestSchema);
