'use strict';
/* global describe, before, beforeEach, after, afterEach, it */
/* jshint maxlen: false */

var expect   = require('expect.js');
var mongoose = require('mongoose');

describe('mongoose-created-at', function () {
  // Connect to the database
  before(function (done) {
    mongoose.connect('mongodb://127.0.0.1/mongoose-created-at-test', done);
  });

  // Level 1 tests
  describe('Level 1', function () {

    it('should save a createdAt property when a new model is saved', function (done) {
      var TestModel = require('./fixtures/default');
      var before = Date.now();
      var model = new TestModel({name: 'testname'});
      var after = Date.now();
      model.save(function (err, model) {
        expect(err).to.be(null);
        expect(model).to.be.an(Object);
        expect(model.name).to.be('testname');
        expect(model.createdAt).to.be.a(Date);
        expect(model.createdAt.getTime()).to.be.within(before, after);
        done();
      });
    });

    it('should use a different property name', function (done) {
      var TestModel = require('./fixtures/property-name');
      var before = Date.now();
      var model = new TestModel({name: 'testname'});
      var after = Date.now();
      model.save(function (err, model) {
        /* jshint camelcase: false */
        expect(err).to.be(null);
        expect(model).to.be.an(Object);
        expect(model.name).to.be('testname');
        expect(model.createdAt).to.be(undefined);
        expect(model.created_at).to.be.a(Date);
        expect(model.created_at.getTime()).to.be.within(before, after);
        done();
      });
    });

    it('should use given indexing options', function (done) {
      var TestModel = require('./fixtures/indexing');
      expect(TestModel.schema.paths.createdAt._index).to.be(true);
      done();
    });

  });
});
