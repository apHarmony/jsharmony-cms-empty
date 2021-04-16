exports = module.exports = function(appConfig, installerParams, callback){
  if(!appConfig.params.jsharmony) appConfig.params.jsharmony = {};
  appConfig.params.jsharmony.https_cert = "path.dirname(module.filename) + '/cert/localhost.crt'";
  appConfig.params.jsharmony.https_key = "path.dirname(module.filename) + '/cert/localhost.key'";
  require('jsharmony-cms/init/install.app.config.local.js')(appConfig, installerParams, function(err){
    if(err) return callback(err);
    
    return callback();
  });
}