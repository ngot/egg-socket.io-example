'use strict';

const mm = require('egg-mock');
const assert = require('assert');
const ioc = require('socket.io-client');

const basePort = 17001;

function client(nsp = '', opts = {}) {
  let url = 'http://127.0.0.1:' + opts.port + (nsp || '');
  if (opts.query) {
    url += '?' + opts.query;
  }
  return ioc(url, opts);
}

describe('test/index.test.js', () => {
  afterEach(mm.restore);

  it('controller should works ok', done => {
    const app = mm.cluster();
    app.ready().then(() => {
      const socket = client('/chat', { port: basePort });
      socket.on('connect', () => {
        socket.emit('chat', 'test');
      });
      socket.on('disconnect', () => app.close().then(done, done));
      socket.on('res', msg => {
        assert(msg === 'Hello Man!');
        socket.close();
      });
    });
  });
});
