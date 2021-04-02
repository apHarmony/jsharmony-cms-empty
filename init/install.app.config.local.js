exports = module.exports = function(appConfig, installerParams, callback){
  require('jsharmony-factory/init/install.app.config.local.js')(appConfig, installerParams, function(err){
    if(err) return callback(err);

    return callback();
  });
}