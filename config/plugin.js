'use strict';

const plugins = {
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  }
};

module.exports = plugins;
