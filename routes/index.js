
/*
 * GET home page.
 */
var config = require('../config').config;

exports.index = function(req, res) {
  res.render('index', { app_config: config.app });
};