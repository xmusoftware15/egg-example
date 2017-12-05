'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1512351319854_8100';

  // add your config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'ejs',
    mapping: {
      ejs: 'ejs',
    },
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'eggjs',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '',
  };
  config.redis = {
    client: {
      host: '47.100.108.56',
      port: 6379,
      password: '123456',
      db: '0',
    },
    agent: true,
  };
  return config;
};