'use strict';

module.exports = function createdAt(schema, options) {
  // Set the default options
  options = options || {};
  var createdAtPath = options.createdAtPath || 'createdAt';
  var index        = options.index || false;

  // Set the new path
  schema
    .path(createdAtPath, Date)
    .path(createdAtPath).default(Date.now);

  // If the index option was set, set the index
  if (index) {
    schema.path(createdAtPath).index(index);
  }

};
