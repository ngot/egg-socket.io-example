'use strict';

exports.io = {
  namespace: {
    '/chat': {
      connectionMiddleware: [ 'auth' ],
      packetMiddleware: [ 'filter' ],
    },
  },
};

exports.keys = '123';
