var path = require('path');
var chalk = require('chalk');
var useDefaultConfig = require('@ionic/app-scripts/config/optimization.config.js');

module.exports = function () {
  var env = process.env.IONIC_ENV === 'prod' ? '' : '.dev'
  var pathUrl = './src/environments/environment' + env + '.ts'
  useDefaultConfig.resolve.alias = {
    "@app/env": path.resolve(pathUrl)
  };
  console.log(chalk.red('\n' + pathUrl + 'optimization BROOOOO!!!!' + '\n' + env + "ENV NYA optimization DISINI BROOO"));
  return useDefaultConfig;
};