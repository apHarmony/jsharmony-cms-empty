var _ = require('lodash');
var async = require('async');
var path = require('path');
var fs = require('fs');
var https = require('https');
var express = require('jsharmony/lib/express');
var Helper = require('jsharmony/Helper');
var ejs = require('jsharmony/lib/ejs');

exports = module.exports = function(jsh, config, dbconfig){

  config.app_name = 'jsHarmony CMS'; //REQUIRED
  
  jsh.Extensions.image = require('jsharmony-image-sharp');

  //Server Settings
  config.server.http_port = 8080;
  config.server.http_ip = '0.0.0.0';
  config.server.https_port = 8081;
  config.server.https_ip = '0.0.0.0';
  config.server.https_key = path.dirname(module.filename) + '/cert/localhost.key';
  config.server.https_cert = path.dirname(module.filename) + '/cert/localhost.crt';
  config.server.request_timeout = 60*60*1000;
  
  //jsHarmony Factory Configuration
  var configFactory = config.modules['jsHarmonyFactory'];
  configFactory.JobCheckDelay = 5000;

  //CMS Configuration
  var configCMS = config.modules['jsHarmonyCMS'];
  if(configCMS){
    configCMS.preview_server.enabled = true;
    configCMS.git.enabled = true;
    configCMS.defaultEditorConfig.materialIcons = false;
  }
}