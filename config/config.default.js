/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1558420087888_4982';

  // add your middleware config here
  config.middleware = [];
  // config.authentication = {ignore: ['/v1/login']}

  const mongodb = {
    username: 'scada2_user',
    password: 'finfosoft123',
    server: '121.42.253.149',
    port: '19910',
    db: 'scada2',
  }; 
  config.mongoose = {
    url: `mongodb://${mongodb.username}:${mongodb.password}@${mongodb.server}:${mongodb.port}/${mongodb.db}`,
    options: {},
  };

  config.security = { // 禁用安全防范 ?_csrf=SJ5zDfje-57y89aZLNvPX-mf3V8rLxSsgc_4
    csrf: {
      enable: false,
    }
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  return config;
};
