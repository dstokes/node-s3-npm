
var publish = require('./lib/publish')
var info = require('./lib/info')
var install = require('./lib/install')
var log = require('./lib/log');

// can put a package in s3
// can install a package from s3 

module.exports = function(config){

  //log('info','config',config);

  var cmd = config._[0];
  var cmds = {
    publish:function(config){
      publish(config,function(err,data){
        if(err) return log('error',err);
        log('success',data);
      }); 
    },
    info:function(config){
      info(config,config._[1],function(err,data){
        if(err) return log('error',err);
        log('success',data);
      });
    },
    install:function(config){

      install(config,config._[1],function(err,data){
        if(err) return log('error',err);
        if(data) log('success',data);
      });     
    }
  };

  // should support @version
  cmds.view = cmds.info;

  if(cmds[cmd]) {

    cmds[cmd](config);

  } else {
    log('error','unknown command ',cmd);
    process.exit(1);
  }

}
