var async = require('async');
var http = require('http');

async.series([
// async.parallel([
  function(next) {
    setTimeout(function(err) {
      console.log(1);
      next(err, 1);
    }, 1000);
  },
  function(next) {
    setTimeout(function(err) {
      console.log(2);
      next(err, 2);
    }, 1000);

  },
  function(next) {
    setTimeout(function(err) {
      console.log(3);
      next(err, 3);
    }, 1000);
  }
], done);

function done(err, result) {
  console.log('done.');
  console.log('result', result);
}