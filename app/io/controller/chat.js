'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    async index() {
      const message = this.ctx.args[0];

      // Due to egg-cluster, console.log won't work here.
      console.error('chat :', message + ' : ' + process.pid);

      const say = await this.ctx.service.user.say();

      this.ctx.socket.emit('res', say);
    }
  }
  return Controller;
};
