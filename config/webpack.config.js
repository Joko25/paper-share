// var chalk = require("chalk");
// var fs = require('fs');
// var path = require('path');
// var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

// var env = process.env.MY_ENV || process.env.my_env ? process.env.my_env : 'dev';;
// var devWebPackConfig = useDefaultConfig.dev;
// var prodWebPackConfig = useDefaultConfig.prod;

// if (env === 'prod') {
//   prodWebPackConfig.resolve.alias = {
//     "@app/env": path.resolve(environmentPath('prod'))
//   };
// }

// if (env === 'dev') {
//   devWebPackConfig.resolve.alias = {
//     "@app/env": path.resolve(environmentPath('dev'))
//   };
// }

// if (env === 'staging-dev') {
//   devWebPackConfig.resolve.alias = {
//     "@app/env": path.resolve(environmentPath('staging'))
//   };
// }

// if (env === 'staging-beta') {
//   prodWebPackConfig.resolve.alias = {
//     "@app/env": path.resolve(environmentPath('staging-beta'))
//   };
// }

// if (env === 'dev-beta') {
//   console.log(chalk.blue(' Masuk sini dev beta'));
//   prodWebPackConfig.resolve.alias = {
//     "@app/env": path.resolve(environmentPath('dev-beta'))
//   };
// }

// if (env === 'prod-dev') {
//   devWebPackConfig.resolve.alias = {
//     "@app/env": path.resolve(environmentPath('prod-dev'))
//   };
// }

// if (!env) {
//   // Default to dev config
//   devWebPackConfig = useDefaultConfig.dev;
//   devWebPackConfig.resolve.alias = {
//     "@app/env": path.resolve(environmentPath())
//   };
// }

// function environmentPath(env) {
//   var filePath = './src/environments/environment' + (env === 'prod' ? '' : '.' + env) + '.ts';
//   console.log(chalk.red('\n' + filePath + ' file nya nih'));
//   if (!fs.existsSync(filePath)) {
//     console.log(chalk.red('\n' + filePath + ' does not exist!'));
//   } else {
//     return filePath;
//   }

// }

// // module.exports = function () {
// //   console.log(chalk.yellow('\n' + useDefaultConfig + ' export'));
// //   return useDefaultConfig;
// // };

var path = require('path');
var defaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

var env = process.env.MY_ENV || process.env.my_env ? process.env.MY_ENV || process.env.my_env : 'dev';

var devWebPackConfig = defaultConfig.dev;
devWebPackConfig.resolve.alias = {
  "@app/env": path.resolve('./src/environments/environment' + (env === 'prod' ? '' : '.' + env) + '.ts')
};

var prodWebPackConfig = defaultConfig.prod;
prodWebPackConfig.resolve.alias = {
  "@app/env": path.resolve('./src/environments/environment' + (env === 'prod' ? '' : '.' + env) + '.ts')
};

module.exports = {
  dev: devWebPackConfig,
  prod: prodWebPackConfig
};