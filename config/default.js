const path = require('path');

module.exports = {
  port: process.env.PORT || 3000,
  mongodb: {
    url: 'mongodb://127.0.0.1:27017/yunyanjin'
  },
  schemeConf: path.join(__dirname, './default.scheme.js'),
  staticCacheConf: path.join(__dirname, '../public'),
  renderConf: path.join(__dirname, '../views/config'),
};