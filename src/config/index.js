var developmentEnv = require('./development');
var productionEnv = require('./production');

module.exports = {
    development: developmentEnv,
    production: productionEnv
}[process.env.NODE_ENV || 'development']