var test = require('tap').test;
var install = require('../lib/install');
var config = require('../config');

test('install package',function(t){
  install(config,'soldair-s3npm/s3-fixture',function(err,data){
    console.log(err,data);
    t.ok(!err,'should not have error with install');
    t.end();
  });    
});