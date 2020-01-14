'use strict';

module.exports = () => {
  return async (ctx, next) => {

    await next();

    // Due to egg-cluster, console.log won't work here.
    console.error('packet response!');
  };
};
